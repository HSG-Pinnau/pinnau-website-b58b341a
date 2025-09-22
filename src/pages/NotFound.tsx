import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Users, Phone, Search } from "lucide-react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-10 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Search className="w-4 h-4 mr-2" />
                Seite nicht gefunden
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">404</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
                Die angeforderte Seite existiert nicht oder wurde verschoben.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Zur Startseite
                </Link>
                <Link
                  to="/mannschaften"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Zu den Mannschaften
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 font-medium"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-card rounded-xl p-6 shadow-lg text-center">
            <p className="text-muted-foreground">
              Wenn du die URL direkt eingegeben hast, überprüfe bitte die Schreibweise.
              Alternativ nutze die Navigation oben, um die gewünschte Seite zu öffnen.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
