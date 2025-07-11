
import { useState } from 'react';
import { Menu, X, Home, Info, Users, Calendar, Phone, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Über uns', href: '/#about', icon: Info },
    { name: 'Kontakt', href: '/#contact', icon: Phone },
  ];

  const teamStructure = {
    erwachsene: {
      damen: [
        { name: 'Damen 1', href: '/teams/damen1' },
        { name: 'Damen 2', href: '/teams/damen2' },
        { name: 'Damen 3', href: '/teams/damen3' },
      ],
      herren: [
        { name: 'Herren 1', href: '/teams/herren1' },
        { name: 'Herren 2', href: '/teams/herren2' },
        { name: 'Herren 3', href: '/teams/herren3' },
      ]
    },
    jugend: {
      maennlich: [
        { name: 'A-Jugend 1', href: '/teams/a-jugend-m1' },
        { name: 'A-Jugend 2', href: '/teams/a-jugend-m2' },
        { name: 'B-Jugend 1', href: '/teams/b-jugend-m1' },
        { name: 'C-Jugend 1', href: '/teams/c-jugend-m1' },
        { name: 'D-Jugend 1', href: '/teams/d-jugend-m1' },
        { name: 'E-Jugend 1', href: '/teams/e-jugend-m1' },
      ],
      weiblich: [
        { name: 'A-Jugend 1', href: '/teams/a-jugend-w1' },
        { name: 'B-Jugend 1', href: '/teams/b-jugend-w1' },
        { name: 'C-Jugend 1', href: '/teams/c-jugend-w1' },
        { name: 'D-Jugend 1', href: '/teams/d-jugend-w1' },
        { name: 'E-Jugend 1', href: '/teams/e-jugend-w1' },
      ]
    },
    minis: [
      { name: 'Minis', href: '/teams/minis' }
    ],
    toppis: [
      { name: 'Toppis', href: '/teams/toppis' }
    ]
  };

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
              
              {/* Mannschaften Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-yellow-50">
                  <Users size={16} />
                  Mannschaften
                </button>
                <div className="absolute top-full left-0 mt-1 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
                  <div className="p-2">
                    {/* Erwachsene */}
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-800 px-2 py-1 border-b border-gray-200">Erwachsene</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <h4 className="font-medium text-sm text-gray-600 px-2 py-1">Damen</h4>
                          {teamStructure.erwachsene.damen.map((team) => (
                            <Link
                              key={team.name}
                              to={team.href}
                              className="block px-3 py-1 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200 rounded"
                            >
                              {team.name}
                            </Link>
                          ))}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-600 px-2 py-1">Herren</h4>
                          {teamStructure.erwachsene.herren.map((team) => (
                            <Link
                              key={team.name}
                              to={team.href}
                              className="block px-3 py-1 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200 rounded"
                            >
                              {team.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Jugend */}
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-800 px-2 py-1 border-b border-gray-200">Jugend</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div>
                          <h4 className="font-medium text-sm text-gray-600 px-2 py-1">Männlich</h4>
                          {teamStructure.jugend.maennlich.map((team) => (
                            <Link
                              key={team.name}
                              to={team.href}
                              className="block px-3 py-1 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200 rounded"
                            >
                              {team.name}
                            </Link>
                          ))}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-gray-600 px-2 py-1">Weiblich</h4>
                          {teamStructure.jugend.weiblich.map((team) => (
                            <Link
                              key={team.name}
                              to={team.href}
                              className="block px-3 py-1 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200 rounded"
                            >
                              {team.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Minis and Toppis */}
                    <div>
                      <h3 className="font-semibold text-gray-800 px-2 py-1 border-b border-gray-200">Weitere Teams</h3>
                      <div className="mt-2">
                        {teamStructure.minis.map((team) => (
                          <Link
                            key={team.name}
                            to={team.href}
                            className="block px-3 py-1 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200 rounded"
                          >
                            {team.name}
                          </Link>
                        ))}
                        {teamStructure.toppis.map((team) => (
                          <Link
                            key={team.name}
                            to={team.href}
                            className="block px-3 py-1 text-sm text-gray-700 hover:bg-yellow-50 hover:text-blue-600 transition-colors duration-200 rounded"
                          >
                            {team.name} - Handball für Kinder mit Handicap
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
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
              <p className="px-3 py-1 text-sm font-medium text-gray-500">Mannschaften</p>
              
              {/* Erwachsene Mobile */}
              <div className="mb-2">
                <h4 className="px-3 py-1 text-sm font-medium text-gray-600">Erwachsene</h4>
                <div className="ml-3">
                  <p className="px-3 py-1 text-xs font-medium text-gray-500">Damen</p>
                  {teamStructure.erwachsene.damen.map((team) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className="text-gray-700 hover:text-blue-600 block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-yellow-50"
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
                      className="text-gray-700 hover:text-blue-600 block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-yellow-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {team.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Jugend Mobile */}
              <div className="mb-2">
                <h4 className="px-3 py-1 text-sm font-medium text-gray-600">Jugend</h4>
                <div className="ml-3">
                  <p className="px-3 py-1 text-xs font-medium text-gray-500">Männlich</p>
                  {teamStructure.jugend.maennlich.map((team) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className="text-gray-700 hover:text-blue-600 block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-yellow-50"
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
                      className="text-gray-700 hover:text-blue-600 block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-yellow-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {team.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Weitere Teams Mobile */}
              <div>
                <h4 className="px-3 py-1 text-sm font-medium text-gray-600">Weitere Teams</h4>
                <div className="ml-3">
                  {teamStructure.minis.map((team) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className="text-gray-700 hover:text-blue-600 block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-yellow-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {team.name}
                    </Link>
                  ))}
                  {teamStructure.toppis.map((team) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className="text-gray-700 hover:text-blue-600 block px-6 py-1 rounded-md text-sm transition-colors duration-200 hover:bg-yellow-50"
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
      )}
    </nav>
  );
};

export default Navigation;
