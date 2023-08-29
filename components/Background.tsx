/**
 * Logo in background
 */

import React from "react";

const Background = () => (
  <>
    <div className="fixed inset-0 -z-10 backdrop-blur-3xl"></div>
    <div className="fixed inset-0 -z-20 dark:bg-stone-950">
      <div className="absolute -top-36 right-[43.15%] h-52 w-52 animate-spin rounded-full border-[4rem] border-b-sky-400 border-l-lime-400 border-r-rose-500 border-t-fuchsia-500"></div>
      <div className="relative h-full w-full animate-pulse">
        <div className="absolute -top-20 left-44 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-green-600 to-teal-600 shadow-2xl"></div>
        <div className="absolute -bottom-20 left-44 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-green-600 shadow-2xl"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[66rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-sky-500 to-fuchsia-600 shadow-2xl"></div>
        </div>

        <div className="absolute -top-20 right-44 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-orange-500 to-fuchsia-600 shadow-2xl"></div>
        <div className="absolute -bottom-20 right-44 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-rose-600 to-orange-500 shadow-2xl"></div>
      </div>
      <div className="absolute -bottom-36 right-[43.15%] h-52 w-52 animate-spin rounded-full border-[4rem] border-b-orange-500 border-l-red-500 border-r-blue-500 border-t-green-500"></div>
    </div>
  </>
);

export default Background;
