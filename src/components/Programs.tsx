
import { Users, Trophy, Clock, Target, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Damen-Mannschaften",
      description: "Drei starke Damen-Teams in verschiedenen Spielklassen für alle Leistungsstufen.",
      color: "red",
      teams: [
        { name: "Damen 1", href: "/teams/damen1" },
        { name: "Damen 2", href: "/teams/damen2" },
        { name: "Damen 3", href: "/teams/damen3" }
      ]
    },
    {
      icon: Trophy,
      title: "Herren-Mannschaften", 
      description: "Drei Herren-Teams mit Leidenschaft und Teamgeist für spannende Spiele.",
      color: "yellow",
      teams: [
        { name: "Herren 1", href: "/teams/herren1" },
        { name: "Herren 2", href: "/teams/herren2" },
        { name: "Herren 3", href: "/teams/herren3" }
      ]
    },
    {
      icon: Target,
      title: "A-Jugend",
      description: "Nachwuchsförderung auf höchstem Niveau für unsere ältesten Jugendlichen.",
      color: "red",
      teams: [
        { name: "A-Jugend", href: "/teams/a-jugend" }
      ]
    },
    {
      icon: Star,
      title: "Jugendmannschaften",
      description: "Alle Altersgruppen von B-Jugend bis E-Jugend - für jeden das passende Team.",
      color: "yellow",
      teams: [
        { name: "B-Jugend", href: "/teams/b-jugend" },
        { name: "C-Jugend", href: "/teams/c-jugend" },
        { name: "D-Jugend", href: "/teams/d-jugend" },
        { name: "E-Jugend", href: "/teams/e-jugend" }
      ]
    },
    {
      icon: Heart,
      title: "Minis",
      description: "Spielerischer Einstieg in den Handball für unsere jüngsten Talente.",
      color: "red",
      teams: [
        { name: "Minis", href: "/teams/minis" }
      ]
    },
    {
      icon: Clock,
      title: "Training für alle",
      description: "Altersgerechtes Training mit erfahrenen Trainern in familiärer Atmosphäre.",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "bg-red-100 text-red-600 border-red-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <section id="teams" className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Teams</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von den Minis bis zu den Erwachsenen - Handball für alle Altersgruppen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-t-4 ${program.color === 'red' ? 'border-red-500' : 'border-yellow-500'}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${getColorClasses(program.color)}`}>
                  <program.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{program.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-4">{program.description}</p>
              
              {program.teams && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {program.teams.map((team) => (
                    <Link
                      key={team.name}
                      to={team.href}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                        program.color === 'red' 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
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

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 mr-4">
            Training besuchen
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Mannschaften kennenlernen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
