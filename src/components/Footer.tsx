
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">HSG</span> <span className="text-accent">Pinnau</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Leidenschaft für Handball seit 2011. Spielgemeinschaft aus TSV Prisdorf und VfL Pinneberg.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/uber-uns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/mannschaften" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Mannschaften
                </Link>
              </li>
              <li>
                <a href="/#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Termine & News
                </a>
              </li>
              <li>
                <Link to="/kontakt" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
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
                <Link to="/teams/damen1" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Damen-Mannschaften
                </Link>
              </li>
              <li>
                <Link to="/teams/herren1" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Herren-Mannschaften
                </Link>
              </li>
              <li>
                <Link to="/teams/a-jugend" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Jugendteams
                </Link>
              </li>
              <li>
                <Link to="/teams/minis" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                  Minis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">Prisdorf & Pinneberg</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">vorstand@hsg-pinnau.de</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 HSG Pinnau. Alle Rechte vorbehalten. | 
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200 ml-1">Datenschutz</a> | 
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200 ml-1">Impressum</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
