import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Trophy, Target, Calendar, Heart, Star, Award, ArrowRight, Mail } from 'lucide-react';

const TeamsOverviewPage = () => {
  const teamCategories = [
    {
      title: "Erwachsene",
      subtitle: "Herren & Damen",
      description: "Unsere Herren- und Damenmannschaften im Erwachsenenbereich kämpfen in verschiedenen Spielklassen um Punkte und Erfolge.",
      icon: Trophy,
      color: "primary",
      teams: [
        { name: "Damen 1", href: "/teams/damen1", level: "Oberliga", description: "Unsere erste Damenmannschaft spielt in der Oberliga und strebt nach dem Aufstieg", highlight: true },
        { name: "Damen 2", href: "/teams/damen2", level: "Landesliga", description: "Zweite Damenmannschaft mit starkem Teamgeist in der Landesliga" },
        { name: "Damen 3", href: "/teams/damen3", level: "Bezirksliga", description: "Dritte Damenmannschaft als perfekter Einstieg in den Erwachsenenhandball" },
        { name: "Herren 1", href: "/teams/herren1", level: "Regionalliga", description: "Unsere erste Herrenmannschaft in der Regionalliga - die Speerspitze des Vereins", highlight: true },
        { name: "Herren 2", href: "/teams/herren2", level: "Oberliga", description: "Zweite Herrenmannschaft frisch aufgestiegen in die Oberliga" },
        { name: "Herren 3", href: "/teams/herren3", level: "Landesliga", description: "Dritte Herrenmannschaft für Handball mit Spaß und Leidenschaft" },
      ]
    },
    {
      title: "Jugend Männlich",
      subtitle: "Nachwuchs Boys",
      description: "Unsere männlichen Jugendteams werden systematisch gefördert und auf den Erwachsenenhandball vorbereitet.",
      icon: Users,
      color: "accent",
      teams: [
        { name: "A-Jugend 1", href: "/teams/a-jugend-m1", level: "Oberliga", description: "Männliche A-Jugend in der Oberliga - unsere zukünftigen Leistungsträger" },
        { name: "A-Jugend 2", href: "/teams/a-jugend-m2", level: "Landesliga", description: "Zweite männliche A-Jugend mit großem Potenzial" },
        { name: "B-Jugend 1", href: "/teams/b-jugend-m1", level: "Oberliga", description: "Männliche B-Jugend mit starker Trainingsgruppe" },
        { name: "C-Jugend 1", href: "/teams/c-jugend-m1", level: "Bezirksliga", description: "Männliche C-Jugend - hier wird Handball-Leidenschaft geweckt" },
        { name: "D-Jugend 1", href: "/teams/d-jugend-m1", level: "Bezirksliga", description: "Männliche D-Jugend für die ersten Wettkampferfahrungen" },
        { name: "E-Jugend 1", href: "/teams/e-jugend-m1", level: "Bezirksliga", description: "Männliche E-Jugend - spielerisch Handball lernen" },
      ]
    },
    {
      title: "Jugend Weiblich",
      subtitle: "Nachwuchs Girls",
      description: "Unsere weiblichen Jugendteams zeigen, dass Handball ein Sport für starke Mädchen ist.",
      icon: Heart,
      color: "primary",
      teams: [
        { name: "A-Jugend 1", href: "/teams/a-jugend-w1", level: "Oberliga", description: "Weibliche A-Jugend in der Oberliga - technisch stark und taktisch clever" },
        { name: "B-Jugend 1", href: "/teams/b-jugend-w1", level: "Landesliga", description: "Weibliche B-Jugend mit großen Ambitionen" },
        { name: "C-Jugend 1", href: "/teams/c-jugend-w1", level: "Bezirksliga", description: "Weibliche C-Jugend - hier entstehen die Handballtalente von morgen" },
        { name: "D-Jugend 1", href: "/teams/d-jugend-w1", level: "Bezirksliga", description: "Weibliche D-Jugend für den Einstieg in den Wettkampfsport" },
        { name: "E-Jugend 1", href: "/teams/e-jugend-w1", level: "Bezirksliga", description: "Weibliche E-Jugend - Spaß am Handball von Anfang an" },
      ]
    },
    {
      title: "Besondere Teams",
      subtitle: "Inklusion & Integration",
      description: "Handball für alle - von den Kleinsten bis zu besonderen Bedürfnissen.",
      icon: Star,
      color: "accent",
      teams: [
        { name: "Minis", href: "/teams/minis", level: "Spielgruppe", description: "Handball für die Kleinsten (4-8 Jahre) - erste Ballgewöhnung und Bewegungsspaß", special: true },
        { name: "Toppis", href: "/teams/toppis", level: "Inklusion", description: "Handball für Kinder mit Handicap - gemeinsam stark und inklusiv", special: true },
      ]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      number: "20+",
      label: "Mannschaften",
      description: "Aktive Teams aller Altersklassen"
    },
    {
      icon: Award,
      number: "5",
      label: "Spielklassen",
      description: "Von Bezirks- bis Regionalliga"
    },
    {
      icon: Heart,
      number: "300+",
      label: "Spieler",
      description: "Aktive Mitglieder in allen Teams"
    },
    {
      icon: Target,
      number: "100%",
      label: "Inklusion",
      description: "Handball für alle Menschen"
    }
  ];

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
                return (
                  <div key={category.title} className={`${categoryIndex % 2 === 1 ? 'bg-gradient-to-br from-accent/5 to-primary/5' : 'bg-white'} rounded-xl p-8`}>
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
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(team.level)}`}>
                                {team.level}
                              </span>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{team.description}</p>
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
                    href="mailto:info@hsg-pinnau.de"
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