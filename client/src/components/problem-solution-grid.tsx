import { motion } from "framer-motion";

export default function ProblemSolutionGrid() {
  const problems = [
    {
      icon: "🔍",
      title: "No saben por dónde empezar",
      description: "Falta de estructura y dirección clara para su marca online"
    },
    {
      icon: "⏰",
      title: "Improvisando constantemente",
      description: "Perdiendo tiempo valioso sin procesos ni estrategia definida"
    },
    {
      icon: "📢",
      title: "Comunicación que no convierte",
      description: "Mensaje que no posiciona ni genera resultados tangibles"
    },
    {
      icon: "📈",
      title: "Competencia avanzando",
      description: "Viendo cómo otros progresan mientras se quedan estancados"
    }
  ];

  const solutions = [
    {
      icon: "🎯",
      title: "Estrategia clara y medible",
      description: "Plan adaptado a su realidad específica y objetivos"
    },
    {
      icon: "🤖",
      title: "Delegación inteligente",
      description: "Automatización técnica para enfocarse en liderar y crecer"
    },
    {
      icon: "💬",
      title: "Comunicación efectiva",
      description: "Mensaje claro que conecta con la audiencia ideal"
    },
    {
      icon: "🧘",
      title: "Crecimiento sostenible",
      description: "Negocio ordenado con paz mental y resultados consistentes"
    }
  ];

  return (
    <section className="py-24 bg-darker-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            De la <span className="text-red-400">Improvisación</span> al 
            <span className="text-gradient block mt-2">Crecimiento Estructurado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos negocios estancados en máquinas de crecimiento automatizadas y escalables.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-red-400 mb-4">😰 Antes de Sparkia Lab</h3>
              <p className="text-muted-foreground">Los desafíos que enfrentan nuestros clientes</p>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-red-500/5 border border-red-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl">{problem.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{problem.title}</h4>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-green-400 mb-4">✨ Después de Sparkia Lab</h3>
              <p className="text-muted-foreground">La transformación que experimentan</p>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-green-500/5 border border-green-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div className="text-3xl">{solution.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{solution.title}</h4>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}