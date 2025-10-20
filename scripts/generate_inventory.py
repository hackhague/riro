import csv
import re
from pathlib import Path
from typing import Dict, List, Tuple

APP_DIR = Path("src/app")
OUTPUT_DIR = Path("inventory")
OUTPUT_DIR.mkdir(exist_ok=True)

CTA_PATTERNS = [
    re.compile(r"<Button[^>]*>(.*?)</Button>", re.DOTALL | re.IGNORECASE),
    re.compile(r"<a[^>]*className=\"[^\"]*(?:btn|button|cta)[^\"]*\"[^>]*>(.*?)</a>", re.DOTALL | re.IGNORECASE),
]

CATEGORY_KEYWORDS = {
    "Computerhulp": [
        "computer",
        "laptop",
        "pc",
        "printer",
        "windows",
        "mac",
        "tablet",
        "smartphone",
        "apparaat",
        "hardware",
        "software",
    ],
    "Cyberhulp": [
        "cyber",
        "gehackt",
        "hack",
        "phishing",
        "ransomware",
        "account herstel",
        "account-herstel",
        "datalek",
        "spoof",
    ],
    "Beveiliging & Veilig gebruik": [
        "beveilig",
        "veiligheidscheck",
        "veilig",
        "virus",
        "antivirus",
        "malware",
        "wachtwoord",
        "2fa",
        "firewall",
        "bescherm",
        "scan",
    ],
    "Internet & E-mail": [
        "wifi",
        "wi-fi",
        "router",
        "modem",
        "internet",
        "glasvezel",
        "email",
        "e-mail",
        "outlook",
        "gmail",
        "webmail",
        "netwerk",
    ],
}

CATEGORY_OVERRIDES = {
    "/": "Computerhulp",
    "/mobiel-tablet": "Computerhulp",
    "/cyber-apk": "Beveiliging & Veilig gebruik",
}

INTERNAL_LINK_PATTERN = re.compile(r"href\s*=\s*(?:{\s*)?[\"'](/[^\"'}\s#?]+)[\"']", re.IGNORECASE)
TEL_PATTERN = re.compile(r"tel:[^\"' )>]+", re.IGNORECASE)
EMAIL_PATTERN = re.compile(r"mailto:[^\"' )>]+", re.IGNORECASE)
PRICE_PATTERN = re.compile(r"€\s*\d+(?:[.,]\d+)?(?:,-)?")

TAG_CLEANER = re.compile(r"<[^>]+>")
WHITESPACE_CLEANER = re.compile(r"\s+")


def clean_text(text: str) -> str:
    text = TAG_CLEANER.sub(" ", text)
    # Verwijder React whitespace helpers zoals {" "}
    text = re.sub(r"\{\s*\"\s*\"\s*\}", " ", text)
    text = text.replace("&nbsp;", " ")
    text = WHITESPACE_CLEANER.sub(" ", text)
    return text.strip()


def extract_metadata_title(content: str) -> str:
    metadata_block = re.search(r"export const metadata[^=]*=\s*{(.*?)};", content, re.DOTALL)
    if metadata_block:
        title_match = re.search(r"title\s*:\s*[\"']([^\"']+)[\"']", metadata_block.group(1))
        if title_match:
            return title_match.group(1).strip()
    return ""


def extract_h1(content: str) -> str:
    match = re.search(r"<h1[^>]*>(.*?)</h1>", content, re.DOTALL | re.IGNORECASE)
    if match:
        return clean_text(match.group(1))
    return ""


def detect_category(content: str, route: str) -> str:
    if route in CATEGORY_OVERRIDES:
        return CATEGORY_OVERRIDES[route]
    text = f"{route} {content}".lower()

    hulp_keywords = [
        "computerles",
        "computerlessen",
        "persoonlijke les",
        "1-op-1",
        "workshop",
        "cursus",
    ]
    if any(term in route.lower() for term in ["uitleg", "les"]):
        return "Hulp & uitleg"
    if any(keyword in text for keyword in hulp_keywords):
        return "Hulp & uitleg"

    scores = {category: 0 for category in CATEGORY_KEYWORDS}
    for category, keywords in CATEGORY_KEYWORDS.items():
        for keyword in keywords:
            if keyword in text:
                scores[category] += text.count(keyword)

    best_score = max(scores.values())
    if best_score == 0:
        return "Computerhulp"
    best_categories = [category for category, score in scores.items() if score == best_score]
    if "Computerhulp" in best_categories:
        return "Computerhulp"
    return best_categories[0]


def extract_ctas(content: str) -> List[str]:
    ctas: List[str] = []
    for pattern in CTA_PATTERNS:
        for match in pattern.findall(content):
            text = clean_text(match)
            if text:
                ctas.append(text)
    # Also capture Link components with explicit labels
    for match in re.findall(r"<Link[^>]*href[^>]*>(.*?)</Link>", content, re.DOTALL | re.IGNORECASE):
        text = clean_text(match)
        if text:
            ctas.append(text)
    unique = []
    seen = set()
    for text in ctas:
        if "{" in text or "}" in text:
            continue
        if text not in seen:
            seen.add(text)
            unique.append(text)
    return unique


def extract_prices(content: str) -> List[Tuple[str, str]]:
    prices = []
    for match in PRICE_PATTERN.finditer(content):
        price = match.group(0).replace(" ", "")
        start, end = match.span()
        snippet = content[max(0, start - 80): min(len(content), end + 80)]
        snippet = clean_text(snippet)
        prices.append((price, snippet))
    return prices


def extract_links(pattern: re.Pattern, content: str) -> List[str]:
    items = []
    for match in pattern.findall(content):
        value = match.strip()
        if value not in items:
            items.append(value)
    return items


