"use client";

import React from "react";
import hljs from "highlight.js";
import { toSvg, toPng, toJpeg } from "html-to-image";
import {
  ArrowsPointingOutIcon,
  Bars2Icon,
  DocumentArrowDownIcon,
  MoonIcon,
  SunIcon,
  SwatchIcon,
  UserMinusIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "../styles/Home.module.css";
import {
  Account,
  Background,
  Constants,
  Logo,
  Snippet,
  Warning,
} from "@/components";

const Home = () => {
  // Theme
  const [theme, setTheme] = React.useState<boolean>(false);
  const [codeTheme, setCodeTheme] = React.useState<string>("github-dark");

  // Account info
  const [displayAccount, setDisplayAccount] = React.useState<boolean>(true);

  // Container Size
  const [size, setSize] = React.useState<{
    name: string;
    value: { width: number | string; height: number | string };
  }>({
    name: "Auto",
    value: {
      width: "max-content",
      height: "max-content",
    },
  });

  // Background color
  const [type, setType] = React.useState<{ name: string; value: string }>({
    name: "linear",
    value: "bg-gradient-to-tr",
  });
  const [bg, setBg] = React.useState<string>(
    Constants.container.bg.colors.light[0]
  );
  const [direction, setDirection] = React.useState<string>(
    Constants.container.bg.directions[0].value
  );

  // Export file format
  const [format, setFormat] = React.useState<string>("svg");

  const ref = React.useRef(null);

  const exportFile = React.useCallback((format: string) => {
    if (ref.current === null) {
      return;
    }

    switch (format) {
      case "svg":
        toSvg(ref.current, { cacheBust: true, quality: 1 })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "snippet.svg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case "jpeg":
        toJpeg(ref.current, { cacheBust: true, quality: 1 })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "snippet.jpeg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      default:
        toPng(ref.current, { cacheBust: true, quality: 1 })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "snippet.png";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;
    }
  }, []);

  React.useEffect(() => hljs.highlightAll(), []);

  // Code snippets
  const tabs = [
    {
      active: true,
      title: "Untitled",
      language: "plaintext",
      code: "Type your code here\n",
    },
  ];

  const Menu = () => (
    <nav className={styles.nav}>
      <div className={styles.bar}>
        <div className="flex items-center gap-4">
          <Logo />
          <h1 className={styles.brand}>Snippets</h1>
        </div>

        <div className="group relative">
          <button
            type="button"
            className={`group peer relative flex items-center justify-center ${styles.menu}`}
          >
            <Bars2Icon className="absolute h-6 w-6 group-hover:scale-0 group-focus:scale-0" />
            <XMarkIcon className="absolute h-6 w-6 scale-0 group-hover:scale-100 group-focus:scale-100" />
          </button>

          <ul
            className={`${styles.list} min-w-[30rem] peer-hover:scale-100 peer-focus:scale-100`}
          >
            <li className={styles.listItem}>
              <ArrowsPointingOutIcon className="h-6 w-6" />
              <h2 className="text-lg">Size</h2>
              <select
                className="w-full bg-transparent"
                value={JSON.stringify(size)}
                onChange={(event) => setSize(JSON.parse(event.target.value))}
              >
                {Constants.container.size.map((i) => (
                  <option key={i?.name} value={JSON.stringify(i)}>
                    {i?.name}
                  </option>
                ))}
              </select>
            </li>

            <li className={styles.listItem}>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <SwatchIcon className="h-6 w-6" />
                  <h2 className="text-lg">Background</h2>
                </div>
                <div className={styles.listItem}>
                  <h2 className="text-lg">Type</h2>

                  <select
                    value={JSON.stringify(type)}
                    className="w-full bg-transparent"
                    onChange={(event) =>
                      setType(JSON.parse(event.target.value))
                    }
                  >
                    {Constants.container.bg.type.map((i) => (
                      <option key={i.name} value={JSON.stringify(i)}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 dark:hidden">
                  <h2 className="text-lg">Light Colors</h2>
                  <div className="flex flex-wrap items-center gap-4">
                    {Constants.container.bg.colors.light.map((item, index) => (
                      <button
                        key={item}
                        onClick={() => setBg(item)}
                        className={`h-8 w-8 rounded shadow-lg hover:scale-[300%] hover:shadow-xl ${
                          index === 0 ? "backdrop-blur-3xl" : ""
                        } ${
                          type.value !== "bg-gradient-to-tr" ? type.value : ""
                        } ${type.name === "linear" ? direction : ""} ${item}${
                          bg === item
                            ? " ring-4 ring-stone-800/95 ring-offset-2 dark:ring-white/95"
                            : ""
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="hidden gap-4 dark:grid">
                  <h2 className="text-lg">Dark Colors</h2>
                  <div className="flex flex-wrap items-center gap-4">
                    {Constants.container.bg.colors.dark.map((item, index) => (
                      <button
                        key={item}
                        onClick={() => setBg(item)}
                        className={`h-8 w-8 rounded shadow-lg hover:scale-[300%] hover:shadow-xl ${
                          index === 0 ? "backdrop-blur-3xl" : ""
                        } ${
                          type.value !== "bg-gradient-to-tr" ? type.value : ""
                        } ${type.name === "linear" ? direction : ""} ${item}${
                          bg === item
                            ? " ring-4 ring-stone-800/95 ring-offset-2 dark:ring-white/95"
                            : ""
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>

                <div className={styles.listItem}>
                  <h2>Direction</h2>

                  <select
                    value={direction}
                    disabled={type.name !== "linear"}
                    className="w-full bg-transparent disabled:opacity-50"
                    onChange={(event) => setDirection(event.target.value)}
                  >
                    {Constants.container.bg.directions.map((i) => (
                      <option key={i.name} value={i.value}>
                        {i.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div title="Export" className="relative">
          <button type="button" className={`peer ${styles.menu}`}>
            <DocumentArrowDownIcon className="h-6 w-6" />
          </button>

          <ul
            className={`${styles.list} peer-hover:scale-100 peer-focus:scale-100`}
          >
            {Constants.formats.map((i) => (
              <li key={i} className={styles.listItem}>
                <button
                  type="button"
                  className="flex items-center gap-4 disabled:opacity-50"
                  disabled={
                    bg === Constants.container.bg.colors.light[0] && i !== "svg"
                  }
                  onClick={() => {
                    setFormat(i);

                    exportFile(i);
                  }}
                >
                  {i.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className={styles.menu}
          onClick={() => setTheme(!theme)}
        >
          {theme ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>

        <button
          type="button"
          className={styles.menu}
          onClick={() => setDisplayAccount(!displayAccount)}
        >
          {displayAccount ? (
            <UserMinusIcon className="h-6 w-6" />
          ) : (
            <UserPlusIcon className="h-6 w-6" />
          )}
        </button>

        <div className="flex items-center gap-4">
          <label htmlFor="theme">
            <SwatchIcon className="h-6 w-6" />
          </label>
          <select
            id="theme"
            value={codeTheme}
            className="max-w-[10rem] bg-transparent outline-none"
            onChange={(event) => setCodeTheme(event.target.value)}
          >
            {Constants.themes.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${codeTheme}.min.css`}
      />

      <div className={`${theme ? "dark " : ""}${styles.container}`}>
        <Background />

        <div className={styles.screen}>
          <main className={styles.main}>
            <Menu />

            <div
              className="relative h-fit w-fit"
              ref={format === "svg" ? ref : undefined}
              style={
                size.name === Constants.container.size[1]?.name
                  ? size.value
                  : undefined
              }
            >
              {bg === Constants.container.bg.colors.light[0] ? (
                <>
                  {/* <div className="absolute inset-0 -z-20 animate-pulse"> */}
                  <div className="absolute inset-0 -z-20">
                    <div className="absolute left-0 top-0 h-60 w-60 rounded-3xl bg-lime-400"></div>
                    <div className="absolute right-1 top-0 h-56 w-56 rounded-3xl bg-sky-400"></div>
                    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-3xl bg-fuchsia-500"></div>
                    <div className="absolute bottom-0 right-4 h-64 w-64 rounded-3xl bg-pink-700"></div>
                    <div className="absolute left-1/3 top-1/3 h-40 w-40 rounded-3xl bg-green-400"></div>
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-lg backdrop-blur-3xl"></div>
                </>
              ) : undefined}

              <section
                style={size.value}
                ref={format !== "svg" ? ref : undefined}
                className={`${styles.section}${
                  type.value !== "bg-gradient-to-tr" ? ` ${type.value}` : ""
                }${
                  type.name === "linear" && bg !== "bg-transparent"
                    ? ` ${direction}`
                    : ""
                } ${bg}`}
              >
                {displayAccount ? <Account /> : undefined}

                <Snippet tabs={tabs} />
              </section>
            </div>

            <section className="fixed bottom-2">
              <div className="relative h-full w-full px-8 py-4">
                <div className="absolute inset-0 -z-10 rounded-b-lg rounded-t-xl bg-white/40 backdrop-blur-3xl dark:bg-stone-800/40"></div>

                <div className="flex items-center gap-4 font-light">
                  <p>Made by</p>
                  <a
                    href="https://github.com/youzarsiph"
                    className="font-semibold hover:text-stone-400"
                  >
                    @youzarsiph
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Warning />
    </>
  );
};

export default Home;
