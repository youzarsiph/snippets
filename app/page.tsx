"use client";
import clsx from "clsx";
import React from "react";
import { Fonts, Menu } from "@/app/ui";
import { exportImage } from "@/app/utils";
import { Account, Background, Constants, Snippet } from "@/components";

const Home = () => {
  // Target element
  const target = React.useRef(null);

  // Theme
  const [theme, setTheme] = React.useState<boolean>(false);
  const [font, setFont] = React.useState<keyof typeof Fonts>("Fira Code");

  // Settings
  const [visible, setVisible] = React.useState<boolean>(false);
  const [highlight, setHighlight] = React.useState<string>("github");
  const [container, setContainer] = React.useState<{
    size: keyof typeof Constants.sizes;
    type: (typeof Constants.types)[number];
    padding: keyof typeof Constants.paddings;
    dir: (typeof Constants.directions)[number];
    isGradient: boolean;
    bgColor: (typeof Constants.directions)[number];
  }>({
    size: "auto",
    type: "linear",
    padding: "64px",
    dir: "top-right",
    isGradient: false,
    bgColor: Constants.colors[0],
  });

  return (
    <div
      className={clsx(
        "block h-screen w-screen",
        { dark: theme },
        Fonts[font].className,
      )}
    >
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${highlight}.min.css`}
      />

      <Background />

      <div className="flex h-full w-full overflow-hidden">
        <main className="relative flex h-full w-full flex-col items-center lg:flex-row">
          <Menu
            font={font}
            theme={theme}
            visible={visible}
            size={container.size}
            highlight={highlight}
            color={container.bgColor}
            gradient={container.type}
            direction={container.dir}
            isGradient={container.isGradient}
            exportCallback={(format) => exportImage(target, format)}
            onThemeChange={(t) => setTheme(t)}
            onFontChange={(font) => setFont(font)}
            onVisibleChange={(v) => setVisible(v)}
            onHighlightChange={(h) => setHighlight(h)}
            onSizeChange={(s) => setContainer({ ...container, size: s })}
            onGradientChange={(g) => setContainer({ ...container, type: g })}
            onColorChange={(c) => setContainer({ ...container, bgColor: c })}
            onDirectionChange={(d) => setContainer({ ...container, dir: d })}
            onIsGradientChange={(ig) =>
              setContainer({ ...container, isGradient: ig })
            }
          />

          <div className="flex h-full w-full items-center justify-center">
            <div className={`relative h-fit w-fit p-1`}>
              <div className="p-1" ref={target}>
                <section
                  style={Constants.sizes[container.size]}
                  className={clsx(
                    "relative flex h-full w-full flex-col items-center justify-center overflow-auto rounded-lg shadow-xl",
                    container.bgColor,
                    {
                      "p-4": container.padding === "16px",
                      "p-8": container.padding === "32px",
                      "p-16": container.padding === "64px",
                      "p-32": container.padding === "128px",
                    },
                    {
                      "bg-gradient-to-t":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "top",
                      "bg-gradient-to-tr":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "top-right",
                      "bg-gradient-to-r":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "right",
                      "bg-gradient-to-br":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "bottom-right",
                      "bg-gradient-to-b":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "bottom",
                      "bg-gradient-to-bl":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "bottom-left",
                      "bg-gradient-to-l":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "left",
                      "bg-gradient-to-tl":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.dir === "top-left",
                      "bg-gradient-conic":
                        container.isGradient && container.type === "conic",
                      "bg-gradient-radial":
                        container.isGradient && container.type === "radial",
                    },
                  )}
                >
                  <Snippet tabs={[]} />

                  {visible ? <Account /> : undefined}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