def derive_route(page_path: Path) -> str:
    try:
        relative = page_path.relative_to(APP_DIR)
    except ValueError:
        return ""
    parts = list(relative.parts[:-1])  # exclude page.tsx
    if not parts:
        return "/"
    segments = []
    for part in parts:
        if part.startswith("(") and part.endswith(")"):
            part = part[1:-1]
        segments.append(part.replace("%20", "-"))
    return "/" + "/".join(segments)


def main() -> None:
    page_files = sorted(APP_DIR.rglob("page.tsx"))
    data_rows = []
    price_rows = []
    links_rows = []
    seen_link_pairs = set()
    for page_file in page_files:
        if "api" in page_file.parts:
            continue
        content = page_file.read_text(encoding="utf-8")
        route = derive_route(page_file)
        title = extract_metadata_title(content)
        h1 = extract_h1(content)
        category = detect_category(content, route)
        ctas = extract_ctas(content)
        prices = extract_prices(content)
        tel_links = extract_links(TEL_PATTERN, content)
        email_links = extract_links(EMAIL_PATTERN, content)
        internal_links = []
        for link in INTERNAL_LINK_PATTERN.findall(content):
            if link.startswith("//"):
                continue
            if link.startswith("/api"):
                continue
            if link.startswith("/#"):
                continue
            if link == route:
                continue
            if link not in internal_links:
                internal_links.append(link)
            pair = (route, link)
            if pair not in seen_link_pairs:
                links_rows.append({"from_route": route, "to_route": link})
                seen_link_pairs.add(pair)
        data_rows.append({
            "route": route,
            "title": title or "niet gevonden",
            "h1": h1 or "niet gevonden",
            "category": category,
            "prices": ", ".join(p for p, _ in prices) if prices else "geen",
            "ctas": ", ".join(ctas) if ctas else "geen",
            "tels": ", ".join(tel_links) if tel_links else "geen",
            "emails": ", ".join(email_links) if email_links else "geen",
            "internal_links": ", ".join(internal_links) if internal_links else "geen",
        })
        for price, snippet in prices:
            price_rows.append({"route": route, "price": price, "snippet": snippet})
    # Write ROUTES.csv
    routes_path = OUTPUT_DIR / "ROUTES.csv"
    with routes_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["route", "title", "h1", "category", "prices", "ctas", "tels", "emails"],
        )
        writer.writeheader()
        for row in data_rows:
            writer.writerow({k: row[k] for k in ["route", "title", "h1", "category", "prices", "ctas", "tels", "emails"]})
    # Write PRICES.csv
    prices_path = OUTPUT_DIR / "PRICES.csv"
    with prices_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["route", "price", "snippet"])
        writer.writeheader()
        for row in price_rows:
            writer.writerow(row)
    # Write LINKS.csv
    links_path = OUTPUT_DIR / "LINKS.csv"
    with links_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["from_route", "to_route"])
        writer.writeheader()
        for row in links_rows:
            writer.writerow(row)
    # Write SITE_AUDIT.md
    site_audit_path = OUTPUT_DIR / "SITE_AUDIT.md"
    with site_audit_path.open("w", encoding="utf-8") as f:
        f.write("# Pagina-overzicht\n\n")
        for row in data_rows:
            f.write(f"## Route: {row['route']}\n")
            f.write(f"- Titel: {row['title']}\n")
            f.write(f"- Eerste kop (H1): {row['h1']}\n")
            f.write(f"- Hoofdrubriek: {row['category']}\n")
            f.write(f"- Prijzen: {row['prices']}\n")
            f.write(f"- CTA's: {row['ctas']}\n")
            f.write(f"- Telefoonlinks: {row['tels']}\n")
            f.write(f"- E-mail links: {row['emails']}\n")
            f.write(f"- Interne links: {row['internal_links']}\n\n")
    # Prepare conflicts (placeholder, manual review required)
    conflicts_path = OUTPUT_DIR / "CONFLICTS.md"
    conflicts: Dict[str, List[Tuple[str, str]]] = {}
    for row in price_rows:
        snippet_key = re.sub(r"\s+", " ", row["snippet"].lower())
        key = ""
        for word in ["starttarief", "spoed", "strippenkaart", "abonnement", "apk", "opschonen", "uurtarief", "op afstand"]:
            if word in snippet_key:
                key = word
                break
        if key:
            conflicts.setdefault(key, []).append((row["route"], row["price"]))
    with conflicts_path.open("w", encoding="utf-8") as f:
        f.write("# Prijsconflicten\n\n")
        found_conflict = False
        for key, values in conflicts.items():
            unique_prices = {}
            for route, price in values:
                unique_prices.setdefault(price, set()).add(route)
            if len(unique_prices) > 1:
                found_conflict = True
                f.write(f"## {key.capitalize()}\n")
                for price, routes in unique_prices.items():
                    route_list = ", ".join(sorted(routes))
                    f.write(f"- {price}: {route_list}\n")
                f.write("\n")
        if not found_conflict:
            f.write("Geen conflicten gevonden op basis van automatisch herkende diensten. Controleer handmatig voor zekerheid.\n")
    # Append linkflow list to SITE_AUDIT if no image
    with site_audit_path.open("a", encoding="utf-8") as f:
        f.write("---\n\n")
        f.write("## Navigatie (tekstueel)\n")
        homepage_links = [row["to_route"] for row in links_rows if row["from_route"] == "/"]
        if homepage_links:
            f.write("- Home → " + ", ".join(sorted(set(homepage_links))) + "\n")
        else:
            f.write("- Home → geen links gevonden\n")


if __name__ == "__main__":
    main()
