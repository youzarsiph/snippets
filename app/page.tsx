"use client";

import clsx from "clsx";
import React from "react";
import hljs from "highlight.js";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Fonts } from "@/app/styles";
import { Constants, exportImage } from "@/app/utils";
import { Author, Background, Nav, Slide, Snippet } from "@/app/ui";
import {
  FileSettings,
  Slide as TSlide,
  ExportSettings,
  Settings,
} from "@/app/types";

const Home = () => {
  // Target element
  const target = React.useRef(null);

  // Author Details
  const [author, setAuthor] = React.useState({
    isVisible: true,
    name: "Your Name",
    username: "github.com/username",
  });

  // Settings
  const [settings, setSettings] = React.useState<Settings>({
    theme: true,
    padding: "64px",
    size: "widescreen",
  });

  // Slide Settings
  const [slides, setSlides] = React.useState<TSlide[]>([
    {
      title: "Title Slide",
      subtitle: "Subtitle",
      isTitleSlide: true,
      description: "Slide description",
      type: "linear",
      isGradient: true,
      direction: "top-right",
      color: Constants.colors[0],
      buttons: { style: true, position: true },
    },
    {
      title: "Untitled Slide",
      subtitle: "Subtitle",
      isTitleSlide: false,
      description: "Slide description",
      type: "linear",
      isGradient: true,
      direction: "top-right",
      color: Constants.colors[0],
      buttons: { style: true, position: true },
    },
  ]);

  const [activeSlide, setActiveSlide] = React.useState<TSlide>(slides[0]);

  // Export settings
  const [exportSettings, setExport] = React.useState<ExportSettings>({
    quality: 1,
    format: "png",
  });

  // File Settings
  const [code, setCode] = React.useState<FileSettings>({
    font: "JetBrains Mono",
    highlight: "github-dark",
    displayLineNumbers: true,
    file: {
      name: "Untitled",
      language: "plaintext",
      content: "Type your code here...",
    },
  });

  React.useEffect(
    () =>
      setCode({
        ...code,
        file: Constants.samples[
          parseInt(`${Math.random() * 100}`) % Constants.samples.length
        ],
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  React.useEffect(() => {
    // Remove attribute to re-highlight code
    document.getElementById("code")?.removeAttribute("data-highlighted");

    // Highlight code
    hljs.highlightAll();
  }, [code]);

  return (
    <div className={clsx({ dark: settings.theme }, "block h-screen w-screen")}>
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${code.highlight}.css`}
      />

      <Background />

      <div className="flex h-full w-full overflow-hidden">
        <main className="relative flex h-full w-full flex-col items-center lg:flex-row">
          <Nav
            code={code}
            slides={slides}
            account={author}
            settings={settings}
            activeSlide={activeSlide}
            onSettingsChange={(s) => setSettings(s)}
            export={exportSettings}
            onCodeChange={(c) => setCode(c)}
            onAccountChange={(a) => setAuthor(a)}
            onSlidesChange={(c) => setSlides(c)}
            onExportChange={(e) => setExport(e)}
            exportCallback={() =>
              exportImage(
                target,
                exportSettings.format,
                code.file.name,
                exportSettings.quality,
              )
            }
          />

          <div className="relative flex h-full w-full items-center justify-center overflow-auto">
            <div
              className={clsx(
                "absolute left-0 top-0 z-10 flex items-center gap-4 rounded p-4 shadow-xl backdrop-blur-3xl",
              )}
            >
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  onClick={() => setActiveSlide(slide)}
                  className={clsx(
                    "flex h-16 w-32 items-center justify-center rounded bg-gradient-to-t",
                    slide.color,
                  )}
                >
                  {slide.title}
                </button>
              ))}

              <button
                onClick={() => {
                  let res = slides;

                  res.push({
                    title: "Untitled",
                    subtitle: "Subtitle",
                    isTitleSlide: false,
                    description: "Slide description",
                    type: "linear",
                    isGradient: true,
                    direction: "top-right",
                    color: Constants.colors[0],
                    buttons: { style: true, position: true },
                  });

                  setSlides(res);
                }}
                className="flex h-16 w-32 items-center justify-center gap-4 rounded ring-1 ring-white hover:bg-white/75 dark:ring-stone-900 dark:hover:bg-stone-800/75"
              >
                <PlusIcon className="h-6 w-6" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="relative grid h-fit w-fit gap-4">
              <Slide
                slides={slides}
                onSlidesChange={(c) => setSlides(c)}
                key={activeSlide.title}
                author={() =>
                  author.isVisible ? (
                    <Author name={author.name} username={author.username} />
                  ) : undefined
                }
                code={code.file}
                data={activeSlide}
                font={Fonts[code.font].className}
                pageNum={1}
                settings={settings}
                snippet={() => (
                  <Snippet
                    code={code}
                    buttons={activeSlide.buttons}
                    editTab={(n) =>
                      setCode({
                        ...code,
                        file: { ...code.file, name: n },
                      })
                    }
                    onContentChange={(c) =>
                      setCode({
                        ...code,
                        file: { ...code.file, content: c },
                      })
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
