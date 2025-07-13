import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, Trophy, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const newsItems = [
    {
      id: '1',
      title: "Erfolgreicher Saisonstart für die Damen 1",
      excerpt: "Mit einem überzeugenden 28:22 Sieg gegen den TV Flensburg startete unsere erste Damenmannschaft erfolgreich in die neue Saison.",
      content: "Ein grandioses Spiel zeigten unsere Damen gegen den favorisierten TV Flensburg. Von Beginn an dominierten sie das Spielgeschehen und ließen dem Gegner keine Chance. Besonders hervorzuheben ist die starke Defensive sowie die effektive Angriffsführung.",
      date: "2024-01-15",
      category: "Spielbericht",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
      author: "Julia Festersen",
      featured: true
    },
    {
      id: '2',
      title: "Jugendturnier am 3. Februar 2024",
      excerpt: "Unser traditionelles Jugendturnier findet am ersten Wochenende im Februar statt. Anmeldungen sind ab sofort möglich.",
      content: "Das diesjährige Jugendturnier verspricht wieder ein Highlight zu werden. Teams aus ganz Schleswig-Holstein haben bereits ihre Teilnahme zugesagt. Für Verpflegung und ein buntes Rahmenprogram ist gesorgt.",
      date: "2024-01-10",
      category: "Event",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      author: "Lisa Moritz"
    },
    {
      id: '3',
      title: "Neue Trainingszeiten ab Februar",
      excerpt: "Ab dem 1. Februar gelten neue Trainingszeiten für alle Mannschaften. Bitte beachtet die Änderungen in euren Kalender.",
      content: "Aufgrund der besseren Hallenverteilung können wir ab Februar optimierte Trainingszeiten anbieten. Alle Mannschaften profitieren von längeren Trainingseinheiten und besseren Zeiten.",
      date: "2024-01-08",
      category: "Training",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop",
      author: "Marco Bretz"
    },
    {
      id: '4',
      title: "Herren 2 steigt in die Oberliga auf",
      excerpt: "Nach einer fantastischen Saison hat es unsere zweite Herrenmannschaft geschafft - der Aufstieg in die Oberliga ist perfekt!",
      content: "Was für eine Saison! Mit nur einer Niederlage und 22 Siegen sicherte sich unser Herren 2 Team souverän den Meistertitel und damit den Aufstieg in die Oberliga. Wir gratulieren dem gesamten Team und dem Trainerteam herzlich!",
      date: "2024-01-05",
      category: "Erfolg",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      author: "Dominik Stolz"
    },
    {
      id: '5',
      title: "Weihnachtsfeier 2023 - Ein voller Erfolg",
      excerpt: "Unsere Vereinsweihnachtsfeier war wieder ein voller Erfolg. Über 200 Mitglieder feierten gemeinsam in der Vereinshalle.",
      content: "Bei leckerem Essen, toller Musik und vielen Gesprächen verbrachten wir einen wunderschönen Abend zusammen. Besonders die Ehrungen verdienter Vereinsmitglieder waren ein Highlight des Abends.",
      date: "2023-12-16",
      category: "Vereinsleben",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      author: "Julia Festersen"
    },
    {
      id: '6',
      title: "Neue Trikots für alle Jugendmannschaften",
      excerpt: "Dank unserer Sponsoren können wir allen Jugendmannschaften neue Trikots zur Verfügung stellen.",
      content: "Ein herzliches Dankeschön an alle Sponsoren, die es möglich gemacht haben, dass unsere Jugendmannschaften mit neuen, modernen Trikots ausgestattet werden können. Die Übergabe findet am kommenden Samstag statt.",
      date: "2023-12-10",
      category: "Ausrüstung",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      author: "Lisa Moritz"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Spielbericht': return Trophy;
      case 'Event': return Calendar;
      case 'Training': return Target;
      case 'Erfolg': return Trophy;
      case 'Vereinsleben': return Heart;
      case 'Ausrüstung': return Users;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Spielbericht': return 'bg-primary/10 text-primary border-primary/20';
      case 'Event': return 'bg-accent/10 text-accent-foreground border-accent/20';
      case 'Training': return 'bg-primary/10 text-primary border-primary/20';
      case 'Erfolg': return 'bg-green-100 text-green-800 border-green-200';
      case 'Vereinsleben': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Ausrüstung': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const featuredNews = null;
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[50vh] bg-gradient-to-br from-accent/5 via-accent/10 to-primary/10 flex items-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                News & <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
                Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten der HSG Pinnau
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Aktuelle Highlights</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(featuredNews.category)}`}>
                        {featuredNews.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(featuredNews.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredNews.author}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {featuredNews.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredNews.content}
                    </p>
                    
                    <div className="flex gap-4">
                      <Link
                        to={`/news/${featuredNews.id}`}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
                      >
                        Weiterlesen
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Letzte Nachrichten</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => {
                const CategoryIcon = getCategoryIcon(item.category);
                return (
                  <Card 
                    key={item.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-accent"
                  >
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(item.category)}`}>
                          <CategoryIcon size={12} className="inline mr-1" />
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{item.author}</span>
                        <Link
                          to={`/news/${item.id}`}
                          className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-200"
                        >
                          Lesen
                          <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;