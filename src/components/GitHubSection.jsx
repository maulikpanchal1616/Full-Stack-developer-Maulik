import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch, Terminal } from 'lucide-react';
import { Github } from './BrandIcons';

const GitHubSection = () => {
  const [stats, setStats] = useState({
    repos: '--',
    stars: '--',
    status: 'Fetching...'
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/maulikpanchal1616');
        const userData = await userRes.json();
        
        const reposRes = await fetch('https://api.github.com/users/maulikpanchal1616/repos?per_page=100');
        const reposData = await reposRes.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        setStats({
          repos: userData.public_repos.toString(),
          stars: totalStars.toString(),
          status: 'Active'
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setStats({ repos: '9', stars: '0', status: 'Active' });
      }
    };
    
    fetchGithubData();
  }, []);

  return (
    <section className="py-24 bg-dark/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[40px] p-8 md:p-12 relative"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/50">
                  <img src="https://avatars.githubusercontent.com/u/142482186?v=4" alt="Maulik Panchal" />
               </div>
               <div>
                  <h2 className="text-xl sm:text-2xl font-bold">@maulikpanchal1616</h2>
                  <p className="text-slate-400 text-sm sm:text-base">Open Source Contributor & Developer</p>
               </div>
            </div>
            <a 
              href="https://github.com/maulikpanchal1616" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-dark font-bold flex items-center gap-2 hover:bg-slate-200 transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Github size={20} /> View Profile
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
             {[
               { label: 'Public Repos', value: stats.repos, icon: <Terminal className="text-primary" /> },
               { label: 'Total Stars', value: stats.stars, icon: <Star className="text-yellow-400" /> },
               { label: 'Activity Status', value: stats.status, icon: <GitBranch className="text-green-400" /> }
             ].map((stat, i) => (
               <div key={i} className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center">
                  <div className="mb-3 sm:mb-4">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-black mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
               </div>
             ))}
          </div>

          {/* Real GitHub Contribution Graph */}
          <div className="hidden sm:block">
             <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-6 px-2">Contribution Activity</p>
             <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex justify-center overflow-x-auto">
                <img 
                   src="https://ghchart.rshah.org/6366f1/maulikpanchal1616" 
                   alt="Maulik Panchal's GitHub Contributions" 
                   className="min-w-[600px] sm:min-w-0 h-auto"
                />
             </div>
             <p className="text-[10px] text-slate-600 mt-4 text-center">Live data fetched from GitHub API</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
