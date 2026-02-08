import React from 'react';
import { scholarships } from '../data/scholarshipData';

const Scholarship = () => {
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
                        Scholarship
                    </h1>
                    <div className="h-1 w-16 bg-accent-gold mx-auto rounded-full"></div>
                    <p className="text-white/80 text-sm md:text-base mt-4 font-light max-w-xl mx-auto">
                        Academic excellence and recognition
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {scholarships.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        {/* Left Column: Content */}
                        <div className="flex-1 space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">
                                {item.hold}
                            </p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                {item.description}
                            </p>
                        </div>

                        {/* Right Column: Image */}
                        <div className="flex-1 w-full md:max-w-md">
                            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Scholarship;
