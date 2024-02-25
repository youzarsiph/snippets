import React from "react";
import { Logo } from "@/components";

const Page = () => (
  <main className="flex h-screen w-screen items-center justify-center px-4 pt-28 md:px-16 lg:px-32 xl:px-48">
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-3xl">
      <nav className="flex items-center justify-between gap-4 bg-white/50 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-xl font-semibold">Snippets</h1>
          </div>
          <ul className="flex items-center gap-4"></ul>
        </div>

        <ul className="flex items-center gap-4"></ul>
      </nav>
    </header>
    <section className="relative grid w-[40rem] grid-cols-3 gap-4 rounded-3xl p-8 shadow-xl">
      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-purple-400 to-red-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-yellow-400 to-blue-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-blue-400 to-purple-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-green-400 to-cyan-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-red-400 to-yellow-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-indigo-400 to-pink-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-cyan-400 to-indigo-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-teal-400 to-blue-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-orange-400 to-pink-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-yellow-400 to-red-500"></div>

      {/* 3 colors */}
      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-purple-400 via-blue-500 to-red-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-yellow-400 via-red-500 to-blue-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-blue-400 via-green-500 to-purple-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-green-400 via-purple-500 to-cyan-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-red-400 via-cyan-500 to-yellow-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-indigo-400 via-yellow-500 to-pink-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-cyan-400 via-pink-500 to-indigo-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-teal-400 via-indigo-500 to-blue-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-orange-400 via-blue-500 to-pink-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-red-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-purple-400 via-blue-500 to-red-500 to-yellow-400"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-yellow-400 via-red-500 to-blue-500 to-green-400"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-blue-400 via-green-500 to-pink-400 to-purple-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-green-400 via-purple-500 to-cyan-500 to-indigo-400"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-red-400 via-cyan-500 to-blue-400 to-yellow-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-indigo-400 via-yellow-500 to-pink-500 to-red-400"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-cyan-400 via-pink-500 to-indigo-500 to-purple-400"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-teal-400 via-indigo-500 to-blue-500 to-cyan-400"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-orange-400 via-blue-500 to-green-400 to-pink-500"></div>

      <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-indigo-400 to-red-500"></div>
    </section>
  </main>
);

export default Page;

{
  /* <section title="Main Content" className="grid gap-4">
      <div className="grid grid-cols-2 gap-4 rounded-xl p-8 shadow-sm">
        <div className="grid gap-4">
          <h1 className="bg-gradient-to-t from-red-500 to-orange-500 bg-clip-text text-9xl font-semibold text-transparent">
            Snippets
          </h1>
          <p className="text-xl font-semibold">
            Create beautiful images of your code snippets!
          </p>
        </div>
        <div className="grid gap-4"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-xl p-8 shadow-sm">
        <div className="grid gap-4">
          <h1 className="bg-gradient-to-t from-green-500 to-teal-500 bg-clip-text text-9xl font-semibold text-transparent">
            Snippets
          </h1>
          <p className="text-xl font-semibold">
            Create beautiful images of your code snippets!
          </p>
        </div>
        <div className="grid gap-4"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-xl p-8 shadow-sm">
        <div className="grid gap-4">
          <h1 className="bg-gradient-to-t from-violet-500 to-indigo-600 bg-clip-text text-9xl font-semibold text-transparent">
            Snippets
          </h1>
          <p className="text-xl font-semibold">
            Create beautiful images of your code snippets!
          </p>
        </div>
        <div className="grid gap-4"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-xl p-8 shadow-sm">
        <div className="grid gap-4">
          <h1 className="bg-gradient-to-t from-violet-500 to-indigo-600 bg-clip-text text-9xl font-semibold text-transparent">
            Snippets
          </h1>
          <p className="text-xl font-semibold">
            Create beautiful images of your code snippets!
          </p>
        </div>
        <div className="grid gap-4"></div>
      </div>
    </section> */
}
