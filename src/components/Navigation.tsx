"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "https://cdn.builder.io/api/v1/image/assets%2F7909ad45653f41d3a06b8bfbecb8e57b%2F80a2912febff44cb923f467a2b6013c2?format=webp&width=800";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePrices } from "@/hooks/use-prices";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>("particulier");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["/computerhulp-den-haag"]));
  const pathname = usePathname();
  const priceConfig = usePrices();
  const { contact } = priceConfig;
  const whatsappDefaultHref = `${contact.whatsappHref}?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met`;

  const isActive = (path: string) => pathname === path;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const toggleExpandedItem = (itemPath: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemPath)) {
      newExpanded.delete(itemPath);
    } else {
      newExpanded.add(itemPath);
    }
    setExpandedItems(newExpanded);
  };

  const menuSections = {
    particulier: [
      {
        label: "Computerhulp aan huis",
        path: "/computerhulp-den-haag",
        description: "Snelle hulp bij computerproblemen",
        subitems: [
          { label: "Windows 10/11 Ondersteuning", path: "/windows-support" },
          { label: "Mac Support", path: "/mac-support" },
          { label: "Antivirus & Beveiliging", path: "/antivirus-setup" },
          { label: "Printerhulp", path: "/printer" },
          { label: "E-mail problemen", path: "/email" },
          { label: "Internet & WiFi", path: "/wifi" },
          { label: "Smartphone & Tablet", path: "/mobiel-tablet" },
          { label: "Computerlessen", path: "/uitleg-les" },
          { label: "Cyber APK", path: "/cyber-apk" },
        ],
      },
      {
        label: "Computerhulp op afstand",
        path: "/hulp-op-afstand",
        description: "Snelle remote hulp via schermdeling",
      },
    ],
    // Note: Windows, Mac, Antivirus are only shown as subitems under Computerhulp aan huis
    spoedhulp: [
      {
        label: "Ik ben gehackt",
        path: "/ik-ben-gehackt",
        description: "Directe cyberhulp, snel opgelost",
        subitems: [
          { label: "Phishing & Verdachte E-mails", path: "/phishing-hulp" },
          { label: "Instagram Account Gehackt", path: "/instagram-gehackt" },
          { label: "E-mail Account Gehackt", path: "/email-gehackt" },
          { label: "WhatsApp Fraude", path: "/whatsapp-fraude" },
          { label: "Ransomware Hulp", path: "/ransomware-hulp" },
          { label: "Helpdesk Fraude", path: "/helpdesk-fraude" },
        ],
      },
    ],
    zakelijkExpat: [
      { label: "Zakelijk IT-support op afstand", path: "/zakelijk", description: "SLA, monitoring, snelle service" },
      { label: "Zakelijk IT-support op locatie", path: "/zakelijk", description: "SLA, monitoring, snelle service" },
      { label: "Expat support", path: "/expat", description: "IT-hulp in het Engels" },
    ],
  };

  const topNavItems = [
    { label: "Tarieven", path: "/tarieven" },
    { label: "Contact", path: "/contact" },
    { label: "Over ons", path: "/over-ons" },
    { label: "Reviews", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={logo} alt="InstantIT logo" className="h-14 md:h-16 lg:h-[72px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">Diensten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 pt-2 w-[560px] grid-cols-[1fr_auto_1fr_auto_1fr] items-start">
                      <div>
                        <h3 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Particulier</h3>
                        <ul className="space-y-2">
                          {menuSections.particulier.map((item) => (
                            <li key={`${item.path}-${item.label}`}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.path}
                                  className="block text-base hover:text-primary transition-colors"
                                >
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                              {item.subitems && (
                                <ul className="mt-2 ml-3 space-y-1 border-l border-border pl-3">
                                  {item.subitems.map((subitem) => (
                                    <li key={`${subitem.path}-${subitem.label}`}>
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={subitem.path}
                                          className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                                        >
                                          {subitem.label}
                                        </Link>
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div aria-hidden className="hidden lg:block w-px bg-border self-stretch mx-2" />
                      <div>
                        <h3 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Spoedhulp</h3>
                        <ul className="space-y-2">
                          {menuSections.spoedhulp.map((item) => (
                            <li key={`${item.path}-${item.label}`}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.path}
                                  className="block text-base hover:text-primary transition-colors"
                                >
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div aria-hidden className="hidden lg:block w-px bg-border self-stretch mx-2" />
                      <div>
                        <h3 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Zakelijk & Expat</h3>
                        <ul className="space-y-2">
                          {menuSections.zakelijkExpat.map((item) => (
                            <li key={`${item.path}-${item.label}`}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.path}
                                  className="block text-base hover:text-primary transition-colors"
                                >
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {topNavItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.path}
                        className="text-base px-4 py-2 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="accent" size="sm" asChild className="rounded-full px-4">
              <a href={contact.phoneHref} aria-label={contact.phoneAriaLabel}>
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                {contact.phoneNumber}
              </a>
            </Button>
            <Button variant="accent" size="sm" asChild className="rounded-full px-4">
              <a
                href={whatsappDefaultHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                {contact.whatsappLabel}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-3 border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="space-y-3">
              <div>
                <Link
                  href="/diensten"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full px-2 py-2 text-base font-bold text-foreground uppercase tracking-wide"
                >
                  Onze diensten
                </Link>
              </div>
              <div>
                <button
                  onClick={() => toggleSection("particulier")}
                  className="flex items-center justify-between w-full px-2 py-2 text-base font-bold text-foreground uppercase tracking-wide"
                >
                  Particulier
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === "particulier" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "particulier" && (
                  <div className="mt-1 space-y-1">
                    {menuSections.particulier.map((item) => (
                      <div key={`${item.path}-${item.label}`}>
                        {item.subitems ? (
                          <button
                            onClick={() => toggleExpandedItem(item.path)}
                            className="flex items-center justify-between w-full px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                          >
                            {item.label}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                expandedItems.has(item.path) ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                        {item.subitems && expandedItems.has(item.path) && (
                          <div className="ml-4 space-y-1 border-l border-border pl-2 mt-1">
                            {item.subitems.map((subitem) => (
                              <Link
                                key={`${subitem.path}-${subitem.label}`}
                                href={subitem.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-2 py-1 text-xs text-foreground/70 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("spoedhulp")}
                  className="flex items-center justify-between w-full px-2 py-2 text-base font-bold text-foreground uppercase tracking-wide"
                >
                  Spoedhulp
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === "spoedhulp" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "spoedhulp" && (
                  <div className="mt-1">
                    {menuSections.spoedhulp.map((item) => (
                      <Link
                        key={`${item.path}-${item.label}`}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("zakelijkExpat")}
                  className="flex items-center justify-between w-full px-2 py-2 text-base font-bold text-foreground uppercase tracking-wide"
                >
                  Zakelijk & Expat
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === "zakelijkExpat" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "zakelijkExpat" && (
                  <div className="mt-1">
                    {menuSections.zakelijkExpat.map((item) => (
                      <Link
                        key={`${item.path}-${item.label}`}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-border">
                {topNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <Button variant="accent" size="sm" asChild className="rounded-full px-4">
                  <a href={contact.phoneHref} aria-label={contact.phoneAriaLabel}>
                    <Phone className="h-3.5 w-3.5 mr-1.5" />
                    {contact.phoneNumber}
                  </a>
                </Button>
                <Button variant="accent" size="sm" asChild className="rounded-full px-4">
                  <a
                    href={whatsappDefaultHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                    {contact.whatsappLabel}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
