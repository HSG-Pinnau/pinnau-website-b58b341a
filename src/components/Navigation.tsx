import { useState } from 'react';
import { Menu, X, Home, Info, Users, Calendar, Phone, Trophy, ShoppingBag, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Home, internal: true },
    { name: 'Über uns', href: '/uber-uns', icon: Info, internal: true },
    { name: 'Kontakt', href: '/kontakt', icon: Phone, internal: true },
    { name: 'Shop', href: 'https://hsg-pinnau.nordsport.store/vereinskollektion.html?p=2', icon: ShoppingBag, internal: false },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-primary-accent">
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
                <span className="text-primary">HSG</span> <span className="text-primary-accent">Pinnau</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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
              <DropdownMenu>
                <DropdownMenuTrigger className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-primary-accent/10 bg-transparent border-none outline-none">
                  <Users size={16} />
                  Mannschaften
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
                  {/* Erwachsene Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex items-center justify-between">
                      <span>Erwachsene</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="w-48 bg-white border border-gray-200 shadow-lg">
                        <div className="p-2">
                          <div className="text-xs font-semibold text-gray-500 px-2 py-1 border-b border-gray-100">Damen</div>
                          {teamStructure.erwachsene.damen.map((team) => (
                            <DropdownMenuItem key={team.name} className="p-0">
                              <Link
                                to={team.href}
                                className="w-full px-2 py-1 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                              >
                                {team.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                          <div className="text-xs font-semibold text-gray-500 px-2 py-1 border-b border-gray-100 mt-2">Herren</div>
                          {teamStructure.erwachsene.herren.map((team) => (
                            <DropdownMenuItem key={team.name} className="p-0">
                              <Link
                                to={team.href}
                                className="w-full px-2 py-1 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                              >
                                {team.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  {/* Jugend Sub-menu */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex items-center justify-between">
                      <span>Jugend</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="w-48 bg-white border border-gray-200 shadow-lg">
                        <div className="p-2">
                          <div className="text-xs font-semibold text-gray-500 px-2 py-1 border-b border-gray-100">Männlich</div>
                          {teamStructure.jugend.maennlich.map((team) => (
                            <DropdownMenuItem key={team.name} className="p-0">
                              <Link
                                to={team.href}
                                className="w-full px-2 py-1 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                              >
                                {team.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                          <div className="text-xs font-semibold text-gray-500 px-2 py-1 border-b border-gray-100 mt-2">Weiblich</div>
                          {teamStructure.jugend.weiblich.map((team) => (
                            <DropdownMenuItem key={team.name} className="p-0">
                              <Link
                                to={team.href}
                                className="w-full px-2 py-1 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                              >
                                {team.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  {/* Direct teams */}
                  {teamStructure.minis.map((team) => (
                    <DropdownMenuItem key={team.name} className="p-0">
                      <Link
                        to={team.href}
                        className="w-full px-2 py-2 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                      >
                        {team.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  {teamStructure.toppis.map((team) => (
                    <DropdownMenuItem key={team.name} className="p-0">
                      <Link
                        to={team.href}
                        className="w-full px-2 py-2 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                      >
                        {team.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Other Nav Items */}
              {navItems.slice(1).map((item) => (
                item.internal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-primary-accent/10"
                  >
                    <item.icon size={16} />
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
                    <item.icon size={16} />
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-primary-accent/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-primary-accent/20">
            {navItems.map((item) => (
              item.internal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-primary-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
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
                  <item.icon size={20} />
                  {item.name}
                </a>
              )
            ))}
            
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
      )}
    </nav>
  );
};

export default Navigation;
