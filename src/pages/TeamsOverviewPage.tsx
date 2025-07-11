import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Users, Trophy, Target, Calendar } from 'lucide-react';

const TeamsOverviewPage = () => {
  const teamCategories = [
    {
      title: "Erwachsene",
      description: "Unsere Herren- und Damenmannschaften im Erwachsenenbereich",
      teams: [
        { name: "Damen 1", href: "/teams/damen1", level: "Oberliga", description: "Unsere erste Damenmannschaft spielt in der Oberliga" },
        { name: "Damen 2", href: "/teams/damen2", level: "Landesliga", description: "Zweite Damenmannschaft in der Landesliga" },
        { name: "Damen 3", href: "/teams/damen3", level: "Bezirksliga", description: "Dritte Damenmannschaft in der Bezirksliga" },
        { name: "Herren 1", href: "/teams/herren1", level: "Regionalliga", description: "Unsere erste Herrenmannschaft in der Regionalliga" },
        { name: "Herren 2", href: "/teams/herren2", level: "Oberliga", description: "Zweite Herrenmannschaft in der Oberliga" },
        { name: "Herren 3", href: "/teams/herren3", level: "Landesliga", description: "Dritte Herrenmannschaft in der Landesliga" },
      ]
    },
    {
      title: "Jugend Männlich",
      description: "Nachwuchsförderung bei den männlichen Jugendteams",
      teams: [
        { name: "A-Jugend 1", href: "/teams/a-jugend-m1", level: "Oberliga", description: "Männliche A-Jugend in der Oberliga" },
        { name: "A-Jugend 2", href: "/teams/a-jugend-m2", level: "Landesliga", description: "Zweite männliche A-Jugend" },
        { name: "B-Jugend 1", href: "/teams/b-jugend-m1", level: "Oberliga", description: "Männliche B-Jugend" },
        { name: "C-Jugend 1", href: "/teams/c-jugend-m1", level: "Bezirksliga", description: "Männliche C-Jugend" },
        { name: "D-Jugend 1", href: "/teams/d-jugend-m1", level: "Bezirksliga", description: "Männliche D-Jugend" },
        { name: "E-Jugend 1", href: "/teams/e-jugend-m1", level: "Bezirksliga", description: "Männliche E-Jugend" },
      ]
    },
    {
      title: "Jugend Weiblich",
      description: "Nachwuchsförderung bei den weiblichen Jugendteams",
      teams: [
        { name: "A-Jugend 1", href: "/teams/a-jugend-w1", level: "Oberliga", description: "Weibliche A-Jugend in der Oberliga" },
        { name: "B-Jugend 1", href: "/teams/b-jugend-w1", level: "Landesliga", description: "Weibliche B-Jugend" },
        { name: "C-Jugend 1", href: "/teams/c-jugend-w1", level: "Bezirksliga", description: "Weibliche C-Jugend" },
        { name: "D-Jugend 1", href: "/teams/d-jugend-w1", level: "Bezirksliga", description: "Weibliche D-Jugend" },
        { name: "E-Jugend 1", href: "/teams/e-jugend-w1", level: "Bezirksliga", description: "Weibliche E-Jugend" },
      ]
    },
    {
      title: "Weitere Teams",
      description: "Spezielle Angebote für verschiedene Altersgruppen",
      teams: [
        { name: "Minis", href: "/teams/minis", level: "Spielgemeinschaft", description: "Handball für die Kleinsten (4-8 Jahre)" },
        { name: "Toppis", href: "/teams/toppis", level: "Inklusion", description: "Handball für Kinder mit Handicap" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unsere Mannschaften
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Von den Minis bis zu den Erwachsenen - Handball für alle
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">20+ Teams</h3>
                  <p className="text-blue-100">Von Minis bis Erwachsene</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Alle Ligen</h3>
                  <p className="text-blue-100">Von Bezirks- bis Regionalliga</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Inklusion</h3>
                  <p className="text-blue-100">Handball für alle</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {teamCategories.map((category, index) => (
                <div key={category.title} className={`${index % 2 === 1 ? 'bg-gray-50' : ''} rounded-xl p-8`}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.teams.map((team) => (
                      <Link
                        key={team.name}
                        to={team.href}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden group"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {team.name}
                            </h3>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {team.level}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{team.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-medium">
                            <span>Team Details</span>
                            <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Interesse geweckt?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Kommen Sie zu einem Schnuppertraining oder kontaktieren Sie uns für weitere Informationen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kontakt"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin vereinbaren
                </Link>
                <a
                  href="mailto:info@hsg-pinnau.de"
                  className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Jetzt kontaktieren
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamsOverviewPage;