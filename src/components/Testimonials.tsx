import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Rajesh Sharma",
      role: "Wedding Client",
      rating: 5,
      text: "Demo Studio made our wedding day even more special! They captured every emotion beautifully. The photos are stunning and we couldn't be happier with their professionalism and creativity.",
      image:
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Amit Singh",
      role: "Corporate Event",
      rating: 5,
      text: "Outstanding service! They covered our company's annual event with great attention to detail. The quality of work and timely delivery exceeded our expectations. Highly recommended!",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Neha Kapoor",
      role: "Family Portrait",
      rating: 5,
      text: "Such a wonderful experience! The team made our family feel comfortable and relaxed. The portraits came out absolutely perfect. Thank you for capturing our family memories so beautifully!",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Vikram Malhotra",
      role: "Portrait Session",
      rating: 5,
      text: "Professional, creative, and friendly! Demo Studio delivered exceptional portraits that perfectly captured my personality. The studio setup was impressive and the results were beyond amazing.",
      image:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Sunita & Ramesh Gupta",
      role: "Anniversary Shoot",
      rating: 5,
      text: "We celebrated our 25th anniversary with a photo shoot at Demo Studio. The team was incredibly patient and creative. The photos are treasured memories we'll cherish forever!",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Rohit Verma",
      role: "Event Coverage",
      rating: 5,
      text: "Excellent work capturing our product launch event! Every important moment was documented beautifully. Professional team with great eye for detail. Will definitely hire again!",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-600"
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with Demo
            Studio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg transform hover:-translate-y-2 transition-all duration-300 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-700" />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <p className="text-gray-300 mt-4 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
