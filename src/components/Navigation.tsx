import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Diensten", path: "/diensten" },
    { label: "Tarieven", path: "/tarieven" },
    { label: "Werkgebied", path: "/werkgebied" },
    { label: "Reviews", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">IT</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">InstantIT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+31702119191" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                070 211 9191
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" asChild className="w-full">
                <a href="tel:+31702119191" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  070 211 9191
                </a>
              </Button>
              <Button variant="default" asChild className="w-full">
                <a
                  href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
