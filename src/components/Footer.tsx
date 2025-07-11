
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 text-foreground border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">HSG</span> <span className="text-primary">Pinnau</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Leidenschaft für Handball seit 2011. Spielgemeinschaft aus TSV Prisdorf und VfL Pinneberg.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/uber-uns" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/mannschaften" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Mannschaften
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Teams */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Unsere Teams</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/teams/damen1" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Damen-Mannschaften
                </Link>
              </li>
              <li>
                <Link to="/teams/herren1" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Herren-Mannschaften
                </Link>
              </li>
              <li>
                <Link to="/teams/a-jugend-m1" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Jugendteams
                </Link>
              </li>
              <li>
                <Link to="/teams/minis" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Minis & Toppis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Prisdorf & Pinneberg</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-muted-foreground" />
                <a 
                  href="mailto:vorstand@hsg-pinnau.de"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                >
                  vorstand@hsg-pinnau.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 HSG Pinnau. Alle Rechte vorbehalten. | 
            <a href="#" className="hover:text-primary transition-colors duration-200 ml-1">Datenschutz</a> | 
            <a href="#" className="hover:text-primary transition-colors duration-200 ml-1">Impressum</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
