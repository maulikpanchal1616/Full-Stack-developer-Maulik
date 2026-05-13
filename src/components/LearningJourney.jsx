import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Search, Layers, TrendingUp } from 'lucide-react';

const LearningJourney = () => {
  const steps = [
    {
      title: "Self-Learning Developer",
      desc: "Dedicated to mastering modern web stacks and software principles through independent study and documentation.",
      icon: <Search className="text-blue-400" />
    },
    {
      title: "Building Practical Projects",
      desc: "Translating theoretical knowledge into functional applications like management systems and AI tools.",
      icon: <Layers className="text-purple-400" />
    },
    {
      title: "Exploring AI & Web Tech",
      desc: "Staying ahead of trends by experimenting with LLMs, Django, and React-based architectures.",
      icon: <Zap className="text-yellow-400" />
    },
    {
      title: "Problem-Solving Mindset",
      desc: "Focusing on efficient algorithms and clean code to solve real-world digital challenges.",
      icon: <TrendingUp className="text-green-400" />
    }
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6"
          >
            <Rocket size={32} />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Learning <span className="text-primary">Journey</span></h2>
          <p className="text-slate-400 max-w-2xl">
            My evolution as a developer isn't measured in years of corporate experience, but in the depth of my projects and the speed of my learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {steps.map((step, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="p-8 rounded-[32px] glass hover:bg-white/5 transition-all"
             >
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
