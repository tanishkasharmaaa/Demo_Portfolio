import { Heart, Users, Camera, Home, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with stunning wedding photography that tells your unique love story. From intimate moments to grand celebrations.',
      image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Sparkles,
      title: 'Event Photography',
      description: 'Professional coverage of corporate events, parties, and celebrations. We ensure every important moment is beautifully documented.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Camera,
      title: 'Portrait Photography',
      description: 'Individual and professional portrait sessions that showcase your personality and style with artistic flair and technical precision.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Family Shoots',
      description: 'Create lasting memories with your loved ones. Our family photography captures the warmth and connection of your family bonds.',
      image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Studio Sessions',
      description: 'Professional studio photography with controlled lighting and backdrop options for perfect portraits, products, and creative shoots.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive photography services tailored to capture your most precious moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
