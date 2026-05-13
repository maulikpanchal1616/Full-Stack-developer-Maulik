import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Code2 className="text-primary w-6 h-6" />
          <span className="text-lg font-bold tracking-tight">Maulik<span className="text-primary">.dev</span></span>
        </div>
        
        <p className="text-slate-500 text-sm flex items-center gap-2">
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> passion, learning, and creativity by Maulik Panchal.
        </p>
        
        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 text-center text-[10px] text-slate-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
