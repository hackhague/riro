import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7909ad45653f41d3a06b8bfbecb8e57b%2F8b732d5b0cbd409588db27d023cf0b27?format=webp&width=800"
                alt="InstantIT logo"
                className="h-11 md:h-13 lg:h [30px] w-auto object-contain"
              />
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Digitale Eerste Hulp voor computerproblemen, hacks en storingen in Zuid-Holland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/computerhulp-denhaag" className="text-background/80 hover:text-background transition-colors">
                  Computerhulp
                </Link>
              </li>
              <li>
                <Link to="/ik-ben-gehackt" className="text-background/80 hover:text-background transition-colors">
                  Ik ben gehackt
                </Link>
              </li>
              <li>
                <Link to="/wifi" className="text-background/80 hover:text-background transition-colors">
                  WiFi & Netwerk
                </Link>
              </li>
              <li>
                <Link to="/cyber-apk" className="text-background/80 hover:text-background transition-colors">
                  Cyber APK
                </Link>
              </li>
              <li>
                <Link to="/zakelijk" className="text-background/80 hover:text-background transition-colors">
                  Zakelijk
                </Link>
              </li>
              <li>
                <Link to="/tarieven" className="text-background/80 hover:text-background transition-colors">
                  Tarieven
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              <Link to="/werkgebied" className="hover:underline">Werkgebied</Link>
            </h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/computerhulp-den-haag" className="hover:text-background transition-colors">Den Haag</Link>
              </li>
              <li>
                <Link to="/computerhulp-delft" className="hover:text-background transition-colors">Delft</Link>
              </li>
              <li>
                <Link to="/computerhulp-zoetermeer" className="hover:text-background transition-colors">Zoetermeer</Link>
              </li>
              <li>
                <Link to="/computerhulp-rijswijk" className="hover:text-background transition-colors">Rijswijk</Link>
              </li>
              <li>
                <Link to="/computerhulp-voorburg" className="hover:text-background transition-colors">Voorburg</Link>
              </li>
              <li>
                <Link to="/computerhulp-leiden" className="hover:text-background transition-colors">Leiden</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (NAP) */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+31702119191"
                  className="flex items-start gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>070 211 9191</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31702119191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@instantit.nl"
                  className="flex items-start gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>support@instantit.nl</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Ma–Zo 08:00–21:00<br />Hacklijn triage 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} InstantIT. Alle rechten voorbehouden. VOG & verzekerd.</p>
        </div>
      </div>
    </footer>
  );
};
