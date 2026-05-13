import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="text-blue-400" />,
      skills: ['Python', 'Java', 'JavaScript', 'C', 'C++']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="text-green-400" />,
      skills: ['HTML', 'CSS', 'React', 'Django', 'Tailwind CSS']
    },
    {
      title: 'Databases',
      icon: <Database className="text-yellow-400" />,
      skills: ['MySQL', 'SQL']
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings className="text-purple-400" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Android Studio']
    },
    {
      title: 'Core Concepts',
      icon: <Cpu className="text-red-400" />,
      skills: ['OOP', 'DBMS', 'APIs', 'Data Structures']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-dark/50">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to bring digital ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[32px] hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-left">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
