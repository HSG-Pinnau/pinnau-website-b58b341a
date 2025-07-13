
import { Calendar, Clock, ArrowRight, Trophy, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getNewsCached } from './navigation/newsDataCache';

const News = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const news = await getNewsCached();
        // Only show the first 3 news items for the homepage section
        setNewsItems(news.slice(0, 3));
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

  if (loading) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xl text-muted-foreground">Lade News ...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Neueste Nachrichten & Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bleiben Sie auf dem Laufenden mit den neuesten Ereignissen der HSG Pinnau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const CategoryIcon = getCategoryIcon(item.kategorie);
            return (
              <article 
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-primary"
              >
                <div className="relative">
                  <img 
                    src={item.bild} 
                    alt={item.titel}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(item.kategorie)}`}>
                      <CategoryIcon size={12} className="inline mr-1" />
                      {item.kategorie}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(item.datum)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {item.titel}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {item.kurzbeschreibung}
                  </p>
                  
                  <Link
                    to={`/news/${item.id}`}
                    className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-200"
                  >
                    Weiterlesen
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            Alle Nachrichten anzeigen
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
