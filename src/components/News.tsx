
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      title: "Erfolgreicher Saisonstart für die Damen 1",
      excerpt: "Mit einem überzeugenden 28:22 Sieg gegen den TV Flensburg startete unsere erste Damenmannschaft erfolgreich in die neue Saison.",
      date: "2024-01-15",
      category: "Spielbericht",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop"
    },
    {
      title: "Jugendturnier am 3. Februar 2024",
      excerpt: "Unser traditionelles Jugendturnier findet am ersten Wochenende im Februar statt. Anmeldungen sind ab sofort möglich.",
      date: "2024-01-10",
      category: "Event",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      title: "Herren 2 steigt in die Oberliga auf",
      excerpt: "Nach einer fantastischen Saison hat es unsere zweite Herrenmannschaft geschafft - der Aufstieg in die Oberliga ist perfekt!",
      date: "2024-01-05",
      category: "Erfolg",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop"
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
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-primary"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(item.date)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <button className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-200">
                  Weiterlesen
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
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
