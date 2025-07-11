import { Home, Info, Phone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import TeamDropdown from './TeamDropdown';
import { navItems } from './NavigationData';

const iconMap = {
  Home,
  Info,
  Phone,
  ShoppingBag,
};

const DesktopNavigation = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-baseline space-x-4">
        {/* Home Link */}
        <Link
          to="/"
          className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-primary-accent/10"
        >
          <Home size={16} />
          Home
        </Link>
        
        {/* Mannschaften with Dropdown */}
        <TeamDropdown />
        
        {/* Other Nav Items */}
        {navItems.slice(1).map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          return item.internal ? (
            <Link
              key={item.name}
              to={item.href}
              className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-primary-accent/10"
            >
              <IconComponent size={16} />
              {item.name}
            </Link>
          ) : (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-primary-accent/10"
            >
              <IconComponent size={16} />
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNavigation;
