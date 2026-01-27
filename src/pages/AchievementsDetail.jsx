import React from 'react';

import { achievements } from '../data/achievementsData';

const AchievementsDetail = () => {

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4">Achievements</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">A comprehensive list of my achievements and recognitions</p>
        </div>

        <div className="flex flex-col gap-1">
          {/* Year Section */}


          {/* Achievement Items */}
          {achievements.slice(0, 2).map((achievement, index) => (
            <div key={index} className="flex gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-6 py-5 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-contain rounded-xl size-[80px] shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm bg-white"
                  style={{ backgroundImage: `url("${achievement.image}")` }}
                ></div>
                <div className="flex flex-1 flex-col justify-start pt-1">
                  <p className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-2">{achievement.title}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">{achievement.description}</p>
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors flex size-7 items-center justify-center"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          ))}

          {/* Year Section */}

          {/* Achievement Items */}
          {achievements.slice(2).map((achievement, index) => (
            <div key={index + 2} className="flex gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-6 py-5 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-contain rounded-xl size-[80px] shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm bg-white"
                  style={{ backgroundImage: `url("${achievement.image}")` }}
                ></div>
                <div className="flex flex-1 flex-col justify-start pt-1">
                  <p className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-2">{achievement.title}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">{achievement.description}</p>
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors flex size-7 items-center justify-center"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsDetail;
