import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-3">
      <button 
        className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700 hover:scale-110 active:scale-90 transition-all" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block text-yellow-400">light_mode</span>
      </button>
      <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all" aria-label="Chat">
        <span className="material-symbols-outlined">chat</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
