"use client";

import clsx from "clsx";
import React from "react";
import hljs from "highlight.js";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fonts } from "@/app/styles";
import { Constants, exportImage } from "@/app/utils";
import { Slide as TSlide, Settings } from "@/app/types";
import { Author, Background, Nav, Slide, Snippet } from "@/app/ui";

const Home = () => {
  // Target element
  const target = React.useRef(null);

  // Author Details
  const [author, setAuthor] = React.useState({
    isVisible: true,
    name: "Your Name",
    username: "github.com/username",
  });

  // General Settings
  const [settings, setSettings] = React.useState<Settings>({
    quality: 1,
    theme: true,
    format: "png",
    padding: "64px",
    size: "widescreen",
    font: "JetBrains Mono",
    highlight: "github-dark",
    displayLineNumbers: true,
  });

  // Slide Settings
  const [slides, setSlides] = React.useState<TSlide[]>([
    {
      id: parseInt(`${Math.random() * 100}`),
      title: "Slides",
      subtitle: "Modern, Elegant & Code oriented",
      isTitleSlide: true,
      description: "Let's learn about Slides",
      type: "linear",
      isGradient: true,
      direction: "top-right",
      color:
        Constants.colors[
          parseInt(`${(Math.random() * 100) % Constants.colors.length}`)
        ],
      buttons: { style: true, position: true },
      file: {
        name: "Untitled",
        language: "plaintext",
        content: "Type your code here...",
      },
    },
    {
      id: parseInt(`${Math.random() * 100}`),
      title: "Intro",
      subtitle: "",
      isTitleSlide: false,
      description: "Modern\nElegant\nProfessional\nCode Oriented",
      type: "linear",
      isGradient: true,
      direction: "top-right",
      color:
        Constants.colors[
          parseInt(`${(Math.random() * 100) % Constants.colors.length}`)
        ],
      buttons: { style: true, position: true },
      file: {
        name: "hello.py",
        language: "python",
        content: "print('Hello, World!')\n",
      },
    },
    {
      id: parseInt(`${Math.random() * 100}`),
      title: "Thanks",
      subtitle: "",
      isTitleSlide: true,
      description: "",
      type: "linear",
      isGradient: true,
      direction: "top-right",
      color:
        Constants.colors[
          parseInt(`${(Math.random() * 100) % Constants.colors.length}`)
        ],
      buttons: { style: true, position: true },
      file: {
        name: "Untitled",
        language: "plaintext",
        content: "Type your code here...",
      },
    },
  ]);

  const [activeSlide, setActiveSlide] = React.useState<TSlide>(slides[0]);

  React.useEffect(() => {
    // Remove attribute to re-highlight code
    document.getElementById("code")?.removeAttribute("data-highlighted");

    // Highlight code
    hljs.highlightAll();
  }, [activeSlide.file]);

  return (
    <div className={clsx({ dark: settings.theme }, "block h-screen w-screen")}>
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${settings.highlight}.css`}
      />

      <Background />

      <div className="flex h-full w-full overflow-hidden">
        <main className="relative flex h-full w-full flex-col items-center lg:flex-row">
          <Nav
            file={activeSlide.file}
            slides={slides}
            account={author}
            settings={settings}
            activeSlide={activeSlide}
            onSlidesChange={(c) => setSlides(c)}
            onAuthorChange={(a) => setAuthor(a)}
            onSettingsChange={(s) => setSettings(s)}
            exportCallback={() =>
              exportImage(
                target,
                settings.format,
                activeSlide.file.name,
                settings.quality,
              )
            }
          />

          <div className="relative flex h-full w-full items-center justify-center overflow-auto">
            {/* Slides */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-4 rounded p-4 shadow-xl backdrop-blur-3xl">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  onClick={() => setActiveSlide(slide)}
                  className={clsx(
                    "relative flex h-12 w-24 items-center justify-center rounded bg-gradient-to-t ring-1",
                    slide.color,
                    { "ring-4 ring-offset-1": activeSlide === slide },
                  )}
                >
                  {activeSlide === slide ? (
                    <span className="group absolute -right-2 -top-2 flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/75"></span>
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-white dark:bg-stone-900">
                        <span
                          className="flex h-4 w-4 scale-0 items-center justify-center  group-hover:scale-100"
                          onClick={() =>
                            setSlides(
                              slides.filter((slide) => slide !== activeSlide),
                            )
                          }
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </span>
                      </span>
                    </span>
                  ) : undefined}
                  {slide.title}
                </button>
              ))}

              <button
                onClick={() =>
                  setSlides([
                    ...slides,
                    {
                      id: parseInt(`${Math.random() * 100}`),
                      title: "Untitled",
                      subtitle: "Subtitle",
                      isTitleSlide: false,
                      description: "Slide description",
                      type: "linear",
                      isGradient: true,
                      direction: "top-right",
                      color: Constants.colors[0],
                      buttons: { style: true, position: true },
                      file: {
                        name: "Untitled",
                        language: "plaintext",
                        content: "Type your code here...",
                      },
                    },
                  ])
                }
                className="flex h-12 w-24 items-center justify-center gap-4 rounded ring-1 ring-white hover:bg-white/75 focus:ring-8 focus:ring-offset-2 active:scale-90 dark:ring-stone-900 dark:hover:bg-stone-800/75"
              >
                <PlusIcon className="h-4 w-4" />
                <span>Add</span>
              </button>
            </div>

            <div className="relative grid h-fit w-fit gap-4">
              <Slide
                pageNum={1}
                slides={slides}
                data={activeSlide}
                settings={settings}
                key={activeSlide.title}
                onSlidesChange={(c) => setSlides(c)}
                font={Fonts[settings.font].className}
                author={() =>
                  author.isVisible ? (
                    <Author name={author.name} username={author.username} />
                  ) : undefined
                }
                snippet={() => (
                  <Snippet
                    file={activeSlide.file}
                    buttons={activeSlide.buttons}
                    displayLineNumbers={settings.displayLineNumbers}
                    editTab={(n) =>
                      setSlides(
                        slides.map((slide) => {
                          if (slide === activeSlide) {
                            slide.file.name = n;
                          }

                          return slide;
                        }),
                      )
                    }
                    onContentChange={(c) =>
                      setSlides(
                        slides.map((slide) => {
                          if (slide === activeSlide) {
                            slide.file.content = c;
                          }

                          return slide;
                        }),
                      )
                    }
                  />
                )}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
