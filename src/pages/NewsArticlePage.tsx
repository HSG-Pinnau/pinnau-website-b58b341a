import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowLeft, Trophy, Users, Target, Heart, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getNewsArticleByIdCached } from '@/components/navigation/newsDataCache';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const NewsArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        if (articleId) {
          const newsData = await getNewsArticleByIdCached(articleId);
          setArticle(newsData);
        }
      } catch (error) {
        console.error('Error loading article:', error);
        setArticle(null);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [articleId]);

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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="text-xl text-muted-foreground">Lade Artikel ...</span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Artikel nicht gefunden</h1>
            <p className="text-muted-foreground mb-6">Der angeforderte Artikel existiert nicht.</p>
            <Link
              to="/news"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 mx-auto w-fit"
            >
              <ArrowLeft size={16} />
              Zurück zu den News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const CategoryIcon = getCategoryIcon(article.kategorie);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Back Navigation */}
        <section className="py-6 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/news"
              className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors duration-200 w-fit"
            >
              <ArrowLeft size={16} className="mr-2" />
              Zurück zu den News
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(article.kategorie)}`}>
                  <CategoryIcon size={16} className="inline mr-2" />
                  {article.kategorie}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {article.titel}
              </h1>
              
              <div className="flex items-center justify-center text-muted-foreground text-sm space-x-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(article.datum)}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{article.autor}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden shadow-lg">
              {/* Featured Image */}
              {article.bild && (
                <div className="relative">
                  <img 
                    src={article.bild}
                    alt={article.titel}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              )}
              
              <CardContent className="p-8 md:p-12">
                {/* Excerpt */}
                <div className="text-xl text-muted-foreground leading-relaxed mb-8 p-6 bg-accent/5 rounded-lg border-l-4 border-primary">
                  {article.kurzbeschreibung}
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <TinaMarkdown content={article.inhalt} />
                </div>
              </CardContent>
            </Card>

            {/* Article Footer */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Bleiben Sie auf dem Laufenden
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Verpassen Sie keine News der HSG Pinnau. Besuchen Sie regelmäßig unsere News-Seite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/news"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
                    >
                      Alle News ansehen
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
                    >
                      Kontakt aufnehmen
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticlePage;
