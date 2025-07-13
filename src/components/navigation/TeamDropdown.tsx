
import { Users, ChevronDown, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from 'react';
import { getTeamsCached } from './teamDataCache';


const TeamDropdown = () => {
  const [teamStructure, setTeamStructure] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamsCached().then((data) => {
      setTeamStructure(data);
      setLoading(false);
    });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 hover:bg-primary-accent/10 bg-transparent border-none outline-none">
        <Users size={16} />
        Mannschaften
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
        <DropdownMenuItem className="p-0">
          <Link
            to="/mannschaften"
            className="w-full px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-accent/10 rounded transition-colors flex items-center gap-2"
          >
            <Eye size={16} />
            Alle Mannschaften
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {loading || !teamStructure ? (
          <div className="px-4 py-2 text-sm text-gray-400">Lade Teams ...</div>
        ) : (
          <>
            {/* Erwachsene Sub-menu */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center justify-between">
                <span>Erwachsene</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="w-48 bg-white border border-gray-200 shadow-lg">
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 px-2 py-1 border-b border-gray-100">Damen</div>
                    {teamStructure.erwachsene.damen.map((team: any) => (
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
                    {teamStructure.erwachsene.herren.map((team: any) => (
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
                    {teamStructure.jugend.maennlich.map((team: any) => (
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
                    {teamStructure.jugend.weiblich.map((team: any) => (
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
            {teamStructure.minis.map((team: any) => (
              <DropdownMenuItem key={team.name} className="p-0">
                <Link
                  to={team.href}
                  className="w-full px-2 py-2 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                >
                  {team.name}
                </Link>
              </DropdownMenuItem>
            ))}
            {teamStructure.toppis.map((team: any) => (
              <DropdownMenuItem key={team.name} className="p-0">
                <Link
                  to={team.href}
                  className="w-full px-2 py-2 text-sm text-text hover:bg-primary-accent/10 hover:text-primary rounded transition-colors block"
                >
                  {team.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TeamDropdown;
