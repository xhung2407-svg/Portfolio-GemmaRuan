import React from 'react';
import { research } from '../data/researchData';

const Research = () => {
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
                        Research Projects
                    </h1>
                    <div className="h-1 w-16 bg-accent-gold mx-auto rounded-full"></div>
                    <p className="text-white/80 text-sm md:text-base mt-4 font-light max-w-xl mx-auto">
                        Exploring the intersection of technology, human behavior, and design through rigorous academic and industry research.
                    </p>
                </div>
            </section>

            <div className="max-w-[1440px] mx-auto py-16 px-8 lg:px-12 grid grid-cols-1 gap-12">
                {research.map((item, index) => (
                    <ResearchItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const ResearchItem = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Helper to extract first sentence
    const getTruncatedDescription = (text) => {
        const dotIndex = text.indexOf('. ');
        if (dotIndex === -1) return text;
        return text.substring(0, dotIndex + 1);
    };

    const fullDescription = item.description;
    const truncatedDescription = getTruncatedDescription(fullDescription);
    const hasMore = fullDescription.length > truncatedDescription.length;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 hover:shadow-2xl">
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
                            {isExpanded ? fullDescription : truncatedDescription}
                            {hasMore && (
                                <span
                                    className="text-accent-gold ml-2 cursor-pointer hover:underline font-bold whitespace-nowrap"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsExpanded(!isExpanded);
                                    }}
                                >
                                    {isExpanded ? "Show Less" : "Read more"}
                                </span>
                            )}
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
    );
};

export default Research;
