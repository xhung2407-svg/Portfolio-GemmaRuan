import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 hero-gradient isolate z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span>Available for collaboration</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1]">
              Hello, <br /><span className="text-primary italic">I'm Linh Chau.</span>
            </h1>
            <div className="space-y-4 max-w-xl">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                You can know me as <strong className="text-slate-900 dark:text-white">Gemma Ruan</strong>, and I am currently an undergraduate student at Foreign Trade University, majoring in Business Chinese and International Business, with a strong interest in academic development and international engagement.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I am driven by continuous challenges, the pursuit of opportunities, and personal growth.
              </p>
              <div className="pt-4 border-l-4 border-slate-100 dark:border-slate-800 pl-6 italic text-slate-500 dark:text-slate-500 font-serif text-xl">
                "Opportunities don’t happen. You create them."
                <span className="block text-sm font-sans font-bold mt-2 not-italic text-slate-400 uppercase tracking-widest">— Chris Grosser</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-900/30 flex items-center justify-center space-x-2 hover:-translate-y-1 transition-transform w-fit">
                <span>Feel Free To Connect With Me!</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <div className="flex items-center space-x-4 pl-1">
                <a className="social-icon-btn w-10 h-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-facebook hover:bg-facebookDark hover:border-facebookDark" href="https://www.facebook.com/chau.linh.141331?locale=vi_VN" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a className="social-icon-btn w-10 h-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-instagram hover:bg-instagramDark hover:border-instagramDark" href="https://www.instagram.com/chlinhjuly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a className="social-icon-btn w-10 h-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-linkedin hover:bg-linkedinDark hover:border-linkedinDark" href="https://www.linkedin.com/in/linh-chau-nguyen-doan-b0208533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-[2.5rem] -rotate-3 transition-transform group-hover:rotate-0"></div>
            <img
              alt="Portrait"
              className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-2xl z-10"
              src="/images/CV.jpg"
              onError={(e) => {
                // Fallback to original image if local image not found
                e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAtXuSmWHERTWSEsGuFG8PE_MUVHCmsSblYs9RYcn3JYR0gMmF75PBLuoD9WxB_Hr8sZtRFB1zypIg7xFH2oHGq6dPC4VeqENKHrsqSieM9NOUNB7CsGWAJveInW8o1x9OVvpOQlPyAcqkncWrIdzUvYzXbLhglbDftTbG4zKEZVgI1smzRGp44freCbPxFb2bHe4u20tisrOLsP4GNQz1Jvu1eGwPchjWwt4JA6Ra6zIvJS3RNoODLdjXkJHxGUEoMn4uvC_WpHKo";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
