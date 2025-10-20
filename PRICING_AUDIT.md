# 📊 COMPLETE PRICING AUDIT - InstantIT

**Last Updated:** 2024
**Status:** ⚠️ MULTIPLE INCONSISTENCIES FOUND

---

## 🔴 CRITICAL INCONSISTENCIES

### 1. **CYBER-APK (3 Different Prices!)**

| Page | Price | Details |
|------|-------|---------|
| `/cyber-apk` | **€129** | 60-90 min + adviesrapport |
| `/ik-ben-gehackt` | **€99** (remote) + **€149** (on-site) | Preventief (€99) vs Ter plaatse (€149) |
| `/tarieven` | **NOT LISTED** | Listed under "Op aanvraag" (confusing) |

**ISSUE:** Which is correct? €99, €129, or €149?
**RECOMMENDATION:** Clarify - is there a separate "Cyber-APK remote" (€99) and "Cyber-APK on-site" (€149)?

---

### 2. **HACK-INCIDENT / TRIAGE PRICING**

| Page | Price | Details |
|------|-------|---------|
| `/ik-ben-gehackt` | **€149** (remote) + **€249** (on-site) | Until 2 hours, then €30/15min |
| `/tarieven` | **"Op aanvraag"** | Vague, no specific pricing |
| `/zakelijk` (pricing list) | **€199** (spoed on-site) | Business emergency on-site |
| `/diensten` (JSON-LD) | €149 remote, €199 spoed, €249 zakelijk, €499 First Response | Business package pricing |

**ISSUE:** `/tarieven` doesn't list hack pricing at all - users don't know the cost!
**CONFUSION:** Is €199 a separate "spoed" tier or same as €249?

---

### 3. **REMOTE SUPPORT PRICING (Particulier)**

| Service | Price | Duration | Page |
|---------|-------|----------|------|
| Computerhulp op afstand | **€35** | First 30 min | `/tarieven`, `/page.tsx` |
| Hulp op afstand (range) | **€39–€99** | €1/min (min €39, cap €99) | `/hulp-op-afstand` |
| Antivirus setup (remote) | **€39** | 30 minutes | `/antivirus-setup` |
| Mac support (remote) | **€39** | 30 minutes | `/mac-support` |
| Windows support (remote) | **€39** | 30 minutes | `/windows-support` |
| E-mail (remote) | **€39** | 30 minutes | `/email` |
| Tablet/Mobile (remote) | **€39** | 30 minutes | `/mobiel-tablet` |

**ISSUE:** €35 vs €39 for "first 30 min"? 
**CONFUSION:** Is it "first 30 min" (fixed price) or "€1/min capped at €99"?

---

### 4. **ON-SITE / HOME VISIT PRICING (Particulier)**

| Service | Price | Duration | Page |
|---------|-------|----------|------|
| Computerhulp aan huis | **€59** | First 45 min | `/tarieven` |
| IT Spoedhulp aan huis | **€89** | First hour | `/tarieven` |
| Antivirus setup (on-site) | **€59** | 1 hour | `/antivirus-setup` |
| Mac support (on-site) | **€59** | per hour | `/mac-support` |
| Windows support (on-site) | **€59** | per hour | `/windows-support` |
| Printer help (on-site) | **€59** | per hour | `/printer` |
| E-mail (on-site) | **€59** | per hour | `/email` |
| Tablet/Mobile (on-site) | **€59** | per hour | `/mobiel-tablet` |
| Training/Lessons | **€59** | per hour | `/uitleg-les` |

**CLEAR:** This is consistent across pages ✅

---

### 5. **BUSINESS PRICING**

| Service | Price | Details | Page |
|---------|-------|---------|------|
| IT-support op afstand | **€35** | First 30 min (ex VAT) | `/tarieven`, `/zakelijk` |
| IT-support aan kantoor | **€79** | First hour (ex VAT) | `/tarieven`, `/zakelijk` |
| IT Spoedhulp kantoor | **€89** | First hour | `/tarieven`, `/zakelijk` |
| Emergency remote (Zakelijk) | **€39** | 30 min cap €99 | `/zakelijk` pricing list |
| Spoed on-site (Zakelijk) | **€199** | max 24-48h | `/zakelijk` pricing list |
| First Response (Zakelijk) | **€499** | 4 hours | `/diensten` JSON-LD only |

