import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';

const Layout = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <DarkModeToggle />
    </div>
  );
};

export default Layout;
