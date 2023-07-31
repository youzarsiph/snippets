import React from "react";

const Background = () => (
  <>
    <div className="fixed inset-0 -z-10 backdrop-blur-3xl"></div>
    <div className="fixed inset-0 -z-20 dark:bg-stone-950">
      <div className="relative h-full w-full animate-pulse">
        <div className="absolute -left-4 -top-16 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-violet-600 to-indigo-600"></div>

        <div className="absolute -bottom-16 -right-4 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-blue-700"></div>

        <div className="absolute -right-4 -top-16 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-sky-500 to-fuchsia-600"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[80rem] w-48 rotate-[30deg] rounded-full bg-gradient-to-t from-orange-500 to-teal-600"></div>
        </div>

        <div className="absolute -bottom-16 -left-4 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-green-600"></div>
      </div>
    </div>
  </>
);

export default Background;
