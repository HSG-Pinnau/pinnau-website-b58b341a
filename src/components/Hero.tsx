
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/bf51c967-183e-4af8-a13d-0f2057a13892.png" 
              alt="HSG Pinnau Logo" 
              className="h-32 w-auto animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            HSG <span className="text-blue-600">Pinnau</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Leidenschaft für Handball seit 2011
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-in">
            Die Spielgemeinschaft aus TSV Prisdorf und VfL Pinneberg - 
            Drei Damen- und drei Herren-Mannschaften sowie Jugendteams von A-Jugend bis zu den Minis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105">
              Mehr erfahren
              <ArrowRight size={20} />
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Kontakt
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-500">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
              <p className="text-gray-600">Mannschaften</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-yellow-500">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Award className="text-yellow-600" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">13+</h3>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-500">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2</h3>
              <p className="text-gray-600">Stammvereine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
