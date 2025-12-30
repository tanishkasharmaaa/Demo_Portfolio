import { Camera, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-12"></div>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At Demo Studio, we believe every moment tells a story. Based in the
            heart of Delhi, we specialize in preserving your most
            cherished memories with creativity, passion, and unwavering care.
            Our mission is to transform fleeting moments into timeless treasures
            that you'll cherish for generations to come.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            With years of professional experience and a deep understanding of
            photography as both an art and a craft, we provide comprehensive
            photography services that capture the essence of your special
            occasions. From intimate family portraits to grand celebrations,
            we're committed to delivering exceptional results that exceed your
            expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Camera className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Professional Excellence
              </h3>
              <p className="text-gray-400">
                State-of-the-art equipment and cutting-edge techniques
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Passion & Care
              </h3>
              <p className="text-gray-400">
                Every shoot is approached with dedication and creativity
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Trusted Service
              </h3>
              <p className="text-gray-400">
                Building lasting relationships with our clients across Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
