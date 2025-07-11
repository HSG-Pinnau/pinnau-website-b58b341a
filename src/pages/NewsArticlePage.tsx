import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowLeft, Trophy, Users, Target, Heart, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

// This would normally come from a database or API
const newsArticles = {
  '1': {
    id: 1,
    title: "Erfolgreicher Saisonstart für die Damen 1",
    excerpt: "Mit einem überzeugenden 28:22 Sieg gegen den TV Flensburg startete unsere erste Damenmannschaft erfolgreich in die neue Saison.",
    content: `
      <p>Ein grandioses Spiel zeigten unsere Damen gegen den favorisierten TV Flensburg. Von Beginn an dominierten sie das Spielgeschehen und ließen dem Gegner keine Chance. Besonders hervorzuheben ist die starke Defensive sowie die effektive Angriffsführung.</p>
      
      <p>Bereits in der ersten Halbzeit konnten sich die Pinnauer Damen einen komfortablen Vorsprung erarbeiten. Durch eine geschlossene Mannschaftsleistung und taktisch kluge Spielzüge führten sie zur Halbzeit mit 16:10.</p>
      
      <p>Auch in der zweiten Halbzeit ließen die Damen nicht nach. Trainerin Sarah Müller lobte nach dem Spiel besonders die Mentalität ihrer Mannschaft: "Die Mädels haben von der ersten bis zur letzten Minute konzentriert gespielt und verdient gewonnen."</p>
      
      <p>Besonders hervorzuheben sind die Leistungen von Lisa Schmidt (8 Tore) und Anna Petersen (6 Tore), die als Spielerinnen des Spiels ausgezeichnet wurden. Torfrau Jana Weber hielt mit 12 parierten Würfen ihre Mannschaft im Spiel.</p>
      
      <p>Das nächste Spiel findet am kommenden Samstag um 19:00 Uhr in eigener Halle gegen den TSV Kronshagen statt. Die Mannschaft hofft auf zahlreiche Unterstützung von den Rängen.</p>
    `,
    date: "2024-01-15",
    category: "Spielbericht",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=400&fit=crop",
    author: "Julia Festersen",
    readTime: "3 min",
    tags: ["Damen 1", "Spielbericht", "Sieg", "Saison 2024"]
  },
  '2': {
    id: 2,
    title: "Jugendturnier am 3. Februar 2024",
    excerpt: "Unser traditionelles Jugendturnier findet am ersten Wochenende im Februar statt. Anmeldungen sind ab sofort möglich.",
    content: `
      <p>Das diesjährige Jugendturnier der HSG Pinnau verspricht wieder ein Highlight der Saison zu werden. Am Samstag, den 3. Februar 2024, verwandelt sich unsere Vereinshalle in ein Zentrum des Nachwuchshandballs.</p>
      
      <p>Teams aus ganz Schleswig-Holstein haben bereits ihre Teilnahme zugesagt. Von der E-Jugend bis zur A-Jugend werden alle Altersklassen vertreten sein. Das Turnier beginnt um 9:00 Uhr mit den jüngsten Teilnehmern und endet gegen 18:00 Uhr mit der A-Jugend.</p>
      
      <p>Jugendwartin Lisa Moritz freut sich auf das Event: "Unser Jugendturnier ist immer ein besonderes Ereignis. Es ist schön zu sehen, wie sich die jungen Spielerinnen und Spieler entwickelt haben und mit welcher Begeisterung sie bei der Sache sind."</p>
      
      <p>Für das leibliche Wohl ist bestens gesorgt. Der Förderverein übernimmt die Bewirtung mit Kaffee, Kuchen, Bratwurst und Getränken. Der Erlös fließt in die Jugendarbeit des Vereins.</p>
      
      <p>Anmeldungen sind ab sofort unter <a href="mailto:lisa@hsg-pinnau.de" class="text-primary hover:underline">lisa@hsg-pinnau.de</a> möglich. Die Teilnahmegebühr beträgt 25 Euro pro Team.</p>
    `,
    date: "2024-01-10",
    category: "Event",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    author: "Lisa Moritz",
    readTime: "2 min",
    tags: ["Jugend", "Turnier", "Event", "Anmeldung"]
  },
  '3': {
    id: 3,
    title: "Neue Trainingszeiten ab Februar",
    excerpt: "Ab dem 1. Februar gelten neue Trainingszeiten für alle Mannschaften. Bitte beachtet die Änderungen in euren Kalender.",
    content: `
      <p>Aufgrund der optimierten Hallenverteilung können wir ab dem 1. Februar 2024 verbesserte Trainingszeiten für alle Mannschaften anbieten. Die neuen Zeiten ermöglichen längere Trainingseinheiten und eine bessere Aufteilung der verfügbaren Hallenzeiten.</p>
      
      <p><strong>Neue Trainingszeiten im Überblick:</strong></p>
      
      <p><strong>Erwachsenenbereich:</strong><br>
      Damen 1: Dienstag 19:30-21:00, Donnerstag 20:00-21:30<br>
      Damen 2: Montag 19:00-20:30, Mittwoch 19:30-21:00<br>
      Damen 3: Montag 20:30-22:00, Donnerstag 18:30-20:00<br>
      Herren 1: Dienstag 20:00-21:30, Freitag 19:30-21:00<br>
      Herren 2: Mittwoch 20:00-21:30, Samstag 16:00-17:30<br>
      Herren 3: Montag 18:00-19:30, Donnerstag 20:00-21:30</p>
      
      <p><strong>Jugendbereich:</strong><br>
      A-Jugend: Dienstag 18:00-19:30, Freitag 17:30-19:00<br>
      B-Jugend: Montag 17:00-18:30, Mittwoch 17:30-19:00<br>
      C-Jugend: Dienstag 16:30-18:00, Donnerstag 17:00-18:30<br>
      D-Jugend: Montag 16:00-17:30, Mittwoch 16:00-17:30<br>
      E-Jugend: Dienstag 15:30-16:30, Donnerstag 15:30-16:30</p>
      
      <p>Alle Trainer wurden bereits über die Änderungen informiert. Bei Fragen wendet euch bitte an eure jeweiligen Trainer oder die Spielwarte.</p>
    `,
    date: "2024-01-08",
    category: "Training",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop",
    author: "Marco Bretz",
    readTime: "4 min",
    tags: ["Training", "Zeiten", "Halle", "Mannschaften"]
  },
  '4': {
    id: 4,
    title: "Herren 2 steigt in die Oberliga auf",
    excerpt: "Nach einer fantastischen Saison hat es unsere zweite Herrenmannschaft geschafft - der Aufstieg in die Oberliga ist perfekt!",
    content: `
      <p>Was für eine Saison! Nach einem spannenden Saisonfinale ist es perfekt: Unsere Herren 2 steigen in die Oberliga auf! Mit einer beeindruckenden Bilanz von 22 Siegen und nur einer Niederlage sicherte sich das Team souverän den Meistertitel in der Landesliga.</p>
      
      <p>Das entscheidende Spiel am letzten Spieltag gegen den direkten Konkurrenten SV Tungendorf war ein echter Krimi. Vor über 300 Zuschauern in der ausverkauften Halle kämpfte sich die Mannschaft von einem 5-Tore-Rückstand zurück und gewann schließlich mit 32:29.</p>
      
      <p>Trainer Michael Weber war nach dem Spiel sichtlich bewegt: "Ich bin unglaublich stolz auf die Jungs. Sie haben über die gesamte Saison eine fantastische Leistung gezeigt und sich diesen Aufstieg mehr als verdient."</p>
      
      <p>Kapitän Thomas Hoffmann, der in seiner zehnten Saison für die HSG Pinnau spielt, konnte seine Emotionen kaum verbergen: "Das ist ein Traum, der wahr geworden ist. Wir haben als Team zusammengehalten und uns gegenseitig gepusht. Jetzt freuen wir uns auf die neue Herausforderung in der Oberliga."</p>
      
      <p>Die Aufstiegsfeier findet am kommenden Samstag ab 20:00 Uhr im Vereinsheim statt. Alle Mitglieder und Fans sind herzlich eingeladen!</p>
    `,
    date: "2024-01-05",
    category: "Erfolg",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop",
    author: "Dominik Stolz",
    readTime: "3 min",
    tags: ["Herren 2", "Aufstieg", "Oberliga", "Meisterschaft"]
  },
  '5': {
    id: 5,
    title: "Weihnachtsfeier 2023 - Ein voller Erfolg",
    excerpt: "Unsere Vereinsweihnachtsfeier war wieder ein voller Erfolg. Über 200 Mitglieder feierten gemeinsam in der Vereinshalle.",
    content: `
      <p>Bei leckerem Essen, toller Musik und vielen herzlichen Gesprächen verbrachten über 200 Mitglieder der HSG Pinnau einen wunderschönen Abend in der festlich geschmückten Vereinshalle. Die traditionelle Weihnachtsfeier war wieder ein voller Erfolg.</p>
      
      <p>Der Abend begann um 18:00 Uhr mit einem Sektempfang, bevor das von den Helfern des Fördervereins zubereitete Buffet eröffnet wurde. Von Gulasch bis zu vegetarischen Köstlichkeiten war für jeden Geschmack etwas dabei.</p>
      
      <p>Ein besonderes Highlight waren die Ehrungen verdienter Vereinsmitglieder. Für 25-jährige Mitgliedschaft wurden Werner Schmidt und Ingrid Müller ausgezeichnet. Für ihre 40-jährige Treue zur HSG Pinnau erhielten Hans-Peter Jensen und Marianne Wolff eine besondere Ehrung.</p>
      
      <p>Die Jugendabteilung sorgte mit einer kleinen Aufführung für Unterhaltung, bevor DJ Marcus für Stimmung auf der Tanzfläche sorgte. Bis spät in die Nacht wurde getanzt, gelacht und gefeiert.</p>
      
      <p>Vorstandsvorsitzender Marco Bretz bedankte sich bei allen Helfern: "Ohne das Engagement unserer ehrenamtlichen Helfer wäre so ein schöner Abend nicht möglich. Ein herzliches Dankeschön an alle!"</p>
    `,
    date: "2023-12-16",
    category: "Vereinsleben",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
    author: "Julia Festersen",
    readTime: "3 min",
    tags: ["Weihnachtsfeier", "Vereinsleben", "Ehrungen", "Gemeinschaft"]
  },
  '6': {
    id: 6,
    title: "Neue Trikots für alle Jugendmannschaften",
    excerpt: "Dank unserer Sponsoren können wir allen Jugendmannschaften neue Trikots zur Verfügung stellen.",
    content: `
      <p>Ein herzliches Dankeschön an alle Sponsoren, die es möglich gemacht haben, dass unsere Jugendmannschaften mit neuen, modernen Trikots ausgestattet werden können. Die Übergabe fand am vergangenen Samstag in feierlichem Rahmen statt.</p>
      
      <p>Die neuen Trikots in den Vereinsfarben Blau und Gelb wurden von der Firma SportMax aus Pinneberg gesponsert. Hauptsponsor ist erneut die Volksbank Pinnau, die seit Jahren treuer Partner der HSG Pinnau ist.</p>
      
      <p>Jugendwartin Lisa Moritz freute sich über die neuen Trikots: "Es ist wichtig, dass unsere jungen Spielerinnen und Spieler mit modernen und funktionalen Trikots ausgestattet sind. Das stärkt nicht nur das Teamgefühl, sondern auch das Selbstbewusstsein."</p>
      
      <p>Die Trikots sind aus hochwertigem, atmungsaktivem Material gefertigt und verfügen über die neueste Feuchtigkeitsregulierung. Auf der Brust prangt das HSG Pinnau Logo, auf der Rückseite die Nummer und der Name des Spielers.</p>
      
      <p>Neben den Hauptsponsoren unterstützten auch lokale Unternehmen wie die Bäckerei Petersen, die Apotheke am Markt und das Autohaus Müller die Aktion. Ein Zeichen für die starke Verbindung zwischen Verein und Region.</p>
    `,
    date: "2023-12-10",
    category: "Ausrüstung",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    author: "Lisa Moritz",
    readTime: "2 min",
    tags: ["Jugend", "Trikots", "Sponsoren", "Ausrüstung"]
  }
};

const NewsArticlePage = () => {
  const { articleId } = useParams();
  const article = articleId ? newsArticles[articleId as keyof typeof newsArticles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Artikel nicht gefunden</h1>
              <p className="text-muted-foreground mb-8">Der gewünschte Artikel konnte nicht gefunden werden.</p>
              <Link
                to="/news"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Zurück zu den News
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const CategoryIcon = getCategoryIcon(article.category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Article Header */}
        <section className="py-12 bg-gradient-to-br from-accent/5 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              Zurück zu den News
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(article.category)}`}>
                <CategoryIcon size={12} className="inline mr-1" />
                {article.category}
              </span>
              <div className="flex items-center text-muted-foreground text-sm gap-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {article.author}
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

export default NewsArticlePage;