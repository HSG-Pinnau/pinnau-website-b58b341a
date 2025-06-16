
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            HSG <span className="text-blue-600">Pinnau</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Excellence in Education, Innovation in Learning
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-in">
            Empowering students to reach their full potential through comprehensive education, 
            community engagement, and innovative learning approaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105">
              Learn More
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Award className="text-purple-600" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Calendar className="text-green-600" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Annual Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
