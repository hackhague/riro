import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = "https://cdn.builder.io/api/v1/image/assets%2F7909ad45653f41d3a06b8bfbecb8e57b%2Fb4a852d263484468b5274bec5f7ac739?format=webp&width=800";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>("particulier");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const menuSections = {
    particulier: [
      { label: "Computerhulp", path: "/computerhulp", description: "Snelle hulp bij computerproblemen" },
      { label: "Hulp op afstand", path: "/hulp-op-afstand", description: "Veilig en snel via schermdeling" },
      { label: "Wifi verbeteren", path: "/wifi", description: "Betrouwbaar en snel internet" },
      { label: "Cyber APK", path: "/cyber-apk", description: "Veilig opslaan, snel terugzetten" },
    ],
    spoedhulp: [
      { label: "Ik ben gehackt", path: "/ik-ben-gehackt", description: "Directe cyberhulp, snel opgelost" },
      { label: "Phishing", path: "/ik-ben-gehackt", description: "Herstel na digitale fraude" },
      { label: "Wachtwoord reset", path: "/ik-ben-gehackt", description: "Toegang direct hersteld" },
    ],
    zakelijkExpat: [
      { label: "Zakelijk IT-support", path: "/zakelijk", description: "SLA, monitoring, snelle service" },
      { label: "Expat support", path: "/expat", description: "IT-hulp in het Engels" },
    ],
  };

  const topNavItems = [
    { label: "Contact", path: "/contact" },
    { label: "Over ons", path: "/over-ons" },
    { label: "Tarieven", path: "/tarieven" },
    { label: "Blog", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="InstantIT logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Diensten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 pt-2 w-[500px] grid-cols-3">
                      <div>
                        <h3 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Particulier</h3>
                        <ul className="space-y-2">
                          {menuSections.particulier.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block text-sm hover:text-primary transition-colors"
                                >
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Spoedhulp</h3>
                        <ul className="space-y-2">
                          {menuSections.spoedhulp.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block text-sm hover:text-primary transition-colors"
                                >
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-xs text-muted-foreground">{item.description}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xs uppercase text-muted-foreground mb-2">Zakelijk & Expat</h3>
                        <ul className="space-y-2">
                          {menuSections.zakelijkExpat.map((item) => (
                            <li key={item.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path}
                                  className="block text-sm hover:text-primary transition-colors"
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
                    <Link to={item.path}>
                      <NavigationMenuLink className="text-sm px-4 py-2 hover:text-primary transition-colors">
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="accent" size="sm" asChild className="rounded-full px-4">
              <a href="tel:+31702119191">
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                070 211 9191
              </a>
            </Button>
            <Button variant="accent" size="sm" asChild className="rounded-full px-4">
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                Whatsapp Ons
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
                  to="/diensten"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full px-2 py-2 text-sm font-bold text-foreground uppercase tracking-wide"
                >
                  Onze diensten
                </Link>
              </div>
              <div>
                <button
                  onClick={() => toggleSection("particulier")}
                  className="flex items-center justify-between w-full px-2 py-2 text-sm font-bold text-foreground uppercase tracking-wide"
                >
                  Particulier
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === "particulier" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "particulier" && (
                  <div className="mt-1">
                    {menuSections.particulier.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection("spoedhulp")}
                  className="flex items-center justify-between w-full px-2 py-2 text-sm font-bold text-foreground uppercase tracking-wide"
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
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
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
                  className="flex items-center justify-between w-full px-2 py-2 text-sm font-bold text-foreground uppercase tracking-wide"
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
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 text-xs text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
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
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1.5 text-xs text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <Button variant="accent" size="sm" asChild className="rounded-full px-4">
                  <a href="tel:+31702119191">
                    <Phone className="h-3.5 w-3.5 mr-1.5" />
                    070 211 9191
                  </a>
                </Button>
                <Button variant="accent" size="sm" asChild className="rounded-full px-4">
                  <a
                    href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                    Whatsapp Ons
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
