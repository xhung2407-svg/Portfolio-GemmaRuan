import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    // Check if we're on the home page
    if (location.pathname === '/') {
      // On homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Not on homepage - check if there's a dedicated page for this section
      if (sectionId === 'achievements') {
        navigate('/achievements');
        window.scrollTo(0, 0);
      } else if (sectionId === 'research') {
        navigate('/research');
        window.scrollTo(0, 0);
      } else if (sectionId === 'international') {
        navigate('/international');
        window.scrollTo(0, 0);
      } else {
        // For sections without dedicated pages (scholarship), go to homepage and scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark/95 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">L</div>
              <span className="font-display font-extrabold text-xl tracking-tight hidden lg:block">Linh Chau</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4 md:space-x-8">
            <a
              className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleNavigation(e, 'achievements')}
            >
              Achievements
            </a>
            <a
              className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleNavigation(e, 'research')}
            >
              Research
            </a>
            <a
              className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleNavigation(e, 'international')}
            >
              International
            </a>
            <a
              className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleNavigation(e, 'scholarship')}
            >
              Scholarship
            </a>
          </nav>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-3 border-r border-slate-200 dark:border-slate-700 pr-4">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
