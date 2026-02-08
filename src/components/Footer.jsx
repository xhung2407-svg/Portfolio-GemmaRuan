import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          // Remove revealed class when element leaves viewport to allow animation to replay
          entry.target.classList.remove('revealed');
        }
      });
    }, observerOptions);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-display font-extrabold">Nguyễn Đoàn Linh Châu</h4>
              <p className="text-slate-500 italic mt-2">"Opportunity comes only to those who are prepared."</p>
            </div>
            <div className="flex space-x-4">
              <a className="social-icon-btn w-10 h-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-facebook hover:bg-facebookDark hover:border-facebookDark" href="https://www.facebook.com/chau.linh.141331?locale=vi_VN" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a className="social-icon-btn w-10 h-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-instagram hover:bg-instagramDark hover:border-instagramDark" href="https://www.instagram.com/chlinhjuly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a className="social-icon-btn w-10 h-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-linkedin hover:bg-linkedinDark hover:border-linkedinDark" href="https://www.linkedin.com/in/linh-chau-nguyen-doan-b0208533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="/">Home</a></li>
              <li><a className="hover:text-primary transition-colors" href="https://drive.google.com/file/d/11nUeptXcNZhG7xL4B7fbhorpA8oCRDEO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact</h4>
            <div className="space-y-4">
              <a className="flex items-center space-x-3 text-slate-500 dark:text-slate-400 hover:text-primary group" href="mailto:lethuthuy.contact@gmail.com">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                <span>chaundlinh.ftu@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Ha Noi, Vietnam</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 space-y-4 md:space-y-0">
          <p>© 2026 Linh Chau Portfolio. All rights reserved.</p>
          <div className="flex space-x-8">
            <a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
