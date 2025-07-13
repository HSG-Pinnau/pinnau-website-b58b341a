import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Trophy, Target, Calendar, Heart, Star, Award, ArrowRight, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../../tina/__generated__/client';

const TeamsOverviewPage = () => {
  const [teamCategories, setTeamCategories] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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
          subtitle: 'Herren & Damen',
          description: 'Unsere Herren- und Damenmannschaften im Erwachsenenbereich kämpfen in verschiedenen Spielklassen um Punkte und Erfolge.',
          icon: Trophy,
          color: 'primary',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.jugend === 'Erwachsene'))),
        },
        {
          title: 'Jugend Männlich',
          subtitle: 'Nachwuchs Boys',
          description: 'Unsere männlichen Jugendteams werden systematisch gefördert und auf den Erwachsenenhandball vorbereitet.',
          icon: Users,
          color: 'accent',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.geschlecht === 'Männlich' && t.jugend !== 'Erwachsene'))),
        },
        {
          title: 'Jugend Weiblich',
          subtitle: 'Nachwuchs Girls',
          description: 'Unsere weiblichen Jugendteams zeigen, dass Handball ein Sport für starke Mädchen ist.',
          icon: Heart,
          color: 'primary',
          teams: addHref(highlightFirstPerJahrgang(teams.filter((t: any) => t.geschlecht === 'Weiblich' && t.jugend !== 'Erwachsene'))),
        },
        {
          title: 'Besondere Teams',
          subtitle: 'Inklusion & Integration',
          description: 'Handball für alle - von den Kleinsten bis zu besonderen Bedürfnissen.',
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
          description: 'Handball für alle Menschen',
        },
      ]);
      setLoading(false);
    };
    fetchTeams();
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Regionalliga': return 'bg-primary/20 text-primary border-primary/30';
      case 'Oberliga': return 'bg-primary/15 text-primary border-primary/25';
      case 'Landesliga': return 'bg-accent/20 text-accent-foreground border-accent/30';
      case 'Bezirksliga': return 'bg-accent/15 text-accent-foreground border-accent/25';
      case 'Spielgruppe': return 'bg-muted/60 text-muted-foreground border-muted-foreground/30';
      case 'Inklusion': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted text-muted-foreground border-border';
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
                  src="/lovable-uploads/bf51c967-183e-4af8-a13d-0f2057a13892.png" 
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
                    className={`${categoryIndex % 2 === 1 ? 'bg-gradient-to-br from-accent/5 to-primary/5' : 'bg-white'} rounded-xl p-8`}
                  >
                    <div className="text-center mb-12">
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 rounded-full ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                          <CategoryIcon className={`${category.color === 'primary' ? 'text-primary' : 'text-accent-foreground'}`} size={32} />
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
                          className="block group"
                        >
                          <Card className={`h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 ${
                            team.highlight ? 'border-primary bg-primary/5' : 
                            team.special ? 'border-accent bg-accent/5' : 
                            'border-primary/50'
                          }`}>
                            <CardHeader className="pb-4">
                              <div className="flex items-center justify-between mb-3">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                  {team.name}
                                </CardTitle>
                                {(team.highlight || team.special) && (
                                  <div className="flex">
                                    <Star className={`${team.highlight ? 'text-primary' : 'text-accent-foreground'} fill-current`} size={16} />
                                  </div>
                                )}
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(team.liga)}`}>
                                {team.liga}
                              </span>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="mb-2 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-muted-foreground">
                                <div className="font-semibold">Jahrgang:</div>
                                <div>{team.jahrgang || '-'}</div>
                                <div className="font-semibold">Geschlecht:</div>
                                <div>{team.geschlecht || '-'}</div>
                                <div className="font-semibold">Jugend:</div>
                                <div>{team.jugend || '-'}</div>
                              </div>
                              {team.description && (
                                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{team.description}</p>
                              )}
                              <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                                <span>Team Details</span>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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