import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            De la Improvisación al <span className="text-blue-600">Crecimiento Estructurado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos negocios que están estancados en negocios que crecen de forma sostenible y automatizada.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-4">😰 Antes de Sparkia Lab</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  No saben por dónde empezar ni cómo estructurar su marca online
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  Sienten que están solos, improvisando y perdiendo tiempo valioso
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  Su comunicación no posiciona ni convierte
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
                  Ven a su competencia avanzar mientras ellos están estancados
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">✨ Después de Sparkia Lab</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  Tienen una estrategia clara, medible y adaptada a su realidad
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  Delegan la parte técnica mientras se enfocan en liderar y crecer
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  Comunican con claridad y conectan con su audiencia ideal
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  Viven su negocio con más orden, paz mental y resultados sostenibles
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
