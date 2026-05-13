import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark bg-grid opacity-20" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse delay-700" />
    </div>
  );
};

export default Background;
