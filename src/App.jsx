import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stagger: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative text-slate-200">
      {/* Custom Mouse Glow */}
      <div 
        className="fixed w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0 transition-transform duration-300 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <AboutEducation />
        <Skills />
        <Projects />
        <LearningJourney />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
