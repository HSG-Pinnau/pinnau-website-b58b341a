import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getHallenhefteCached } from '@/components/navigation/hallenhefteDataCache';

const HallenheftePage = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const data = await getHallenhefteCached();
        setItems(data);
      } catch (e) {
        console.error('Error loading hallenhefte', e);
        setItems([]);
      }
      setLoading(false);
    };
    fetchItems();
  }, []);

  const formatMonth = (dateString: string) => {
    if (!dateString) return '';
    const d = new Date(dateString);
    return d.toLocaleDateString('de-DE', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navigation />
      {/* Hero Section */}
      <section className="relative mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Hallenhefte</h1>
            <p className="text-muted-foreground text-lg">
              Unsere monatlich erscheinenden Hallenhefte mit Spieltagen, Artikeln und Informationen
              rund um die HSG Pinnau. Alle Ausgaben stehen dir hier zum Download bereit.
            </p>
          </div>
        </div>
      </section>
      <main className="container mx-auto flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-muted-foreground">Lade Hallenhefte...</div>
        ) : items.length === 0 ? (
          <div className="text-muted-foreground">Keine Hallenhefte gefunden.</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <Card key={it.id} className="group overflow-hidden border border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold leading-snug">{it.titel}</CardTitle>
                    <span className="ml-3 whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      {formatMonth(it.ausgabe)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  {it.beschreibung ? (
                    <p className="text-sm text-muted-foreground line-clamp-3">{it.beschreibung}</p>
                  ) : null}
                  {it.pdf ? (
                    <a
                      href={it.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  ) : (
                    <div className="text-sm text-destructive">Keine PDF hinterlegt.</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HallenheftePage;


