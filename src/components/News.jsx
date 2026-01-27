import React from 'react';

const News = () => {
  const newsItems = [
    { text: "A" },
    { text: "B" },
    { text: "C" },
    { text: "D" },
    { text: "E" }
  ];

  return (
    <section className="py-24 isolate z-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800/50 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-2xl relative">
          <div className="absolute -bottom-10 inset-x-0 h-20 bg-primary/5 blur-3xl pointer-events-none"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-96 group">
              <img
                alt="About me"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/About-me.jpg"
                onError={(e) => {
                  // Fallback to original image if local image not found
                  e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2PKiBamoxYgc4rWUbZ7192DPVlE6l0526_jL45XQIafyfDlXR0AHqPlTqFXqXwcikwXwuB8X-UJ4-ffgD9dCUOSctiroaW-9MRmb3GnB58pxFpF7IAGXgysVU9HUrhvj4Cqu4jTPYfwXNO-B97oAdvkwSbMjIlNOHg3vg8XziHVjMbXn0PKQuY2WrvT6je0lCF2xQLErRm8lgYW59WpGixrNzjmfDEca9txbv4cPJ4RkKJ36Dc1-w8JkbKDrmr2YJWjHG6xAieQ";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">Inspiration for the journey ahead.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-extrabold mb-2">Some news about me</h2>
                <p className="text-primary font-medium italic text-sm tracking-wide">(Click to read more)</p>
              </div>
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
