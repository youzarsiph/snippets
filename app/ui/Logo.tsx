import React from "react";

const Logo = () => (
  <div className="rounded-3xl bg-white/80 px-4 py-2 ring-1 ring-white dark:bg-stone-800/75 dark:ring-stone-900/95">
    <div className="relative h-9 w-12">
      <div className="absolute right-[43.15%] top-0 h-2 w-2 rounded-full bg-gradient-to-tr from-red-500 to-orange-500"></div>

      <div className="absolute left-0 top-0 h-6 w-2 rotate-45 rounded-full bg-gradient-to-t from-green-600 to-teal-600 shadow-2xl"></div>
      <div className="absolute bottom-0 left-0 h-6 w-2 -rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-green-600 shadow-2xl"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-10 w-2 rotate-45 rounded-full bg-gradient-to-t from-sky-500 to-fuchsia-600 shadow-2xl"></div>
      </div>

      <div className="absolute right-0 top-0 h-6 w-2 -rotate-45 rounded-full bg-gradient-to-t from-orange-500 to-fuchsia-600 shadow-2xl"></div>
      <div className="absolute bottom-0 right-0 h-6 w-2 rotate-45 rounded-full bg-gradient-to-t from-rose-600 to-orange-500 shadow-2xl"></div>

      <div className="absolute bottom-0 right-[43.15%] h-2 w-2 rounded-full bg-gradient-to-tr from-green-500 to-sky-500"></div>
    </div>
  </div>
);

export default Logo;
