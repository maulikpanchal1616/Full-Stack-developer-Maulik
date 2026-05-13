import React from 'react';
import { motion } from 'framer-motion';
import { Box, Sparkles, ShoppingCart, Video } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const projects = [
    {
      title: "Garage Management System",
      desc: "A comprehensive management system for garage operations, customer records, and service workflows.",
      tech: ["Python", "MySQL", "Tkinter"],
      icon: <Box className="text-orange-400" />,
      github: "https://github.com/maulikpanchal1616/AUTO-ELITE-GARAGE",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Scholar AI",
      desc: "AI-powered educational platform focused on intelligent assistance and smarter learning tools. (In Progress)",
      tech: ["React", "Django", "AI/ML"],
      icon: <Sparkles className="text-blue-400" />,
      github: "https://github.com/maulikpanchal1616/Scholar-AI",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Khanipini – Online Food Store",
      desc: "Full-stack online marketplace where vendors manage products and customers order food seamlessly.",
      tech: ["React", "Node.js", "Prisma", "UPI Integration"],
      icon: <ShoppingCart className="text-green-400" />,
      github: "https://github.com/maulikpanchal1616/PANIPURI.COM",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Video Editor Portfolio",
      desc: "A modern, high-performance portfolio website for creative professionals to showcase video work.",
      tech: ["React", "Tailwind", "Framer Motion"],
      icon: <Video className="text-red-400" />,
      github: "https://github.com/maulikpanchal1616/HET-MAHAVAR",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Practical projects built with modern tech stacks and a focus on solving real-world problems.
          </p>
        </div>
        <div className="p-4 glass rounded-2xl text-xs sm:text-sm italic text-slate-500 border-l-4 border-primary self-start md:self-end">
          Developed using practical learning & tools including Antigravity.
        </div>
      </div>

      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group glass rounded-[32px] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500"
          >
            <div className="relative h-48 sm:h-64 overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
               <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glass flex items-center justify-center">
                 {project.icon}
               </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="px-6 py-3 rounded-xl glass hover:bg-primary hover:text-white flex items-center gap-2 transition-all text-sm font-bold shadow-lg shadow-primary/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} /> View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
