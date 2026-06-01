import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowLeft, ChevronLeft, ChevronRight, Trophy, Users, Target, Heart, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getNewsArticleByIdCached } from '@/components/navigation/newsDataCache';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const NewsArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const navigateGallery = (newIdx: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setGalleryIdx(newIdx);
      setFadeIn(true);
    }, 150);
  };

  useEffect(() => {
    setGalleryIdx(0);
    setFadeIn(true);
  }, [article]);

  useEffect(() => {
    if (!article?.bilder?.length || article.bilder.length <= 1) return;
    const interval = setInterval(() => {
      navigateGallery((galleryIdx + 1) % article.bilder.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryIdx, article]);

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
              {/* Image Gallery / Featured Image */}
              {article.bilder && article.bilder.length > 0 ? (
                <div className="relative group overflow-hidden">
                  <img
                    src={article.bilder[galleryIdx].src}
                    alt={article.bilder[galleryIdx].alt || article.titel}
                    className={`w-full h-64 md:h-96 object-cover transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {article.bilder.length > 1 && (
                    <>
                      <button
                        onClick={() => navigateGallery((galleryIdx - 1 + article.bilder.length) % article.bilder.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/55 backdrop-blur-sm text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                        aria-label="Vorheriges Bild"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => navigateGallery((galleryIdx + 1) % article.bilder.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/55 backdrop-blur-sm text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                        aria-label="Nächstes Bild"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        {galleryIdx + 1} / {article.bilder.length}
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-1.5">
                        {article.bilder.map((_: any, i: number) => (
                          <button
                            key={i}
                            onClick={() => navigateGallery(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === galleryIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Bild ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : article.bild ? (
                <div className="relative">
                  <img
                    src={article.bild}
                    alt={article.titel}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              ) : null}
              
              <CardContent className="p-8 md:p-12">
                {/* Excerpt */}
                <div className="text-xl text-muted-foreground leading-relaxed mb-8 p-6 bg-accent/5 rounded-lg border-l-4 border-primary">
                  {article.kurzbeschreibung}
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none 
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                  prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6 prose-h2:text-primary
                  prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-4
                  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-em:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-foreground/80
                  prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-muted prose-pre:text-foreground
                  prose-ul:text-foreground prose-ul:mb-4 prose-ul:pl-6
                  prose-ol:text-foreground prose-ol:mb-4 prose-ol:pl-6
                  prose-li:text-foreground prose-li:mb-1
                  prose-li:marker:text-primary
                  prose-hr:border-border prose-hr:my-8
                  [&>*:first-child]:mt-0 [&>*:last-child]:mb-0
                ">
                  {article.inhalt ? (
                    <TinaMarkdown content={article.inhalt} />
                  ) : (
                    <p className="text-muted-foreground italic">Kein Inhalt verfügbar.</p>
                  )}
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
