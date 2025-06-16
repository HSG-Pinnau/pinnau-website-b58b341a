
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Annual Science Fair Winners Announced",
      excerpt: "Congratulations to all participants in this year's science fair. Outstanding innovations in sustainability and technology were showcased.",
      date: "2024-06-10",
      category: "Academics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "New Arts Wing Opens This Fall",
      excerpt: "State-of-the-art facilities for visual arts, music, and performing arts will provide students with enhanced creative spaces.",
      date: "2024-06-05",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop"
    },
    {
      title: "International Exchange Program Expansion",
      excerpt: "New partnerships with schools in Europe and Asia will offer more opportunities for cultural exchange and global learning.",
      date: "2024-05-28",
      category: "International",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at HSG Pinnau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(item.date)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors duration-200">
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
