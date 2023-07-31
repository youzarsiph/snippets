import React from "react";

const Logo = () => (
  <div className="rounded-3xl bg-white/60 px-4 py-2 ring-1 ring-white/95 dark:bg-stone-800/60 dark:ring-stone-900/95">
    <div className="relative h-9 w-16">
      <div className="absolute left-0 top-0 h-6 w-2 rotate-45 rounded-full bg-gradient-to-t from-violet-600 to-indigo-600"></div>

      <div className="absolute bottom-0 right-0 h-6 w-2 rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-blue-700"></div>

      <div className="absolute right-0 top-0 h-6 w-2 -rotate-45 rounded-full bg-gradient-to-t from-sky-500 to-fuchsia-600"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-2 rotate-[30deg] rounded-full bg-gradient-to-t from-orange-500 to-teal-600"></div>
      </div>

      <div className="absolute bottom-0 left-0 h-6 w-2 -rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-green-600"></div>
    </div>
  </div>
);

export default Logo;
