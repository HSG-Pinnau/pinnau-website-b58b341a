import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, Trophy, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getNewsCached } from '@/components/navigation/newsDataCache';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const news = await getNewsCached();
        setNewsItems(news);
      } catch (error) {
        console.error('Error loading news:', error);
        setNewsItems([]);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (kategorie: string) => {
    switch (kategorie) {
      case 'Spielbericht': return Trophy;
      case 'Event': return Calendar;
      case 'Training': return Target;
      case 'Erfolg': return Trophy;
      case 'Vereinsleben': return Heart;
      case 'Ausrüstung': return Users;
      default: return Calendar;
    }
  };

  const getCategoryColor = (kategorie: string) => {
    switch (kategorie) {
      case 'Spielbericht': return 'bg-primary/10 text-primary border-primary/20';
      case 'Event': return 'bg-accent/10 text-accent-foreground border-accent/20';
      case 'Training': return 'bg-primary/10 text-primary border-primary/20';
      case 'Erfolg': return 'bg-green-100 text-green-800 border-green-200';
      case 'Vereinsleben': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Ausrüstung': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const featuredCandidates = newsItems.filter(item => item.featured);
  const featuredNews = featuredCandidates.length > 0
    ? [...featuredCandidates].sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime())[0]
    : null;
  const regularNews = featuredNews
    ? newsItems.filter(item => item.id !== featuredNews.id)
    : newsItems;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="text-xl text-muted-foreground">Lade News ...</span>
      </div>
    );
  }

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
                      src={featuredNews.bild} 
                      alt={featuredNews.titel}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(featuredNews.kategorie)}`}>
                        {featuredNews.kategorie}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(featuredNews.datum)}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredNews.autor}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {featuredNews.titel}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredNews.kurzbeschreibung}
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
                const CategoryIcon = getCategoryIcon(item.kategorie);
                return (
                  <Card 
                    key={item.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-accent"
                  >
                    <div className="relative">
                      <img 
                        src={item.bild} 
                        alt={item.titel}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(item.kategorie)}`}>
                          <CategoryIcon size={12} className="inline mr-1" />
                          {item.kategorie}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span>{formatDate(item.datum)}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                        {item.titel}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                        {item.kurzbeschreibung}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{item.autor}</span>
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