**ISSUE:** Why €199 "spoed on-site" in `/zakelijk` but €249 on `/ik-ben-gehackt`?
**CONFUSION:** Is €499 "First Response" advertised anywhere in UI?

---

### 6. **SPECIALTY SERVICES**

| Service | Price | Duration | Page |
|---------|-------|----------|------|
| Windows 11 Upgrade | **€119** | Now 20% discount! | `/windows-support` |
| WiFi optimization | **€149** | survey + plan + config | `/wifi` |
| WiFi installation (mesh/router) | **€65** | per hour | `/wifi` |
| Training package (5 lessons) | **€270** | 5 × €59 (saves €25) | `/uitleg-les` |
| Antivirus annual (ESET) | **€60** | per year | `/antivirus-setup` |
| Diagnose only (failed repair) | **€19** | Flat fee if unfixed | `/printer`, `/expat` |

---

### 7. **EXPAT PAGE (English) - DIFFERENT PRICING**

| Service | Price | Cap/Details |
|---------|-------|-------------|
| Remote help | **€39 / 30 min** | Capped at €99 |
| On-site visit | **€65 / hour** | No travel fees Haaglanden |
| Emergency security | **€79 / 45 min** | Capped at €149 remote |
| Diagnosis only | **€19** | If can't solve it |

**ISSUE:** €65/hour on-site vs €59/hour on Dutch pages? Different pricing for expats?

---

## 🎯 SUMMARY TABLE - Core Services

```
┌─────────────────────────┬──────────────┬──────────────┬──────────────┬─────────────┐
│ Service                 │ Remote       │ On-site      │ Spoed/Emerg. │ Source      │
├─────────────────────────┼──────────────┼──────────────┼──────────────┼─────────────┤
│ General IT Help         │ €35-€39      │ €59          │ €89 (24-48h) │ Inconsist.  │
│ Security/Hack Response  │ €149         │ €249         │ TBD          │ ik-gehackt  │
│ Preventive Cyber-APK    │ €99          │ €149         │ N/A          │ Mixed       │
│ WiFi Optimization       │ N/A          │ €149 (survey)│ €65/h        │ wifi page   │
│ Windows 11 Upgrade      │ N/A          │ €119 (-20%)  │ N/A          │ windows     │
│ Antivirus Setup         │ €39          │ €59          │ N/A          │ antivirus   │
│ Training/Lessons        │ N/A          │ €59/h        │ €270/5       │ lessons     │
�� Business Emergency      │ €99 cap      │ €199-€249    │ €499         │ zakelijk    │
└─────────────────────────┴──────────────┴──────────────┴──────────────┴─────────────┘
```

---

## 🤔 CONFUSING PARTS & QUESTIONS FOR YOU

1. **Remote Support Model:**
   - Is it "€35 first 30 min" OR "€1/min with €39 min cap and €99 max"?
   - Why both models exist?

2. **Cyber-APK Pricing:**
   - Is it €99 (remote) / €149 (on-site) OR €129 (unified)?
   - Should it have remote/on-site variants like hack-incident?

3. **Hack-Incident vs. Emergency Spoed:**
   - Hack-incident (€149 remote, €249 on-site) = preventive/incident response?
   - Spoed on-site (€199 or €249?) = emergency repair?
   - Are they the same service or different?

4. **Business Pricing:**
   - Is €199 "spoed on-site" different from €249 hack on-site?
   - Is €499 "First Response" actively marketed?

5. **Expat Page:**
   - Why €65/hour on-site vs €59 for Dutch customers?
   - Is this intentional premium pricing?

6. **Diagnose-Only Fee (€19):**
   - Listed on `/printer` and `/expat`
   - Should this be on `/tarieven` page?

---

## 💡 MARKETING RECOMMENDATIONS

### **A. PRICING STRUCTURE - My Recommendation**

Create **3 clear tiers** instead of scattered services:

```
TIER 1: QUICK FIX (Remote)
├─ €39 (first 30 min, then €15/15min, capped €99)
├─ Best for: Software issues, virus check, quick setup
├─ Response: 10-30 minutes
└─ Target: Budget-conscious users

TIER 2: STANDARD SERVICE (On-site)
├─ €59 (first 45 min, then €17.25/15min)
├─ Best for: Hardware diagnostics, full cleanup, training
├─ Response: 48-72 hours (or 24-48 emergency)
└─ Target: Regular home users

TIER 3: EMERGENCY/SPECIALIZED (Premium)
├─ €89 (on-site, first hour) + €149 (cyber-APK) + €199-€249 (hack response)
├─ Best for: Urgent issues, security incidents, full scans
├─ Response: 24-48 hours
└─ Target: Business users & security-conscious clients
```

