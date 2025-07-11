
import { ArrowRight, Award, Users, Calendar, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-accent/5 via-accent/10 to-primary/10 pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/bf51c967-183e-4af8-a13d-0f2057a13892.png" 
              alt="HSG Pinnau Logo" 
              className="h-32 w-auto animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            HSG <span className="text-primary">Pinnau</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Leidenschaft für Handball seit 2011
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            Die Spielgemeinschaft aus TSV Prisdorf und VfL Pinneberg - 
            Drei Damen- und drei Herren-Mannschaften sowie Jugendteams von A-Jugend bis zu den Minis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link
              to="/mannschaften"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
            >
              Mannschaften entdecken
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/kontakt"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Kontakt
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-primary">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">6</h3>
              <p className="text-muted-foreground">Mannschaften</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-accent">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Award className="text-accent-foreground" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">13+</h3>
              <p className="text-muted-foreground">Jahre Erfahrung</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-primary">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">2</h3>
              <p className="text-muted-foreground">Stammvereine</p>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-muted-foreground text-sm mb-2 opacity-70">Erfahre mehr</span>
              <ChevronDown 
                className="text-primary animate-pulse" 
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
