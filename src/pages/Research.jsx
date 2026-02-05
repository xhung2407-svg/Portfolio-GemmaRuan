import React from 'react';
import { research } from '../data/researchData';

const Research = () => {
    return (
        <div className="max-w-[1440px] mx-auto py-16 px-8 lg:px-12 min-h-screen">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Research Projects</h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                    Exploring the intersection of technology, human behavior, and design through rigorous academic and industry research.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-12">
                {research.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 hover:shadow-2xl">
                        <div
                            className="relative h-[480px] bg-cover bg-center-top transition-transform duration-500 group-hover:scale-105"
                            style={{
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), url("${item.image}")`,
                                backgroundPosition: index === 2 ? 'center 65%' : 'center 30%'
                            }}
                        >
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="mb-6">
                                    <h3 className="text-white text-3xl font-bold leading-tight mb-3">{item.title}</h3>
                                    <p className="text-slate-200 text-base font-medium opacity-90 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold h-12 rounded-xl transition-colors flex items-center justify-center gap-2 group/btn"
                                    >
                                        <span>Read Case Study</span>
                                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
