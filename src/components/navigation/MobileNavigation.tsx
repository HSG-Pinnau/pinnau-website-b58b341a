
import { Home, Info, Phone, ShoppingBag, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems, teamStructure } from './NavigationData';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const iconMap = {
  Home,
  Info,
  Phone,
  ShoppingBag,
  Newspaper,
};

const MobileNavigation = ({ isOpen, setIsOpen }: MobileNavigationProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-primary-accent/20">
        {navItems.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          return item.internal ? (
            <Link
              key={item.name}
              to={item.href}
              className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-primary-accent/10"
              onClick={() => setIsOpen(false)}
            >
              <IconComponent size={20} />
              {item.name}
            </Link>
          ) : (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-primary-accent/10"
              onClick={() => setIsOpen(false)}
            >
              <IconComponent size={20} />
              {item.name}
            </a>
          );
        })}
        
        {/* Mobile Teams Section */}
        <div className="border-t border-primary-accent/20 pt-2">
          <p className="px-3 py-1 text-sm font-medium text-gray-500">Mannschaften</p>
          
          {/* Mobile Erwachsene */}
          <div className="mb-2">
            <h4 className="px-3 py-1 text-sm font-medium text-text">Erwachsene</h4>
            <div className="ml-3">
              <p className="px-3 py-1 text-xs font-medium text-gray-500">Damen</p>
              {teamStructure.erwachsene.damen.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-text hover:text-primary block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
              <p className="px-3 py-1 text-xs font-medium text-gray-500 mt-2">Herren</p>
              {teamStructure.erwachsene.herren.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-text hover:text-primary block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Jugend */}
          <div className="mb-2">
            <h4 className="px-3 py-1 text-sm font-medium text-text">Jugend</h4>
            <div className="ml-3">
              <p className="px-3 py-1 text-xs font-medium text-gray-500">Männlich</p>
              {teamStructure.jugend.maennlich.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-text hover:text-primary block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
              <p className="px-3 py-1 text-xs font-medium text-gray-500 mt-2">Weiblich</p>
              {teamStructure.jugend.weiblich.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-text hover:text-primary block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Other Teams */}
          <div>
            <h4 className="px-3 py-1 text-sm font-medium text-text">Weitere Teams</h4>
            <div className="ml-3">
              {teamStructure.minis.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-text hover:text-primary block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
              {teamStructure.toppis.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-text hover:text-primary block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
