import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formspree.io/f/mgodqywk', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark/50 relative">
      {/* Success Popup */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
          >
            <div className="glass p-6 rounded-3xl border-primary/50 shadow-2xl shadow-primary/20 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <CheckCircle size={28} />
               </div>
               <div>
                  <h4 className="font-bold text-white text-lg">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">Thanks for reaching out, Maulik will get back to you soon.</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">Let's <span className="text-primary">Connect</span></h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Mail, label: 'Email', value: 'maulikvpanchal2006@gmail.com', href: 'mailto:maulikvpanchal2006@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/maulik-panchal-260621295', href: 'https://linkedin.com/in/maulik-panchal-260621295' },
                { icon: Github, label: 'GitHub', value: 'github.com/maulikpanchal1616', href: 'https://github.com/maulikpanchal1616' },
                { icon: MapPin, label: 'Location', value: 'Ahmedabad, India', href: '#' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest truncate">{item.label}</div>
                    <div className="text-white font-medium text-sm sm:text-lg truncate">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 md:p-12 rounded-[32px] sm:rounded-[40px] mt-12 lg:mt-0"
          >
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={status === 'submitting'}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={status === 'submitting'}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-all disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  disabled={status === 'submitting'}
                  rows="5" 
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center font-medium mt-2">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
