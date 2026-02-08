import React from 'react';
import { summerPrograms, academicExchange, chineseBridge, youthLeadership, caseCompetitions } from '../data/internationalData';

const ProgramCard = ({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
            {/* Text Section */}
            <div className="flex-1 space-y-3 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white leading-tight">
                    {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 md:text-lg leading-relaxed">
                    {item.description}
                </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

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
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                {/* Summer & Academic Programs */}
                <section id="summer-programs" className="space-y-10">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="p-2.5 bg-accent-gold/10 rounded-xl">
                            <span className="material-symbols-outlined text-accent-gold text-3xl">school</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">Summer & Academic Programs</h2>
                    </div>
                    <div className="space-y-16">
                        {summerPrograms.map((program, index) => (
                            <ProgramCard key={index} item={program} index={index} />
                        ))}
                    </div>
                </section>

                {/* Academic Exchange */}
                <section id="exchange-diplomacy" className="space-y-10">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="p-2.5 bg-accent-gold/10 rounded-xl">
                            <span className="material-symbols-outlined text-accent-gold text-3xl">public</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">Academic Exchange</h2>
                    </div>
                    <div className="space-y-16">
                        {academicExchange.map((exchange, index) => (
                            <ProgramCard key={index} item={exchange} index={index} />
                        ))}
                    </div>
                </section>

                {/* Chinese Bridge */}
                <section id="chinese-bridge" className="space-y-10">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="p-2.5 bg-accent-gold/10 rounded-xl">
                            <span className="material-symbols-outlined text-accent-gold text-3xl">air</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">Chinese Bridge</h2>
                    </div>
                    <div className="space-y-16">
                        {chineseBridge.map((item, index) => (
                            <ProgramCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </section>

                {/* Youth Leadership */}
                <section id="youth-leadership" className="space-y-10">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="p-2.5 bg-accent-gold/10 rounded-xl">
                            <span className="material-symbols-outlined text-accent-gold text-3xl">stars</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">Youth Leadership</h2>
                    </div>
                    <div className="space-y-16">
                        <ProgramCard item={youthLeadership} index={0} />
                    </div>
                </section>

                {/* Case Competition & Research */}
                <section id="case-competitions" className="space-y-10 pb-8">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="p-2.5 bg-accent-gold/10 rounded-xl">
                            <span className="material-symbols-outlined text-accent-gold text-3xl">bar_chart</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">Case Competition & Research</h2>
                    </div>
                    <div className="space-y-16">
                        {caseCompetitions.map((competition, index) => (
                            <ProgramCard key={index} item={competition} index={index} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default International;
