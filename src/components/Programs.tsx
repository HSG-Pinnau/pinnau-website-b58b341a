
import { Users, Trophy, Clock, Target, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';


import { useEffect, useState } from 'react';
import { getTeamsCached } from './navigation/teamDataCache';

const Programs = () => {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamsCached().then((structure) => {
      const prog = [
        {
          icon: Users,
          title: 'Damen-Mannschaften',
          description: 'Unsere Damen-Teams in verschiedenen Spielklassen für alle Leistungsstufen.',
          color: 'primary',
          teams: structure.erwachsene.damen
        },
        {
          icon: Trophy,
          title: 'Herren-Mannschaften',
          description: 'Unsere Herren-Teams mit Leidenschaft und Teamgeist für spannende Spiele.',
          color: 'accent',
          teams: structure.erwachsene.herren
        },
        {
          icon: Star,
          title: 'Jugendmannschaften',
          description: 'Alle Altersgruppen von A-Jugend bis E-Jugend - für jeden das passende Team.',
          color: 'accent',
          teams: [
            ...structure.jugend.maennlich.filter((t: any) => /m[ABCDE][1-9]?/i.test(t.name)),
            ...structure.jugend.weiblich.filter((t: any) => /w[ABCDE][1-9]?/i.test(t.name)),
          ]
        },
        {
          icon: Heart,
          title: 'Minis',
          description: 'Spielerischer Einstieg in den Handball für unsere jüngsten Talente.',
          color: 'primary',
          teams: structure.minis
        },
        {
          icon: Clock,
          title: 'Toppies',
          description: 'Handball-Sport für Kinder mit Handicap jeglicher Art im Alter von 5-10.',
          color: 'accent',
          teams: structure.toppies || []
        }
      ];
      setPrograms(prog);
      setLoading(false);
    });
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary/5 text-primary border-primary/20',
      accent: 'bg-accent/10 text-accent-foreground border-accent/20',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-muted text-muted-foreground border-border';
  };

  return (
    <section id="teams" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Teams</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von den Minis bis zu den Erwachsenen - Handball für alle Altersgruppen
          </p>
        </div>
        {loading ? (
          <div className="text-center text-muted-foreground py-12">Lade Teams ...</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-t-4 ${program.color === 'primary' ? 'border-primary' : 'border-accent'}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${getColorClasses(program.color)}`}>
                  <program.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 text-center">{program.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-4">{program.description}</p>
              {program.teams && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {program.teams.map((team: any) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                        program.color === 'primary' 
                          ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                          : 'bg-accent/20 text-accent-foreground hover:bg-accent/30'
                      }`}
                    >
                      {team.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        )}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 mr-4">
            Training besuchen
          </button>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Mannschaften kennenlernen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
