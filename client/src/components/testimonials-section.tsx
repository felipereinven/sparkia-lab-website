import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      company: "EcoVital",
      role: "Fundadora",
      content: "En 6 meses pasamos de $5K a $25K mensuales. Sparkia Lab transformó completamente nuestro negocio con su estrategia de automatización y IA. Su enfoque humano marca la diferencia.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      results: "+400% crecimiento",
      rating: 5
    },
    {
      name: "Carlos Méndez",
      company: "TechStart",
      role: "CEO",
      content: "La automatización que implementaron nos permitió escalar sin perder la calidad. Ahora tenemos sistemas que trabajan 24/7 generando leads calificados. ROI espectacular.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      results: "ROI 350%",
      rating: 5
    },
    {
      name: "Ana Ruiz",
      company: "CreativeLab",
      role: "Directora",
      content: "Finalmente tenemos orden y estrategia. Antes improvisábamos todo, ahora tenemos sistemas que funcionan solos. La paz mental que nos dieron no tiene precio.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      results: "Automatización 98%",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-darker-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que Dicen Nuestros 
            <span className="text-gradient block mt-2">Clientes Transformados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de emprendedores que revolucionaron su negocio con nuestras estrategias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-modern p-8 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">
                "
              </div>

              {/* Profile */}
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.company}`}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 mr-4"
                />
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}, {testimonial.company}</div>
                  
                  {/* Rating */}
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* Results Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                📈 {testimonial.results}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser el próximo caso de éxito?</h3>
            <p className="text-muted-foreground mb-6">
              Únete a emprendedores que ya transformaron su negocio con nuestras estrategias.
            </p>
            <button className="btn-primary px-8 py-4 rounded-full font-semibold">
              Solicitar Mi Transformación
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}