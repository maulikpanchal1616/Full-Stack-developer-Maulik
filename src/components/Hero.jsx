import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Code2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-gradient">Maulik Panchal</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium mb-4 sm:mb-6">
            BCA Student | Aspiring Software Developer | Python & AI Enthusiast
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 max-w-xl leading-relaxed">
            Passionate about software development, AI, and building real-world digital solutions 
            through continuous learning and practical projects.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 w-full sm:w-auto"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass font-bold flex items-center justify-center gap-2 hover:bg-white/10 w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/ATS%20Maulik%20Resume.pdf"
              download="Maulik_Panchal_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-white/10 font-bold flex items-center justify-center gap-2 hover:bg-white/5 w-full sm:w-auto"
            >
              <Download size={20} /> Resume
            </motion.a>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/maulikpanchal1616' },
              { icon: Linkedin, href: 'https://linkedin.com/in/maulik-panchal-260621295' },
              { icon: Mail, href: 'mailto:maulikvpanchal2006@gmail.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, color: '#6366f1' }}
                className="text-slate-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-[400px] h-[400px] mx-auto rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 z-0" />
             {/* Placeholder for Profile - Will use a realistic avatar style */}
             <div className="w-full h-full flex items-center justify-center bg-dark-lighter">
                <div className="text-primary opacity-20 transform -rotate-12">
                   <Code2 size={200} />
                </div>
             </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-5 p-4 glass rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">JS</div>
              <div>
                <div className="text-xs text-slate-400">Development</div>
                <div className="text-sm font-bold">JavaScript / React</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-10 p-4 glass rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">Py</div>
              <div>
                <div className="text-xs text-slate-400">Intelligence</div>
                <div className="text-sm font-bold">Python with AI</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
