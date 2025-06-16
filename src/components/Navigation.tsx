
import { useState } from 'react';
import { Menu, X, Home, Info, Users, Calendar, Phone, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Über uns', href: '/#about', icon: Info },
    { name: 'Mannschaften', href: '/#teams', icon: Users },
    { name: 'Training', href: '/#training', icon: Trophy },
    { name: 'Termine', href: '/#events', icon: Calendar },
    { name: 'Kontakt', href: '/#contact', icon: Phone },
  ];

  const teams = [
    { name: 'Damen 1', href: '/teams/damen1' },
    { name: 'Damen 2', href: '/teams/damen2' },
    { name: 'Damen 3', href: '/teams/damen3' },
    { name: 'Herren 1', href: '/teams/herren1' },
    { name: 'Herren 2', href: '/teams/herren2' },
    { name: 'Herren 3', href: '/teams/herren3' },
    { name: 'A-Jugend', href: '/teams/a-jugend' },
    { name: 'B-Jugend', href: '/teams/b-jugend' },
    { name: 'C-Jugend', href: '/teams/c-jugend' },
    { name: 'D-Jugend', href: '/teams/d-jugend' },
    { name: 'E-Jugend', href: '/teams/e-jugend' },
    { name: 'Minis', href: '/teams/minis' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/bf51c967-183e-4af8-a13d-0f2057a13892.png" 
                alt="HSG Pinnau Logo" 
                className="h-10 w-auto mr-3"
              />
              <h1 className="text-xl font-bold">
                <span className="text-blue-600">HSG</span> <span className="text-yellow-600">Pinnau</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-yellow-50"
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              ))}
              
              {/* Teams Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-yellow-50">
                  <Users size={16} />
                  Teams
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  {teams.map((team) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {team.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-yellow-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-yellow-50"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-2">
              <p className="px-3 py-1 text-sm font-medium text-gray-500">Teams</p>
              {teams.map((team) => (
                <Link
                  key={team.name}
                  to={team.href}
                  className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-yellow-50"
                  onClick={() => setIsOpen(false)}
                >
                  {team.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
