
import { Target, Eye, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About HSG Pinnau</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to fostering academic excellence, personal growth, and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              For over two decades, HSG Pinnau has been at the forefront of educational innovation, 
              providing students with comprehensive learning experiences that prepare them for success 
              in an ever-changing world.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence extends beyond academics to include character development, 
              critical thinking, and community service. We believe in nurturing well-rounded individuals 
              who will become tomorrow's leaders.
            </p>
            <p className="text-gray-600">
              Through our diverse programs, dedicated faculty, and strong community partnerships, 
              we continue to set new standards in education while maintaining our core values of 
              integrity, innovation, and inclusivity.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                <p className="text-sm text-gray-600">Excellence in education</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                <p className="text-sm text-gray-600">Future leaders</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-green-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Values</h4>
                <p className="text-sm text-gray-600">Integrity & care</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-orange-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality</h4>
                <p className="text-sm text-gray-600">Highest standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
