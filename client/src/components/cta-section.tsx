import { motion } from "framer-motion";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solo trabajamos con 3 clientes nuevos por mes para garantizar máxima calidad y atención personalizada.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-gift text-yellow-400 text-3xl mr-4"></i>
            <span className="text-2xl font-bold text-white">Oferta Especial</span>
          </div>
          <p className="text-blue-100 mb-6">
            Diagnóstico Estratégico Gratuito (valor $500) + 30% de descuento en tu primer proyecto
          </p>
          <div className="text-sm text-yellow-400 font-semibold">
            ⏰ Solo quedan 2 espacios disponibles este mes
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            onClick={scrollToContact}
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-calendar-check mr-2"></i>
            Reservar Mi Diagnóstico Gratuito
          </motion.button>
          <motion.a 
            href="tel:+573216931671"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-phone mr-2"></i>
            Llamar Ahora: +57 321 693 1671
          </motion.a>
        </motion.div>

        <motion.div 
          className="mt-8 text-blue-200 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <i className="fas fa-lock mr-2"></i>
          100% sin compromiso • Consulta confidencial • Resultados garantizados
        </motion.div>
      </div>
    </section>
  );
}
