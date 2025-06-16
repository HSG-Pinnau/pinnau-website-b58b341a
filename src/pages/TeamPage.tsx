
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Mail, Phone, MapPin, Users, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TeamData {
  name: string;
  category: string;
  description: string;
  goals: string;
  contact: {
    name: string;
    email: string;
    phone?: string;
  };
  training: {
    day: string;
    time: string;
    location: string;
  }[];
  instagramUrl?: string;
}

const TeamPage = () => {
  const { teamId } = useParams();
  const [teamData, setTeamData] = useState<TeamData | null>(null);

  useEffect(() => {
    // This would normally fetch from an API, but for now we'll use static data
    const teams: Record<string, TeamData> = {
      'damen1': {
        name: 'Damen 1',
        category: 'Erwachsene',
        description: 'Unser erstes Damenteam spielt in der Verbandsliga und setzt sich aus erfahrenen Spielerinnen zusammen, die mit Leidenschaft und Engagement jedes Spiel angehen.',
        goals: 'Unser Ziel ist es, in der Verbandsliga eine starke Rolle zu spielen und als Team zusammenzuwachsen. Wir möchten junge Talente fördern und gleichzeitig erfolgreichen Handball spielen.',
        contact: {
          name: 'Julia Festersen',
          email: 'julia@hsg-pinnau.de'
        },
        training: [
          { day: 'Dienstag', time: '19:30 - 21:00', location: 'Sporthalle Prisdorf' },
          { day: 'Donnerstag', time: '19:30 - 21:00', location: 'Sporthalle Pinneberg' }
        ],
        instagramUrl: 'https://www.instagram.com/hsgpinnau'
      },
      'damen2': {
        name: 'Damen 2',
        category: 'Erwachsene',
        description: 'Unser zweites Damenteam kombiniert Erfahrung mit jugendlicher Energie und spielt in der Bezirksliga mit großer Motivation.',
        goals: 'Wir wollen als Team zusammenwachsen, Spaß am Handball haben und uns kontinuierlich verbessern. Der Aufstieg ist unser langfristiges Ziel.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Montag', time: '19:00 - 20:30', location: 'Sporthalle Prisdorf' },
          { day: 'Mittwoch', time: '19:00 - 20:30', location: 'Sporthalle Pinneberg' }
        ]
      },
      'damen3': {
        name: 'Damen 3',
        category: 'Erwachsene',
        description: 'Unser drittes Damenteam ist perfekt für Einsteigerinnen und Wiedereinsteiger geeignet. Hier steht der Spaß am Spiel im Vordergrund.',
        goals: 'Handball mit Freude spielen, neue Spielerinnen integrieren und als Team eine starke Gemeinschaft bilden.',
        contact: {
          name: 'Vera da Graca',
          email: 'vera@hsg-pinnau.de'
        },
        training: [
          { day: 'Freitag', time: '18:30 - 20:00', location: 'Sporthalle Prisdorf' }
        ]
      },
      'herren1': {
        name: 'Herren 1',
        category: 'Erwachsene',
        description: 'Unser erstes Herrenteam spielt in der Verbandsliga und besteht aus einer Mischung erfahrener Spieler und aufstrebender Talente.',
        goals: 'Wir streben nach konstant guten Leistungen in der Verbandsliga und möchten als Vorbild für die jüngeren Teams fungieren.',
        contact: {
          name: 'Marco Bretz',
          email: 'marco@hsg-pinnau.de'
        },
        training: [
          { day: 'Dienstag', time: '20:00 - 21:30', location: 'Sporthalle Pinneberg' },
          { day: 'Donnerstag', time: '20:00 - 21:30', location: 'Sporthalle Prisdorf' }
        ]
      },
      'herren2': {
        name: 'Herren 2',
        category: 'Erwachsene',
        description: 'Das zweite Herrenteam spielt in der Bezirksliga und zeichnet sich durch starken Teamgeist und Kampfwillen aus.',
        goals: 'Unser Ziel ist es, in der Bezirksliga erfolgreich zu sein und gleichzeitig junge Spieler aus der Jugend zu integrieren.',
        contact: {
          name: 'Dominik Stolz',
          email: 'dominik@hsg-pinnau.de'
        },
        training: [
          { day: 'Montag', time: '20:00 - 21:30', location: 'Sporthalle Pinneberg' },
          { day: 'Mittwoch', time: '20:00 - 21:30', location: 'Sporthalle Prisdorf' }
        ]
      },
      'herren3': {
        name: 'Herren 3',
        category: 'Erwachsene',
        description: 'Unser drittes Herrenteam bietet Raum für Hobbyhandballer und Wiedereinsteiger, die Spaß am Spiel haben möchten.',
        goals: 'Handball in entspannter Atmosphäre spielen, neue Mitglieder willkommen heißen und gemeinsam Erfolge feiern.',
        contact: {
          name: 'Sven Dreher',
          email: 'sven@hsg-pinnau.de'
        },
        training: [
          { day: 'Freitag', time: '20:00 - 21:30', location: 'Sporthalle Pinneberg' }
        ]
      },
      'a-jugend': {
        name: 'A-Jugend',
        category: 'Jugend',
        description: 'Unsere A-Jugend bereitet talentierte Nachwuchsspieler auf den Übergang in den Erwachsenenbereich vor.',
        goals: 'Entwicklung der Spieler für den Seniorenbereich, Vermittlung von Teamgeist und Förderung individueller Stärken.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Dienstag', time: '18:00 - 19:30', location: 'Sporthalle Prisdorf' },
          { day: 'Donnerstag', time: '18:00 - 19:30', location: 'Sporthalle Pinneberg' }
        ]
      },
      'b-jugend': {
        name: 'B-Jugend',
        category: 'Jugend',
        description: 'Die B-Jugend fokussiert sich auf die technische und taktische Weiterentwicklung der Spieler.',
        goals: 'Aufbau einer soliden handballerischen Basis und Vorbereitung auf die A-Jugend.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Montag', time: '17:30 - 19:00', location: 'Sporthalle Prisdorf' },
          { day: 'Mittwoch', time: '17:30 - 19:00', location: 'Sporthalle Pinneberg' }
        ]
      },
      'c-jugend': {
        name: 'C-Jugend',
        category: 'Jugend',
        description: 'In der C-Jugend werden die Grundlagen des Handballs vertieft und erste taktische Elemente eingeführt.',
        goals: 'Festigung der Grundtechniken und Entwicklung des Spielverständnisses.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Dienstag', time: '16:30 - 18:00', location: 'Sporthalle Pinneberg' },
          { day: 'Freitag', time: '16:30 - 18:00', location: 'Sporthalle Prisdorf' }
        ]
      },
      'd-jugend': {
        name: 'D-Jugend',
        category: 'Jugend',
        description: 'Die D-Jugend legt den Fokus auf spielerisches Lernen und die Entwicklung der Handball-Grundfertigkeiten.',
        goals: 'Spaß am Handball vermitteln und solide Grundlagen schaffen.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Montag', time: '16:00 - 17:30', location: 'Sporthalle Pinneberg' },
          { day: 'Donnerstag', time: '16:00 - 17:30', location: 'Sporthalle Prisdorf' }
        ]
      },
      'e-jugend': {
        name: 'E-Jugend',
        category: 'Jugend',
        description: 'In der E-Jugend steht die spielerische Heranführung an den Handball im Mittelpunkt.',
        goals: 'Erste Handball-Erfahrungen sammeln und Bewegungsfreude entwickeln.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Mittwoch', time: '16:00 - 17:00', location: 'Sporthalle Prisdorf' },
          { day: 'Samstag', time: '10:00 - 11:00', location: 'Sporthalle Pinneberg' }
        ]
      },
      'minis': {
        name: 'Minis',
        category: 'Jugend',
        description: 'Bei den Minis dreht sich alles um Spaß an der Bewegung und erste Berührungen mit dem Handball.',
        goals: 'Freude am Sport wecken und soziale Kompetenzen fördern.',
        contact: {
          name: 'Lisa Moritz',
          email: 'lisa@hsg-pinnau.de'
        },
        training: [
          { day: 'Samstag', time: '9:00 - 10:00', location: 'Sporthalle Prisdorf' }
        ]
      }
    };

    if (teamId && teams[teamId]) {
      setTeamData(teams[teamId]);
    }
  }, [teamId]);

  if (!teamData) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team nicht gefunden</h1>
          <p className="text-gray-600">Das angeforderte Team existiert nicht.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{teamData.name}</h1>
            <p className="text-xl opacity-90">{teamData.category}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Team Photo Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mannschaftsfoto</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Users size={64} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Mannschaftsfoto wird bald ergänzt</p>
                </div>
              </div>
            </div>

            {/* Team Description */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Über das Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{teamData.description}</p>
              
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <Target className="text-yellow-600 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Unsere Ziele</h3>
                    <p className="text-gray-700">{teamData.goals}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Feed */}
            {teamData.instagramUrl && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Instagram Feed</h2>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Folgt uns auf Instagram für aktuelle Bilder und Updates!
                  </p>
                  <a 
                    href={teamData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @hsgpinnau
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="text-red-600 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">{teamData.contact.name}</p>
                    <a href={`mailto:${teamData.contact.email}`} className="text-red-600 hover:underline">
                      {teamData.contact.email}
                    </a>
                  </div>
                </div>
                {teamData.contact.phone && (
                  <div className="flex items-center">
                    <Phone className="text-red-600 mr-3" size={20} />
                    <span className="text-gray-700">{teamData.contact.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Training Schedule */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trainingszeiten</h3>
              <div className="space-y-4">
                {teamData.training.map((session, index) => (
                  <div key={index} className="border-l-4 border-yellow-500 pl-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="text-yellow-600 mr-2" size={16} />
                      <span className="font-medium text-gray-900">{session.day}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <Clock className="text-yellow-600 mr-2" size={16} />
                      <span className="text-gray-700">{session.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-yellow-600 mr-2" size={16} />
                      <span className="text-gray-700">{session.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Match Schedule Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spielplan</h3>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Calendar size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Spielplan wird bald verfügbar sein</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
