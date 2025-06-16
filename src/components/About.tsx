
import { Target, Eye, Heart, Star, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Über HSG Pinnau</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine starke Spielgemeinschaft aus zwei traditionsreichen Vereinen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Geschichte</h3>
            <p className="text-gray-600 mb-4">
              Die HSG Pinnau besteht seit März 2011 als Spielgemeinschaft zwischen dem 
              TSV Prisdorf und dem VfL Pinneberg. Zwei Vereine, ein Ziel: 
              Leidenschaftlicher Handball für alle Altersgruppen.
            </p>
            <p className="text-gray-600 mb-4">
              Aktuell umfasst unsere Spielgemeinschaft drei Damen- sowie drei Herren-Mannschaften. 
              Im Jugendbereich sind fast alle Altersgruppen von der A-Jugend bis zu den 
              Minis vertreten - ein lebendiger Beweis für unsere erfolgreiche Nachwuchsarbeit.
            </p>
            <p className="text-gray-600">
              Unser Erfolg basiert auf dem starken Zusammenhalt zwischen den beiden 
              Stammvereinen und der gemeinsamen Vision, Handball in der Region zu fördern 
              und dabei Werte wie Teamgeist, Fairplay und Freude am Sport zu vermitteln.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Stammvereine</h4>
                <p className="text-sm text-gray-600">TSV Prisdorf & VfL Pinneberg</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-200">
                  <Calendar className="text-yellow-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Gegründet</h4>
                <p className="text-sm text-gray-600">März 2011</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <Heart className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Werte</h4>
                <p className="text-sm text-gray-600">Teamgeist & Fairplay</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-200">
                  <Star className="text-yellow-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                <p className="text-sm text-gray-600">Handball für alle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
