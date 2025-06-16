
import { Target, Eye, Heart, Star, Users, Calendar, Mail } from 'lucide-react';

const About = () => {
  const boardMembers = [
    {
      title: "1. Vorsitzender",
      name: "Marco Bretz",
      email: "marco@hsg-pinnau.de"
    },
    {
      title: "2. Vorsitzender",
      name: "Dominik Stolz",
      email: "dominik@hsg-pinnau.de"
    },
    {
      title: "Spielwart Erwachsene",
      name: "Dominik Stolz",
      email: ""
    },
    {
      title: "Spielwartin Jugend",
      name: "Lisa Moritz",
      email: "lisa@hsg-pinnau.de"
    },
    {
      title: "Kassenwartin",
      name: "Vera da Graca",
      email: "vera@hsg-pinnau.de"
    },
    {
      title: "Pressewartin / Social Media",
      name: "Julia Festersen",
      email: "julia@hsg-pinnau.de"
    }
  ];

  const supportMembers = [
    { title: "Protokollführer", name: "Mario da Graca", email: "mario@hsg-pinnau.de" },
    { title: "Beisitz", name: "Sven Dreher", email: "sven@hsg-pinnau.de" },
    { title: "Beisitz", name: "Julia Festersen", email: "" },
    { title: "Beisitz", name: "Laura Schneider", email: "" },
    { title: "Beisitz", name: "Philipp Kunau", email: "" },
    { title: "Schiedsrichterwart", name: "Marco Bretz", email: "" },
    { title: "Mitgliederverwaltung", name: "Sven Dreher", email: "" },
    { title: "Passverwaltung", name: "Julia Festersen", email: "" },
    { title: "IT Admin", name: "Julia Festersen", email: "" },
    { title: "Homepage", name: "Julia Festersen, Sven Dreher, Mario da Graca, Dominik Stolz", email: "" },
    { title: "Eventplanung", name: "Lisa Moritz, Julia Festersen", email: "" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Über HSG Pinnau</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine starke Spielgemeinschaft aus zwei traditionsreichen Vereinen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Geschichte</h3>
            <p className="text-gray-600 mb-4">
              Die HSG Pinnau besteht seit März 2011 als Spielgemeinschaft zwischen dem 
              TSV Prisdorf und dem VfL Pinneberg. Zwei Vereine, ein Ziel: 
              Leidenschaftlicher Handball für alle Altersgruppen.
            </p>
            <p className="text-gray-600 mb-4">
              Aktuell umfasst unsere Spielgemeinschaft drei Damen- sowie drei Herren-Mannschaften. 
              Im Jugendbereich sind fast alle Altersgruppen von der A-Jugend bis zu den 
              Minis vertreten - ein lebendiger Beweis für unsere erfolgreiche Nachwuchsarbeit.
            </p>
            <p className="text-gray-600">
              Unser Erfolg basiert auf dem starken Zusammenhalt zwischen den beiden 
              Stammvereinen und der gemeinsamen Vision, Handball in der Region zu fördern 
              und dabei Werte wie Teamgeist, Fairplay und Freude am Sport zu vermitteln.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Stammvereine</h4>
                <p className="text-sm text-gray-600">TSV Prisdorf & VfL Pinneberg</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-200">
                  <Calendar className="text-yellow-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Gegründet</h4>
                <p className="text-sm text-gray-600">März 2011</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <Heart className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Werte</h4>
                <p className="text-sm text-gray-600">Teamgeist & Fairplay</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-200">
                  <Star className="text-yellow-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                <p className="text-sm text-gray-600">Handball für alle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Board Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vorstand</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">{member.title}</h4>
                <p className="text-gray-700 font-medium mb-2">{member.name}</p>
                {member.email && (
                  <div className="flex items-center text-blue-600">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                      {member.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Weitere Unterstützung</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportMembers.map((member, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <h5 className="font-semibold text-gray-900 text-sm mb-1">{member.title}</h5>
                <p className="text-gray-700 mb-1">{member.name}</p>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-xs text-yellow-700 hover:underline">
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-xl">
            <p className="text-white font-medium mb-2">Allgemeine Anfragen</p>
            <a href="mailto:vorstand@hsg-pinnau.de" className="text-white text-lg font-bold hover:underline">
              vorstand@hsg-pinnau.de
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
