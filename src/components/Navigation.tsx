import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuSections = {
    particulier: [
      { label: "Computerhulp", path: "/computerhulp", description: "Snelle hulp bij computerproblemen" },
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
      { label: "Remote support", path: "/zakelijk", description: "Veilig op afstand geholpen" },
    ],
  };

  const topNavItems = [
    { label: "Over ons", path: "/diensten" },
    { label: "Blog", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="instantIT" className="h-10" />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Diensten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[500px] grid-cols-3">
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
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+31702119191">
                <Phone className="h-3.5 w-3.5" />
                070 211 9191
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
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
                <h3 className="px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Particulier
                </h3>
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
              
              <div>
                <h3 className="px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Spoedhulp
                </h3>
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
              
              <div>
                <h3 className="px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Zakelijk & Expat
                </h3>
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

              <div className="flex flex-col gap-1.5 pt-1">
                <Button variant="ghost" size="sm" asChild className="w-full justify-start h-8">
                  <a href="tel:+31702119191">
                    <Phone className="h-3.5 w-3.5" />
                    070 211 9191
                  </a>
                </Button>
                <Button variant="whatsapp" size="sm" asChild className="w-full justify-start h-8">
                  <a
                    href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
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