### **B. WHERE TO ADVERTISE EACH PRICE**

**✅ `/tarieven` (Price Page - Single Source of Truth)**
- Should list ALL services with clear pricing
- Use tables for clarity
- Group by: Remote / On-site / Specialized
- Include: What's included, response time, cancellation policy

**✅ Individual Service Pages (e.g., `/cyber-apk`, `/ik-ben-gehackt`)**
- Show ONLY relevant pricing for that service
- Link to `/tarieven` for comparison
- Example: "Cyber-APK from €99 (remote) → View all prices"

**✅ Homepage / Landing Pages**
- Show TOP 3-4 most popular services with price + benefit
- Use "Starting from €39" format
- CTA: "View full pricing" → `/tarieven`

**✅ Appointment Wizard**
- Show price when user selects delivery method
- Example: "Remote Help - €39-€99" (before booking)

---

### **C. PACKAGING IDEAS**

**Option 1: Service Bundles**
```
SECURITY PACKAGE - €249
├─ Cyber-APK scan (€99)
├─ Antivirus installation (€59)
├─ Password & 2FA setup (€39 remote)
└─ Save €48!

BUSINESS STARTER - €399
├─ WiFi optimization (€149)
├─ Antivirus on all computers (€59)
├─ Backup setup (€39)
├─ 3 months follow-up check
└─ Save €85 vs. individual
```

**Option 2: Time-Based Packages**
```
MAINTENANCE PLAN - €99/month
├─ Monthly Cyber-APK check
├─ 2 hours on-site support
├─ Priority response (same-day)
├─ All software updates included
└─ Best for businesses
```

**Option 3: Tiered Transparency**
```
SEE WHAT YOU GET
────────────────
Quick Check (€19)  → Diagnose only
Quick Fix (€39)    → First 30 min remote
Full Service (€59) → First 45 min on-site
Emergency (€89)    → Priority 24-48h
Custom (€request)  → Business packages
```

---

### **D. COMMUNICATION STRATEGY**

**Show prices EARLY:**
- ✅ In appointment wizard BEFORE selecting date
- ✅ In service cards on homepage
- ✅ In navigation breadcrumbs: "View our €35-€249 services"

**Build trust with clarity:**
- ✅ "No hidden fees" badge next to price
- ✅ "7-day free follow-up included" badge
- ✅ "No travel fees in Haaglanden" callout

**Reduce friction:**
- ✅ "Choose delivery method → see final price"
- ✅ "Book now, we confirm by phone"
- ✅ Link back to `/tarieven` from every service page

---

## ⚡ ACTION ITEMS FOR YOU

### Immediate (High Priority)
1. ✅ **Decide on Cyber-APK pricing:** €99/€149 (two-tier) or €129 (unified)?
2. ✅ **Update `/tarieven`:** Add hack-incident, Cyber-APK, business packages
3. ✅ **Fix AppointmentWizard:** Show correct pricing for each delivery method
4. ✅ **Clarify remote model:** Is it €35 flat OR €1/min with caps?

### Medium Priority  
5. **Decide on Expat pricing:** Is €65/hour intentional or should align with €59?
6. **Create `/tarieven` as source of truth:** All other pages reference it
7. **Add package deals:** Offer bundled services for 15-25% savings
8. **Business tier clarity:** Define €199 vs €249 vs €499

### Nice to Have
9. Add "maintenance plans" for recurring customers (€99-€299/month)
10. Create pricing comparison chart (one-time vs. package vs. annual)
11. A/B test: "Starting from €39" vs. "€39-€99" messaging

---

## 📋 NEXT STEPS

**Can you clarify:**
1. What's the CORRECT pricing for Cyber-APK?
2. Is remote support €35 (fixed 30min) or €39-€99 (variable per minute)?
3. Should hack-incident & cyber-APK be listed on `/tarieven`?
4. Is the expat page pricing different intentionally?

Once you confirm, I can update all pages with consistent pricing! 🎯
