"use client";

import React from "react";
import hljs from "highlight.js";
import { toSvg, toPng, toJpeg } from "html-to-image";
import {
  ArrowsPointingOutIcon,
  Bars2Icon,
  CubeTransparentIcon,
  DocumentArrowDownIcon,
  LanguageIcon,
  MoonIcon,
  SunIcon,
  SwatchIcon,
  UserMinusIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../styles/home.css";
import { TabType } from "@/types";
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
  const [codeTheme, setCodeTheme] = React.useState<string>("github");

  // Font
  const [font, setFont] = React.useState<{ label: string; link: string }>(
    Constants.fonts[0]
  );

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
  const [bg, setBg] = React.useState<string>(Constants.container.bg.colors[0]);
  const [direction, setDirection] = React.useState<string>(
    Constants.container.bg.directions[0].value
  );

  // Padding
  const [padding, setPadding] = React.useState<string>(
    Constants.container.padding[2].value
  );

  // Account info
  const [displayOwner, setDisplayOwner] = React.useState<boolean>(false);

  // Export file format
  const [format, setFormat] = React.useState<string>("svg");

  const ref = React.useRef(null);

  const saveImage = React.useCallback((format: string) => {
    if (ref.current === null) {
      return;
    }

    switch (format) {
      case "svg":
        toSvg(ref.current, {
          cacheBust: true,
          quality: 1,
        })
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
        toJpeg(ref.current, {
          cacheBust: true,
          quality: 1,
        })
          .then((dataUrl: string) => {
            const link = document.createElement("a");
            link.download = "snippet.jpeg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err: any) => {
            console.log(err);
          });
        break;

      default:
        toPng(ref.current, {
          cacheBust: true,
          quality: 1,
        })
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

  const Menu = () => {
    const [displayMenu, setDisplayMenu] = React.useState<boolean>(false);

    return (
      <nav className={"home-nav"}>
        <div className={"home-bar"}>
          <div className="flex items-center gap-4">
            <button
              className={`${
                displayMenu ? "rotate-180" : ""
              } bg-transparent outline-none`}
              onClick={() => setDisplayMenu(!displayMenu)}
            >
              <Logo />
            </button>
            <h1 className={"home-brand"}>Snippets</h1>
          </div>

          <div
            className={`${
              displayMenu ? "grid md:flex" : "hidden md:flex"
            } items-center gap-4`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="group relative">
                <button
                  type="button"
                  className={
                    "home-menu group peer relative flex items-center justify-center"
                  }
                >
                  <Bars2Icon className="absolute h-6 w-6 group-hover:scale-0 group-focus:scale-0" />
                  <XMarkIcon className="absolute h-6 w-6 scale-0 group-hover:scale-100 group-focus:scale-100" />
                </button>

                <ul className={"home-list md:min-w-[30rem]"}>
                  <li className={"home-list-item"}>
                    <ArrowsPointingOutIcon className="h-6 w-6" />
                    <h2 className="text-lg">Size</h2>
                    <select
                      className="w-full bg-transparent"
                      value={JSON.stringify(size)}
                      onChange={(event) =>
                        setSize(JSON.parse(event.target.value))
                      }
                    >
                      {Constants.container.size.map((i) => (
                        <option key={i?.name} value={JSON.stringify(i)}>
                          {i?.name}
                        </option>
                      ))}
                    </select>
                  </li>

                  <li className={"home-list-item"}>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <SwatchIcon className="h-6 w-6" />
                        <h2 className="text-lg">Background</h2>
                      </div>
                      <div className={"home-list-item"}>
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

                      <div className="grid gap-4">
                        <h2 className="text-lg">Dark Colors</h2>
                        <div className="flex flex-wrap items-center gap-4">
                          {Constants.container.bg.colors.map((item, index) => (
                            <button
                              key={item}
                              onClick={() => setBg(item)}
                              className={`h-8 w-8 rounded shadow-lg hover:scale-[300%] hover:shadow-xl ${
                                index === 0 ? "backdrop-blur-3xl" : ""
                              } ${
                                type.value !== "bg-gradient-to-tr"
                                  ? type.value
                                  : ""
                              } ${
                                type.name === "linear" ? direction : ""
                              } ${item}${
                                bg === item
                                  ? " ring-4 ring-stone-800/95 ring-offset-2 dark:ring-white/95"
                                  : ""
                              }`}
                            ></button>
                          ))}
                        </div>
                      </div>

                      <div className={"home-list-item"}>
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
                <button type="button" className={"home-menu peer"}>
                  <DocumentArrowDownIcon className="h-6 w-6" />
                </button>

                <ul className={"home-list"}>
                  {Constants.formats.map((i) => (
                    <li key={i} className={"home-list-item"}>
                      <button
                        type="button"
                        className="flex items-center gap-4 disabled:opacity-50"
                        disabled={
                          bg === Constants.container.bg.colors[0] && i !== "svg"
                        }
                        onClick={() => {
                          setFormat(i);

                          saveImage(i);
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
                className={"home-menu"}
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
                className={"home-menu"}
                onClick={() => setDisplayOwner(!displayOwner)}
              >
                {displayOwner ? (
                  <UserMinusIcon className="h-6 w-6" />
                ) : (
                  <UserPlusIcon className="h-6 w-6" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex w-full items-center gap-4">
                <label htmlFor="theme">
                  <SwatchIcon className="h-6 w-6" />
                </label>
                <select
                  id="theme"
                  value={codeTheme}
                  className="w-full bg-transparent outline-none"
                  onChange={(event) => setCodeTheme(event.target.value)}
                >
                  {Constants.highlights.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex w-full items-center gap-4">
                <label htmlFor="font">
                  <LanguageIcon className="h-6 w-6" />
                </label>
                <select
                  id="font"
                  value={JSON.stringify(font)}
                  className="w-full bg-transparent outline-none"
                  onChange={(event) => setFont(JSON.parse(event.target.value))}
                >
                  {Constants.fonts.map((i) => (
                    <option key={i.label} value={JSON.stringify(i)}>
                      {i.label}
                    </option>
                  ))}
                </select>
              </div>

              {size.name === "Auto" ? (
                <div className="flex w-full items-center gap-4">
                  <label htmlFor="padding">
                    <CubeTransparentIcon className="h-6 w-6" />
                  </label>
                  <select
                    id="padding"
                    value={padding}
                    className="w-full bg-transparent outline-none"
                    onChange={(event) => setPadding(event.target.value)}
                  >
                    {Constants.container.padding.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}px
                      </option>
                    ))}
                  </select>
                </div>
              ) : undefined}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        crossOrigin="anonymous"
        href="https://fonts.gstatic.com"
      />
      <link rel="stylesheet" href={`${font.link}&display=swap`} />
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${codeTheme}.min.css`}
      />

      <div className={`home-container${theme ? " dark " : ""}`}>
        <Background />

        <div className={"home-screen"}>
          <main className={"home-main"}>
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
              {bg === Constants.container.bg.colors[0] ? (
                <>
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
                className={`home-section${
                  type.value !== "bg-gradient-to-tr" ? ` ${type.value}` : ""
                }${
                  type.name === "linear" && bg !== "bg-transparent"
                    ? ` ${direction}`
                    : ""
                } ${bg} ${padding}`}
              >
                {displayOwner ? <Account /> : undefined}

                <Snippet font={font.label} tabs={[]} />
              </section>
            </div>

            <section
              className="fixed bottom-2"
              style={{ fontFamily: font.label }}
            >
              <div className="relative h-full w-full px-8 py-4">
                <div className="absolute inset-0 -z-10 rounded-b-lg rounded-t-xl bg-white/40 ring-1 ring-white/95 backdrop-blur-3xl dark:bg-stone-800/40 dark:ring-stone-800/95"></div>

                <p>
                  Made by{" "}
                  <a
                    href="https://github.com/youzarsiph"
                    className="font-semibold hover:text-stone-400"
                  >
                    @youzarsiph
                  </a>
                </p>
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
