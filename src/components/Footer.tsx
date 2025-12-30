import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Demo Studio</h3>
            <p className="text-gray-400 mb-4">
              Capturing Your Moments with Art & Passion
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional photography services in Delhi. Specializing
              in weddings, events, portraits, and family photography.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-gray-400" />
                <span className="text-gray-400">Delhi, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-gray-400" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-gray-400" />
                <a
                  href="mailto:info@khalsastudio.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@khalsastudio.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center">
              Copyright © {currentYear} Demo Studio. All rights reserved. Made
              with{" "}
              <Heart size={16} className="mx-1 fill-red-500 text-red-500" /> in
              Delhi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
