import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Target, Award, Mail, Phone, Calendar, Shield } from 'lucide-react';

const AboutPage = () => {
  const boardMembers = [
    {
      title: "1. Vorsitzender",
      name: "Marco Bretz",
      email: "marco@hsg-pinnau.de",
      icon: Shield
    },
    {
      title: "2. Vorsitzender", 
      name: "Dominik Stolz",
      email: "dominik@hsg-pinnau.de",
      icon: Shield
    },
    {
      title: "Spielwart Erwachsene",
      name: "Dominik Stolz",
      icon: Users
    },
    {
      title: "Spielwartin Jugend",
      name: "Lisa Moritz",
      email: "lisa@hsg-pinnau.de",
      icon: Heart
    },
    {
      title: "Kassenwartin",
      name: "Vera da Graca", 
      email: "vera@hsg-pinnau.de",
      icon: Target
    },
    {
      title: "Pressewartin / Social Media",
      name: "Julia Festersen",
      email: "julia@hsg-pinnau.de",
      icon: Award
    }
  ];

  const supportTeam = [
    { title: "Protokollführer", name: "Mario da Graca", email: "mario@hsg-pinnau.de" },
    { title: "Beisitz", name: "Sven Dreher", email: "sven@hsg-pinnau.de" },
    { title: "Beisitz", name: "Julia Festersen" },
    { title: "Beisitz", name: "Laura Schneider" },
    { title: "Beisitz", name: "Philipp Kunau" },
    { title: "Schiedsrichterwart", name: "Marco Bretz" },
    { title: "Mitgliederverwaltung", name: "Sven Dreher" },
    { title: "Passverwaltung", name: "Julia Festersen" },
    { title: "IT Admin", name: "Julia Festersen" },
    { title: "Homepage", name: "Julia Festersen, Sven Dreher, Mario da Graca, Dominik Stolz" },
    { title: "Eventplanung", name: "Lisa Moritz, Julia Festersen" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Teamgeist",
      description: "Zusammenhalt und Kameradschaft stehen bei uns im Mittelpunkt"
    },
    {
      icon: Target,
      title: "Fairplay",
      description: "Respekt und sportliche Fairness prägen unser Verständnis von Handball"
    },
    {
      icon: Award,
      title: "Exzellenz",
      description: "Wir streben nach sportlicher und persönlicher Bestleistung"
    },
    {
      icon: Users,
      title: "Gemeinschaft",
      description: "Ein starkes Vereinsleben verbindet alle Generationen"
    }
  ];

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
                Über <span className="text-primary">uns</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
                Lernen Sie die HSG Pinnau kennen - Tradition, Leidenschaft und Gemeinschaft seit 2011
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Unsere Geschichte & Werte
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Seit 2011 vereinen wir als Spielgemeinschaft TSV Prisdorf und VfL Pinneberg
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Unsere Mission</h3>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Die HSG Pinnau ist ein traditionsreicher Handballverein im Herzen Schleswig-Holsteins. 
                    Seit unserer Gründung haben wir uns zu einem der führenden Handballvereine der Region entwickelt 
                    und bieten Handball für alle Altersklassen - von den Minis bis zu den Erwachsenen.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unser Verein steht für Teamgeist, Fairplay und sportliche Exzellenz. Wir fördern nicht nur 
                    die sportliche Entwicklung unserer Mitglieder, sondern auch ihre persönliche Entwicklung 
                    und den Zusammenhalt in der Gemeinschaft.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mit modernen Trainingsmethoden, erfahrenen Trainern und einer starken Vereinsgemeinschaft 
                    schaffen wir optimale Bedingungen für alle, die Handball lieben - egal ob Anfänger oder Profi.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <value.icon className="text-primary" size={24} />
                        </div>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board Section */}
        <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unser Vorstand</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Das engagierte Team hinter der HSG Pinnau
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {boardMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-primary">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <member.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-primary mb-2">{member.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="font-semibold text-foreground mb-3">{member.name}</p>
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        <Mail size={14} />
                        {member.email}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Team */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">
                  Weitere Unterstützung erhalten wir durch:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supportTeam.map((member, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-accent">
                      <h4 className="font-semibold text-accent-foreground mb-2">{member.title}</h4>
                      <p className="text-foreground mb-1">{member.name}</p>
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`} 
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <Mail size={12} />
                          {member.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6 text-lg">Allgemeine Anfragen gerne an:</p>
              <a 
                href="mailto:vorstand@hsg-pinnau.de" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Mail size={20} />
                vorstand@hsg-pinnau.de
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;