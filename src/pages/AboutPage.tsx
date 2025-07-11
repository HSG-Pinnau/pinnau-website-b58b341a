import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Über uns
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Lernen Sie die HSG Pinnau kennen
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Geschichte</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-6">
                    Die HSG Pinnau ist ein traditionsreicher Handballverein im Herzen Schleswig-Holsteins. 
                    Seit unserer Gründung haben wir uns zu einem der führenden Handballvereine der Region entwickelt 
                    und bieten Handball für alle Altersklassen - von den Minis bis zu den Erwachsenen.
                  </p>
                  <p className="mb-6">
                    Unser Verein steht für Teamgeist, Fairplay und sportliche Exzellenz. Wir fördern nicht nur 
                    die sportliche Entwicklung unserer Mitglieder, sondern auch ihre persönliche Entwicklung 
                    und den Zusammenhalt in der Gemeinschaft.
                  </p>
                  <p>
                    Mit modernen Trainingsmethoden, erfahrenen Trainern und einer starken Vereinsgemeinschaft 
                    schaffen wir optimale Bedingungen für alle, die Handball lieben - egal ob Anfänger oder Profi.
                  </p>
                </div>
              </div>

              {/* Vorstand Section */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Vorstand</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">1. Vorsitzender</h3>
                    <p className="font-medium text-gray-900">Marco Bretz</p>
                    <a href="mailto:marco@hsg-pinnau.de" className="text-blue-600 hover:text-blue-800">
                      marco@hsg-pinnau.de
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">2. Vorsitzender</h3>
                    <p className="font-medium text-gray-900">Dominik Stolz</p>
                    <a href="mailto:dominik@hsg-pinnau.de" className="text-blue-600 hover:text-blue-800">
                      dominik@hsg-pinnau.de
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Spielwart Erwachsene</h3>
                    <p className="font-medium text-gray-900">Dominik Stolz</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Spielwartin Jugend</h3>
                    <p className="font-medium text-gray-900">Lisa Moritz</p>
                    <a href="mailto:lisa@hsg-pinnau.de" className="text-blue-600 hover:text-blue-800">
                      lisa@hsg-pinnau.de
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Kassenwartin</h3>
                    <p className="font-medium text-gray-900">Vera da Graca</p>
                    <a href="mailto:vera@hsg-pinnau.de" className="text-blue-600 hover:text-blue-800">
                      vera@hsg-pinnau.de
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Pressewartin / Social Media</h3>
                    <p className="font-medium text-gray-900">Julia Festersen</p>
                    <a href="mailto:julia@hsg-pinnau.de" className="text-blue-600 hover:text-blue-800">
                      julia@hsg-pinnau.de
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Weitere Unterstützung erhalten wir durch:</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Protokollführer</h4>
                      <p className="text-gray-900">Mario da Graca</p>
                      <a href="mailto:mario@hsg-pinnau.de" className="text-sm text-blue-600 hover:text-blue-800">
                        mario@hsg-pinnau.de
                      </a>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Beisitz</h4>
                      <p className="text-gray-900">Sven Dreher</p>
                      <a href="mailto:sven@hsg-pinnau.de" className="text-sm text-blue-600 hover:text-blue-800">
                        sven@hsg-pinnau.de
                      </a>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Beisitz</h4>
                      <p className="text-gray-900">Julia Festersen</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Beisitz</h4>
                      <p className="text-gray-900">Laura Schneider</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Beisitz</h4>
                      <p className="text-gray-900">Philipp Kunau</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Schiedsrichterwart</h4>
                      <p className="text-gray-900">Marco Bretz</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Mitgliederverwaltung</h4>
                      <p className="text-gray-900">Sven Dreher</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Passverwaltung</h4>
                      <p className="text-gray-900">Julia Festersen</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">IT Admin</h4>
                      <p className="text-gray-900">Julia Festersen</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Homepage</h4>
                      <p className="text-gray-900">Julia Festersen, Sven Dreher, Mario da Graca, Dominik Stolz</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-1">Eventplanung</h4>
                      <p className="text-gray-900">Lisa Moritz, Julia Festersen</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Allgemeine Anfragen gerne an:</p>
                  <a 
                    href="mailto:vorstand@hsg-pinnau.de" 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    vorstand@hsg-pinnau.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;