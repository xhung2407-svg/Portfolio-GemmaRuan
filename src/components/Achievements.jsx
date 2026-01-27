import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Achievement",
      description: "Engaged in academic research with a focus on innovation, actively presenting research outcomes at international conferences.",
      image: "/images/Achivements.jpg",
      id: "achievements"
    },
    {
      title: "Research",
      description: "Recognized through various awards and achievements in entrepreneurship, innovation, and academic activities.",
      image: "/images/Research.jpg",
      id: "research",
      link: "/research"
    },
    {
      title: "International",
      description: "Actively contributed to international programs, achieving notable accomplishments through dedication, initiative, and meaningful engagement in cross-cultural and academic environments.",
      image: "/images/International.PNG",
      id: "international"
    },
    {
      title: "Scholarship",
      description: "Awarded multiple scholarships from both domestic and international institutions in recognition of academic excellence and sustained commitment to learning.",
      image: "/images/Scholarship.jpg",
      id: "scholarship"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden isolate z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Growth Journey</h2>
          <p className="text-3xl md:text-4xl font-serif italic text-slate-800 dark:text-slate-200">
            “Every step forward is a step toward becoming better than yesterday.”
          </p>
        </div>
        <div className="space-y-8 md:space-y-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              id={achievement.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 dark:border-slate-700 hover:border-primary/30"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={achievement.image}
                    onError={(e) => {
                      // Fallback to original image if local image not found
                      if (achievement.id === "achievements") {
                        e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCi5dawYcIxT62-PtAErWosXY8J1uEiOFEDfDL-UJ3reuiy6IJ-FQ2BUML3r2EidXy12GhplGCRHQe2thiUBPw9pns8xapcnWL4wAw2RtWLrvt6LA1AT8Wsoydo-pANHHU-KmKxiE7zd4pGUUFqeERzegYYhYzkSN87v8jLTGQmymbcWzBtvXB036UKhbT_Ho-8SI_lKpjhhDozSpCa5o606s6SWfP8oSvTDPpoW1wq1TH8Yk9O_tf_loOJaqyHGt0xcJ814X2IFgQ";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                  <a className="inline-flex items-center text-primary font-bold text-lg group-hover:underline w-fit cursor-pointer" href={achievement.link || "/achievements"}>
                    View Details
                    <span className="material-symbols-outlined text-xl ml-2 transition-transform group-hover:translate-x-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
