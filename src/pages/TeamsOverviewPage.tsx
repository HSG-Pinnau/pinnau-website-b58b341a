import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Trophy, Target, Calendar, Heart, Star, Award, ArrowRight, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../../tina/__generated__/client';

const TeamsOverviewPage = () => {
  const [teamCategories, setTeamCategories] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const clubWidgetInitializedRef = useRef(false);
  const location = useLocation();
  // Scroll to anchor if hash is present in URL after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Timeout to ensure DOM is rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash, loading]);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      // Fetch all mannschaften from Tina CMS
      const res = await client.queries.mannschaftenConnection();
      const teams = res.data.mannschaftenConnection.edges.map((edge: any) => edge.node);

      // Highlight the first team per Jahrgang in each category
      function highlightFirstPerJahrgang(teams: any[]) {
        const grouped: { [jahrgang: string]: boolean } = {};
        return teams.map((team: any) => {
          if (team.jahrgang && !grouped[team.jahrgang]) {
            grouped[team.jahrgang] = true;
            return { ...team, highlight: false };
          }
          return { ...team, highlight: false };
        });
      }

      // Add href for navigation to each team
      function addHref(teams: any[]) {
        return teams.map((team: any) => {
          // Try to get a unique id for the team, fallback to name
          let teamId = team._sys && team._sys.filename ? team._sys.filename : (team.name || '').toLowerCase().replace(/\s+/g, '');
          return { ...team, href: `/teams/${teamId}` };
        });
      }

      const categories = [
        {
          title: 'Erwachsene',
          subtitle: 'Die Großen spielen groß auf',
          description: 'Hier wird Handball auf höchstem Niveau gespielt! Unsere Damen und Herren zeigen, was jahrelange Erfahrung und Leidenschaft für den Sport bedeuten. Von der Oberliga bis zur Bezirksoberliga - jeder findet sein Level.',
          icon: Trophy,
          color: 'primary',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.jugend === 'Erwachsene'))),
        },
        {
          title: 'Jugend Weiblich',
          subtitle: 'Mädchen mit Power und Präzision',
          description: 'Starke Mädchen, starke Teams! Unsere weiblichen Jugendteams beweisen, dass Handball nicht nur ein Jungssport ist. Hier wird mit Köpfchen, Technik und jeder Menge Spaß gespielt.',
          icon: Heart,
          color: 'primary',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.geschlecht === 'Weiblich' && t.jugend !== 'Erwachsene'))),
        },
        {
          title: 'Jugend Männlich',
          subtitle: 'Jungs mit Biss und Ballgefühl',
          description: 'Unsere männlichen Nachwuchstalente lernen hier, was echte Teamarbeit bedeutet. Von den ersten Würfen bis zur taktischen Meisterschaft - hier wird der Grundstein für die Handballstars von morgen gelegt.',
          icon: Users,
          color: 'accent',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.geschlecht === 'Männlich' && t.jugend !== 'Erwachsene'))),
        },
        {
          title: 'Besondere Teams',
          subtitle: 'Handball für alle - wirklich alle!',
          description: 'Hier ist jeder willkommen! Von den kleinsten Handballzwerge bis zu unseren inklusiven Teams. Spiel, Spaß und Gemeinschaft stehen im Mittelpunkt. Denn Handball verbindet - egal wie, egal wo!',
          icon: Star,
          color: 'accent',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.jugend === 'Minis' || t.jugend === 'Toppis' || t.level === 'Inklusion' || t.level === 'Spielgruppe'))),
        },
      ];

      // Remove empty categories
      const filteredCategories = categories.map(cat => ({ ...cat, teams: cat.teams || [] })).filter(cat => cat.teams.length > 0);

      // Achievements: count teams, unique leagues, players (if available), inclusion, exclude 'Keine Liga' and 'Kein Spielbetrieb'
      const uniqueLeagues = Array.from(new Set(teams.map((t: any) => t.liga).filter((liga: string) => liga !== 'Keine Liga' && liga !== 'Kein Spielbetrieb')));
      setTeamCategories(filteredCategories);
      setAchievements([
        {
          icon: Trophy,
          number: teams.length,
          label: 'Mannschaften',
          description: 'Aktive Teams aller Altersklassen',
        },
        {
          icon: Award,
          number: uniqueLeagues.length.toString(),
          label: 'Spielklassen',
          description: 'Von Bezirks- bis Regionalliga',
        },
        {
          icon: Heart,
          number: '200+', // Placeholder, unless player count is available
          label: 'Spieler',
          description: 'Aktive Mitglieder in allen Teams',
        },
        {
          icon: Target,
          number: '100%',
          label: 'Inklusion',
          description: 'Handball für alle!',
        },
      ]);
      setLoading(false);
    };
    fetchTeams();
  }, []);

  // Load handball.net widget script once per page
  useEffect(() => {
    if (!document.getElementById('handball-widget-script')) {
      const script = document.createElement('script');
      script.id = 'handball-widget-script';
      script.async = true;
      script.src = 'https://www.handball.net/widgets/embed/v1.js';
      document.body.appendChild(script);
    }
  }, []);

  // Initialize club Spielplan widget once when section and script are ready
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 40;
    const tryInit = () => {
      const container = document.getElementById('handball-spielplan');
      if (!container || !(window as any)._hb) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(tryInit, 150);
        }
        return;
      }
      if (clubWidgetInitializedRef.current) return;
      container.innerHTML = '';
      (window as any)._hb({
        widget: 'spielplan',
        clubId: 'handball4all.hamburg.1406',
        container: 'handball-spielplan',
      });
      clubWidgetInitializedRef.current = true;
    };
    tryInit();
    return () => {
      const container = document.getElementById('handball-spielplan');
      if (container) container.innerHTML = '';
      clubWidgetInitializedRef.current = false;
    };
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Regionalliga': return 'bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border-purple-300 shadow-sm';
      case 'Oberliga': return 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 border-blue-300 shadow-sm';
      case 'Landesliga': return 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 border-green-300 shadow-sm';
      case 'Bezirksoberliga': return 'bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 border-yellow-300 shadow-sm';
      case 'Kreisliga': return 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 border-orange-300 shadow-sm';
      case 'Spielgruppe': return 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border-gray-300 shadow-sm';
      case 'Inklusion': return 'bg-gradient-to-r from-pink-100 to-pink-50 text-pink-800 border-pink-300 shadow-sm';
      case 'Keine Liga': return 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 border-gray-200 shadow-sm';
      case 'Kein Spielbetrieb': return 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 border-gray-200 shadow-sm';
      default: return 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border-gray-300 shadow-sm';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="text-xl text-muted-foreground">Lade Teams ...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[60vh] bg-gradient-to-br from-accent/5 via-accent/10 to-primary/10 flex items-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <img 
                  src="/hsg-pinnau.png" 
                  alt="HSG Pinnau Logo" 
                  className="h-24 w-auto animate-fade-in"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Unsere <span className="text-primary">Mannschaften</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                Von den Minis bis zu den Erwachsenen - Handball für alle Altersgruppen und Leistungsebenen
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <achievement.icon className="text-primary" size={24} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{achievement.number}</h3>
                      <p className="font-semibold text-primary mb-2">{achievement.label}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA to scroll to club-wide Spielplan */}
              <div className="mt-10">
                <a
                  href="#vereins-spielplan"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md"
                >
                  <Calendar size={20} />
                  Vereins-Spielplan anzeigen
                </a>
              </div>
            </div>
          </div>
        </section>

        

        {/* Teams Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Alle Teams im Überblick
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Entdecken Sie unsere vielfältigen Mannschaften und finden Sie das passende Team für sich
              </p>
            </div>

            <div className="space-y-20">
              {teamCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                // Map category title to anchor id
                let anchorId = undefined;
                if (category.title === 'Erwachsene') anchorId = 'erwachsene';
                else if (category.title === 'Jugend Weiblich') anchorId = 'weiblich';
                else if (category.title === 'Jugend Männlich') anchorId = 'maennlich';
                else if (category.title === 'Besondere Teams') anchorId = 'minis-toppis';
                return (
                  <div
                    key={category.title}
                    id={anchorId}
                    className={`${categoryIndex % 2 === 1 ? 'bg-gradient-to-br from-accent/5 to-primary/5' : 'bg-white'} rounded-xl p-6 animate-fade-in`}
                    style={{ animationDelay: `${categoryIndex * 200}ms` }}
                  >
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 rounded-full transition-all duration-300 hover:scale-110 ${category.color === 'primary' ? 'bg-primary/10 hover:bg-primary/20' : 'bg-accent/10 hover:bg-accent/20'}`}>
                          <CategoryIcon className={`${category.color === 'primary' ? 'text-primary' : 'text-accent-foreground'} transition-all duration-300`} size={32} />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{category.title}</h2>
                      <p className="text-lg font-semibold text-primary mb-4">{category.subtitle}</p>
                      <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">{category.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.teams.map((team, teamIndex) => (
                        <Link
                          key={team.name}
                          to={team.href}
                          className="block group animate-slide-up"
                          style={{ animationDelay: `${teamIndex * 100}ms` }}
                        >
                          <Card className={`h-full bg-white/80 backdrop-blur-sm rounded-xl shadow-lg team-card-hover border-t-4 overflow-hidden ${
                            team.highlight ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10' : 
                            team.special ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10' : 
                            'border-primary/30 bg-gradient-to-br from-white/90 to-white/70'
                          }`}>
                            {/* Header with gradient background */}
                            <div className={`relative p-4 ${team.highlight ? 'bg-gradient-to-r from-primary/10 to-primary/5' : 
                              team.special ? 'bg-gradient-to-r from-accent/10 to-accent/5' : 
                              'bg-gradient-to-r from-gray-50 to-gray-100'}`}>
                              <div className="flex items-center justify-between mb-3">
                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                  {team.name}
                                </CardTitle>
                                {(team.highlight || team.special) && (
                                  <div className="flex items-center">
                                    <div className={`p-2 rounded-full ${team.highlight ? 'bg-primary/20' : 'bg-accent/20'}`}>
                                      <Star className={`${team.highlight ? 'text-primary' : 'text-accent-foreground'} fill-current`} size={18} />
                                    </div>
                                  </div>
                                )}
                              </div>
                              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2 shadow-sm ${getLevelColor(team.liga)}`}>
                                {team.liga}
                              </span>
                            </div>
                            
                            <CardContent className="p-4 pt-3">
                              {/* Team info grid with better styling */}
                              <div className="mb-3 space-y-2">
                                <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                                  <span className="text-sm font-semibold text-gray-600">Jahrgang</span>
                                  <span className="text-sm font-medium text-gray-800">{team.jahrgang || '-'}</span>
                                </div>
                                <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                                  <span className="text-sm font-semibold text-gray-600">Geschlecht</span>
                                  <span className="text-sm font-medium text-gray-800">{team.geschlecht || '-'}</span>
                                </div>
                                <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                                  <span className="text-sm font-semibold text-gray-600">Jugend</span>
                                  <span className="text-sm font-medium text-gray-800">{team.jugend || '-'}</span>
                                </div>
                              </div>
                              
                              {team.description && (
                                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-primary/30">
                                  <p className="text-sm text-gray-700 leading-relaxed italic">"{team.description}"</p>
                                </div>
                              )}
                              
                              {/* Call to action with better styling */}
                              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                                <span className="text-sm font-semibold text-primary">Team Details</span>
                                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-all duration-300">
                                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      {/* Vereins-Spielplan (bottom of page) */}
      <section id="vereins-spielplan" className="pt-8 pb-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-t-4 border-primary p-6">
            <div className="mb-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Vereins-Spielplan</h2>
              <p className="text-muted-foreground">Chronologischer Überblick über alle Spiele unserer Teams.</p>
            </div>
            <div className="flex justify-center">
              <div className="w-full">
                <div id="handball-spielplan" />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white/80 backdrop-blur-sm border-t-4 border-primary">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Interesse geweckt?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Kommen Sie zu einem unverbindlichen Schnuppertraining oder kontaktieren Sie uns für weitere Informationen. 
                  Wir freuen uns auf neue Gesichter in unseren Teams!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/kontakt"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Calendar size={20} />
                    Schnuppertraining vereinbaren
                  </Link>
                  <a
                    href="mailto:vorstand@hsg-pinnau.de"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Mail size={20} />
                    Jetzt kontaktieren
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamsOverviewPage;