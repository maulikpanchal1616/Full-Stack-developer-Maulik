import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb, Target } from 'lucide-react';

const AboutEducation = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <BookOpen size={20} />
              </span>
              About Me
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a third year <span className="text-white font-semibold">BCA student</span> based in <span className="text-white font-semibold">Ahmedabad, Gujarat</span>, 
                deeply passionate about exploring the intersection of <span className="text-white font-semibold">AI, Software Engineering, and Web Technologies.</span>
              </p>
              <p>
                My journey in tech is driven by curiosity and a commitment to <span className="text-white font-semibold">practical learning</span>. 
                Currently focused on building real-world solutions that solve modern challenges.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                 {[
                   { icon: Target, title: 'Adaptable', desc: 'Quick to learn new tech' },
                   { icon: Lightbulb, title: 'Problem Solver', desc: 'Analytical mindset' }
                 ].map((item, i) => (
                   <div key={i} className="p-4 glass rounded-2xl">
                     <item.icon className="text-primary mb-2" size={24} />
                     <h4 className="font-bold text-white text-sm">{item.title}</h4>
                     <p className="text-xs">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <GraduationCap size={20} />
              </span>
              Education
            </h2>
            
            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8 sm:space-y-12">
              <div className="relative">
                <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-4 h-4 sm:w-5 h-5 rounded-full bg-primary border-4 border-dark shadow-lg shadow-primary/20" />
                <div className="glass p-5 sm:p-6 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="text-primary font-bold mb-1 text-sm">2023 — 2026 (Expected)</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-slate-400 mb-2 text-sm sm:text-base">Gujarat University</p>
                  <p className="text-xs sm:text-sm text-slate-500 italic">Focusing on Computer Science fundamentals, DBMS, OOPs, and Software Engineering.</p>
                </div>
              </div>
              
              <div className="relative opacity-60">
                 <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-4 h-4 sm:w-5 h-5 rounded-full bg-slate-600 border-4 border-dark" />
                 <div className="glass p-5 sm:p-6 rounded-2xl">
                    <div className="text-slate-500 font-bold mb-1 text-sm">Previous Education</div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-300 mb-2">Higher Secondary School</h3>
                    <p className="text-slate-500 text-sm">Science Stream</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
