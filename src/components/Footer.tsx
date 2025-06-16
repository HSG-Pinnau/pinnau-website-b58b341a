
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">HSG</span> <span className="text-yellow-400">Pinnau</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Leidenschaft für Handball seit 2011. Spielgemeinschaft aus TSV Prisdorf und VfL Pinneberg.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#teams" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Mannschaften
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Termine & News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Teams */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Unsere Teams</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Damen-Mannschaften
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Herren-Mannschaften
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Jugendteams
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Minis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">Prisdorf & Pinneberg</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">info@hsg-pinnau.de</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HSG Pinnau. Alle Rechte vorbehalten. | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Datenschutz</a> | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Impressum</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
