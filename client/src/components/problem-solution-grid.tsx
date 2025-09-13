import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProblemSolutionGrid() {
  const { t } = useLanguage();
  const problems = [
    {
      icon: "🔍",
      title: t('problemSolution.problem1.title'),
      description: t('problemSolution.problem1.description')
    },
    {
      icon: "⏰",
      title: t('problemSolution.problem2.title'),
      description: t('problemSolution.problem2.description')
    },
    {
      icon: "📢",
      title: t('problemSolution.problem3.title'),
      description: t('problemSolution.problem3.description')
    },
    {
      icon: "📈",
      title: t('problemSolution.problem4.title'),
      description: t('problemSolution.problem4.description')
    }
  ];

  const solutions = [
    {
      icon: "🎯",
      title: t('problemSolution.solution1.title'),
      description: t('problemSolution.solution1.description')
    },
    {
      icon: "🤖",
      title: t('problemSolution.solution2.title'),
      description: t('problemSolution.solution2.description')
    },
    {
      icon: "💬",
      title: t('problemSolution.solution3.title'),
      description: t('problemSolution.solution3.description')
    },
    {
      icon: "🧘",
      title: t('problemSolution.solution4.title'),
      description: t('problemSolution.solution4.description')
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
            {t('problemSolution.title')} <span className="text-red-400">{t('problemSolution.improvisation')}</span> {t('problemSolution.to')} 
            <span className="text-gradient block mt-2">{t('problemSolution.structuredGrowth')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('problemSolution.subtitle')}
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
              <h3 className="text-3xl font-bold text-red-400 mb-4">{t('problemSolution.beforeTitle')}</h3>
              <p className="text-muted-foreground">{t('problemSolution.beforeSubtitle')}</p>
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
              <h3 className="text-3xl font-bold text-green-400 mb-4">{t('problemSolution.afterTitle')}</h3>
              <p className="text-muted-foreground">{t('problemSolution.afterSubtitle')}</p>
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