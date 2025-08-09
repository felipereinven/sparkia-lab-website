import { motion } from "framer-motion";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "María González",
      company: "Fundadora, EcoVital",
      content: "En 6 meses pasamos de tener una web amateur a un sistema completamente automatizado que nos genera leads calificados 24/7. Sparkia Lab transformó completamente nuestro negocio.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Carlos Méndez",
      company: "CEO, TechStart",
      content: "La estrategia de Sparkia Lab nos ayudó a escalar de $5K a $25K mensuales en menos de un año. Su enfoque humano + IA es exactamente lo que necesitábamos.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Ana Ruiz",
      company: "Directora, CreativeLab",
      content: "Finalmente tenemos orden y estrategia. Antes improvisábamos todo, ahora tenemos sistemas que funcionan solos. ROI de 400% en el primer año.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Lo que Dicen Nuestros <span className="text-blue-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Testimonios reales de emprendedores que transformaron su negocio con nosotros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.company}`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
              <div className="absolute top-6 right-6 text-4xl text-blue-200">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
