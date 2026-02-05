import React from 'react';
import { summerPrograms, academicExchange, chineseBridge, youthLeadership, caseCompetitions } from '../data/internationalData';

const International = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="relative bg-primary dark:bg-slate-900 py-16 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-8" style={{
                    backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDEmKUFzcdQ_FM4gzLpWkQJGZz2Sl9gudyk41KThcj9wAZuYy-BPqNDomKrPlR5OvHk0V4cl2iNDBaHvyPn9w6qiizH4TdWbVu_3clu7I1qQIJOF3TVovs6ZY_UXMUboNACFUEPQn2c0QPHnXSRk9Rk973RnDVbPsrBWnmDHx8yeq8xyBZ6NN8NhL3cn-5uede4kSPzopbsJ8s_iIrLjxosmrKuKQ2NGjSnVa230BPqD9xZ6Y9OVBNj79zfvt6VsBNRMOPvdatB_dI)',
                    backgroundSize: 'cover',
                    opacity: 0.08,
                    pointerEvents: 'none'
                }}></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2">
                        International Programs <br className="md:hidden" />& Global Engagement
                    </h1>
                    <div className="h-1 w-16 bg-accent-gold mx-auto rounded-full"></div>
                    <p className="text-white/80 text-sm md:text-base mt-4 font-light max-w-xl mx-auto">
                        Advancing global perspectives through academic excellence and cross-cultural leadership.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10 md:space-y-12">
                {/* Summer & Academic Programs */}
                <section id="summer-programs">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="p-2 bg-accent-gold/10 rounded-lg">
                            <span className="material-symbols-outlined text-accent-gold">school</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-primary dark:text-white">Summer & Academic Programs</h2>
                    </div>
                    <div className="space-y-4">
                        {summerPrograms.map((program, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                <p className="text-accent-gold text-xs font-semibold uppercase tracking-widest mb-1">{program.period}</p>
                                <h3 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">{program.title}</h3>
                                <p className="text-primary dark:text-blue-400 text-sm font-medium mb-3">{program.subtitle}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {program.description}
                                </p>
                                <a
                                    href={program.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2 border border-accent-gold text-accent-gold rounded-lg text-sm font-semibold hover:bg-accent-gold hover:text-white transition-colors flex items-center justify-center"
                                >
                                    View Details
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Academic Exchange */}
                <section id="exchange-diplomacy">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="p-2 bg-accent-gold/10 rounded-lg">
                            <span className="material-symbols-outlined text-accent-gold">public</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-primary dark:text-white">Academic Exchange</h2>
                    </div>
                    <div className="space-y-4">
                        {academicExchange.map((exchange, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                <p className="text-accent-gold text-xs font-semibold uppercase tracking-widest mb-1">{exchange.period}</p>
                                <h3 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">{exchange.title}</h3>
                                <p className="text-primary dark:text-blue-400 text-sm font-medium mb-3">{exchange.subtitle}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {exchange.description}
                                </p>
                                <a
                                    href={exchange.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2 border border-accent-gold text-accent-gold rounded-lg text-sm font-semibold hover:bg-accent-gold hover:text-white transition-colors flex items-center justify-center"
                                >
                                    View Details
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Chinese Bridge */}
                <section id="chinese-bridge">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="p-2 bg-accent-gold/10 rounded-lg">
                            <span className="material-symbols-outlined text-accent-gold">air</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-primary dark:text-white">Chinese Bridge</h2>
                    </div>
                    <div className="space-y-4">
                        {chineseBridge.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                <p className="text-accent-gold text-xs font-semibold uppercase tracking-widest mb-1">{item.period}</p>
                                <h3 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="text-primary dark:text-blue-400 text-sm font-medium mb-3">{item.subtitle}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2 border border-accent-gold text-accent-gold rounded-lg text-sm font-semibold hover:bg-accent-gold hover:text-white transition-colors flex items-center justify-center"
                                >
                                    View Details
                                </a>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Youth Leadership */}
                <section id="youth-leadership">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="p-2 bg-accent-gold/10 rounded-lg">
                            <span className="material-symbols-outlined text-accent-gold">stars</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-primary dark:text-white">Youth Leadership</h2>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                        <p className="text-accent-gold text-xs font-semibold uppercase tracking-widest mb-1">{youthLeadership.period}</p>
                        <h3 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">{youthLeadership.title}</h3>
                        <p className="text-primary dark:text-blue-400 text-sm font-medium mb-3">{youthLeadership.subtitle}</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                            {youthLeadership.description}
                        </p>
                        <a
                            href={youthLeadership.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 border border-accent-gold text-accent-gold rounded-lg text-sm font-semibold hover:bg-accent-gold hover:text-white transition-colors flex items-center justify-center"
                        >
                            View Impact Report
                        </a>
                    </div>
                </section>

                {/* Case Competition & Research */}
                <section className="pb-10" id="case-competitions">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="p-2 bg-accent-gold/10 rounded-lg">
                            <span className="material-symbols-outlined text-accent-gold">bar_chart</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-primary dark:text-white">Case Competition & Research</h2>
                    </div>
                    <div className="space-y-4">
                        {caseCompetitions.map((competition, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                <p className="text-accent-gold text-xs font-semibold uppercase tracking-widest mb-1">{competition.period}</p>
                                <h3 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">{competition.title}</h3>
                                <p className="text-primary dark:text-blue-400 text-sm font-medium mb-3">{competition.subtitle}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {competition.description}
                                </p>
                                <a
                                    href={competition.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2 border border-accent-gold text-accent-gold rounded-lg text-sm font-semibold hover:bg-accent-gold hover:text-white transition-colors flex items-center justify-center"
                                >
                                    {index === 0 ? 'View Project' : 'Read Abstract'}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default International;
