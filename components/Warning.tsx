import React from "react";
import Logo from "./Logo";

const Warning = () => {
  const [display, setDisplay] = React.useState<boolean>(true);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        display ? "flex" : "hidden"
      } items-center justify-center backdrop-blur-3xl md:hidden`}
    >
      <section className="grid gap-8 rounded-3xl bg-white/75 p-12 dark:bg-stone-800/75">
        <div className="flex items-center gap-8">
          <Logo />
          <h1 className="text-3xl font-bold">Snippets</h1>
        </div>

        <p>This site is optimized for desktop</p>

        <button type="button" onClick={() => setDisplay(false)}>
          Ok
        </button>
      </section>
    </div>
  );
};

export default Warning;
