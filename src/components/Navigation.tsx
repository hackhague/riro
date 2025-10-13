import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuSections = {
    particulier: [
      { label: "Computerhulp", path: "/computerhulp" },
      { label: "Wifi verbeteren", path: "/wifi" },
      { label: "Cyber APK", path: "/cyber-apk" },
    ],
    spoedhulp: [
      { label: "Ik ben gehackt", path: "/ik-ben-gehackt" },
      { label: "Phishing", path: "/ik-ben-gehackt" },
      { label: "Wachtwoord reset", path: "/ik-ben-gehackt" },
    ],
    zakelijkExpat: [
      { label: "Zakelijk IT-support", path: "/zakelijk" },
      { label: "Expat support", path: "/expat" },
      { label: "Remote support", path: "/zakelijk" },
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
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="instantIT" className="h-8" />
          </Link>

          {/* Desktop Top Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {topNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
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
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <div>
                <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Particulier
                </h3>
                {menuSections.particulier.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div>
                <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Spoedhulp
                </h3>
                {menuSections.spoedhulp.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div>
                <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Zakelijk & Expat
                </h3>
                {menuSections.zakelijkExpat.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                {topNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <a href="tel:+31702119191">
                    <Phone className="h-4 w-4" />
                    070 211 9191
                  </a>
                </Button>
                <Button variant="whatsapp" asChild className="w-full justify-start">
                  <a
                    href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
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
