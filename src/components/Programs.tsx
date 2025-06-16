
import { BookOpen, Users, Globe, Microscope, Palette, Music } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed to challenge and inspire students across all disciplines.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "International Programs",
      description: "Global perspectives through exchange programs and international partnerships.",
      color: "green"
    },
    {
      icon: Microscope,
      title: "STEM Innovation",
      description: "Cutting-edge science, technology, engineering, and mathematics programs.",
      color: "purple"
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Fostering artistic expression through visual arts, drama, and creative writing.",
      color: "pink"
    },
    {
      icon: Music,
      title: "Music & Performance",
      description: "Comprehensive music education from beginner to advanced performance levels.",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Building character through meaningful community engagement and service learning.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to nurture every aspect of student development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(program.color)}`}>
                  <program.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{program.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
