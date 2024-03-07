import clsx from "clsx";
import React from "react";
import hljs from "highlight.js";
import {
  CodeBracketSquareIcon,
  EyeIcon,
  EyeSlashIcon,
  MoonIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  SunIcon,
  UserCircleIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import { Fonts } from "@/app/styles";
import { Constants } from "@/app/utils";
import { Button, Drawer, Input, Logo, Select } from "@/app/ui";
import {
  Font,
  Language,
  Padding,
  Size,
  Author,
  Slide,
  Settings,
  File,
  Highlight,
} from "@/app/types";

const Nav = (props: {
  file: File;
  slides: Slide[];
  activeSlide: Slide;
  settings: Settings;
  account: Author;
  exportCallback: () => void;
  onSlidesChange: (slides: Slide[]) => void;
  onSettingsChange: (settings: Settings) => void;
  onAuthorChange: (account: Author) => void;
}) => {
  const [display, setDisplay] = React.useState({
    author: false,
    code: false,
    settings: false,
    slide: false,
  });

  return (
    <nav className="relative z-20 order-last w-full lg:static lg:-order-none lg:h-full lg:w-auto">
      {/* Settings Drawer */}
      <Drawer
        tabIndex={-1}
        title="Settings"
        isVisible={display.settings}
        onDisplayChange={() => setDisplay({ ...display, settings: false })}
      >
        <section className="grid gap-4">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <p>Theme</p>
            <Button
              onClick={() =>
                props.onSettingsChange({
                  ...props.settings,
                  theme: !props.settings.theme,
                })
              }
            >
              {props.settings.theme ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
              <span>{props.settings.theme ? "Dark" : "Light"}</span>
            </Button>
          </div>

          <Select
            label="Slide Size"
            value={props.settings.size}
            onChange={(event) =>
              props.onSettingsChange({
                ...props.settings,
                size: event.target.value as Size,
              })
            }
          >
            {Object.keys(Constants.sizes).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>

          <Select
            label="Slide Padding"
            value={props.settings.padding}
            onChange={(event) =>
              props.onSettingsChange({
                ...props.settings,
                padding: event.target.value as Padding,
              })
            }
          >
            {Object.keys(Constants.paddings).map((padding) => (
              <option key={padding} value={padding}>
                {padding}
              </option>
            ))}
          </Select>
        </section>

        <section className="grid gap-4">
          <h3 className="text-lg font-thin">Editor settings</h3>

          <Select
            label="Font Family"
            value={props.settings.font}
            onChange={(event) =>
              props.onSettingsChange({
                ...props.settings,
                font: event.target.value as Font,
              })
            }
          >
            {Object.keys(Fonts).map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </Select>

          <Select
            label="Highlight Theme"
            value={props.settings.highlight}
            onChange={(event) =>
              props.onSettingsChange({
                ...props.settings,
                highlight: event.target.value as Highlight,
              })
            }
          >
            {Constants.highlights.map((highlight) => (
              <option key={highlight} value={highlight}>
                {highlight}
              </option>
            ))}
          </Select>

          <div className="flex items-center justify-between gap-4">
            <p>Line Numbers</p>
            <Button
              onClick={() =>
                props.onSettingsChange({
                  ...props.settings,
                  displayLineNumbers: !props.settings.displayLineNumbers,
                })
              }
            >
              {props.settings.displayLineNumbers ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
              <span>{props.settings.displayLineNumbers ? "Hide" : "Show"}</span>
            </Button>
          </div>
        </section>

        <section className="grid gap-4">
          <h3 className="text-lg font-thin">Export</h3>

          <Select
            label="Format"
            value={props.settings.format}
            onChange={(event) =>
              props.onSettingsChange({
                ...props.settings,
                format: event.target.value,
              })
            }
          >
            {Constants.formats.map((format) => (
              <option key={format} value={format}>
                {format.toUpperCase()}
              </option>
            ))}
          </Select>

          <Select
            label="Quality"
            value={props.settings.quality}
            onChange={(event) =>
              props.onSettingsChange({
                ...props.settings,
                quality: parseFloat(event.target.value),
              })
            }
          >
            <option value={0.5}>50 %</option>
            <option value={0.75}>75 %</option>
            <option value={1}>100 %</option>
          </Select>

          <Button onClick={() => props.exportCallback()}>Export</Button>
        </section>
      </Drawer>

      {/* Slide Drawer */}
      <Drawer
        tabIndex={-1}
        title="Slide"
        isVisible={display.slide}
        onDisplayChange={() => setDisplay({ ...display, slide: false })}
      >
        <div className="flex items-center justify-between gap-4">
          <p>Is title slide?</p>
          <Button
            onClick={() =>
              props.onSlidesChange(
                props.slides.map((slide) => {
                  if (slide === props.activeSlide) {
                    slide.isTitleSlide = !props.activeSlide.isTitleSlide;
                  }

                  return slide;
                }),
              )
            }
          >
            {props.activeSlide.isTitleSlide ? "Yes" : "No"}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>Gradient Background</p>
          <Button
            onClick={() =>
              props.onSlidesChange(
                props.slides.map((slide) => {
                  if (slide === props.activeSlide) {
                    slide.isGradient = !props.activeSlide.isGradient;
                  }

                  return slide;
                }),
              )
            }
          >
            {props.activeSlide.isGradient ? "Yes" : "No"}
          </Button>
        </div>

        <Select
          label="Gradient Type"
          value={props.activeSlide.type}
          onChange={(event) =>
            props.onSlidesChange(
              props.slides.map((slide) => {
                if (slide === props.activeSlide) {
                  slide.type = event.target.value;
                }

                return slide;
              }),
            )
          }
        >
          {Constants.types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>

        <Select
          label="Gradient Direction"
          value={props.activeSlide.direction}
          onChange={(event) =>
            props.onSlidesChange(
              props.slides.map((slide) => {
                if (slide === props.activeSlide) {
                  slide.direction = event.target.value;
                }

                return slide;
              }),
            )
          }
        >
          {Constants.directions.map((direction) => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </Select>

        <div className="grid gap-2">
          <p>BG Colors</p>
          <div className="flex flex-wrap items-center gap-2">
            {Constants.colors.map((clr) => (
              <button
                key={clr}
                onClick={() =>
                  props.onSlidesChange(
                    props.slides.map((slide) => {
                      if (slide === props.activeSlide) {
                        slide.color = clr;
                      }

                      return slide;
                    }),
                  )
                }
                className={clsx(
                  "h-8 w-8 rounded-sm shadow-lg ring-1 hover:-translate-y-8 hover:scale-[400%] hover:shadow-xl",
                  clr,
                  {
                    "ring-4 ring-opacity-75 ring-offset-1":
                      clr === props.activeSlide.color,
                    "bg-gradient-to-t":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "top",
                    "bg-gradient-to-tr":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "top-right",
                    "bg-gradient-to-r":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "right",
                    "bg-gradient-to-br":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "bottom-right",
                    "bg-gradient-to-b":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "bottom",
                    "bg-gradient-to-bl":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "bottom-left",
                    "bg-gradient-to-l":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "left",
                    "bg-gradient-to-tl":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "linear" &&
                      props.activeSlide.direction === "top-left",
                    "bg-gradient-conic":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "conic",
                    "bg-gradient-radial":
                      props.activeSlide.isGradient &&
                      props.activeSlide.type === "radial",
                  },
                )}
              ></button>
            ))}
          </div>
        </div>
      </Drawer>

      {/* File Drawer */}
      <Drawer
        tabIndex={-1}
        title="File"
        isVisible={display.code}
        onDisplayChange={() => setDisplay({ ...display, code: false })}
      >
        <div className="flex items-center justify-between gap-4">
          <p>Window Style</p>
          <Button
            onClick={() =>
              props.onSlidesChange(
                props.slides.map((slide) => {
                  if (slide === props.activeSlide) {
                    slide.buttons = {
                      ...props.activeSlide.buttons,
                      style: !props.activeSlide.buttons.style,
                    };
                  }

                  return slide;
                }),
              )
            }
          >
            {props.activeSlide.buttons.style ? "Mac" : "Windows"}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>Window Position</p>
          <Button
            onClick={() =>
              props.onSlidesChange(
                props.slides.map((slide) => {
                  if (slide === props.activeSlide) {
                    slide.buttons = {
                      ...props.activeSlide.buttons,
                      position: !props.activeSlide.buttons.position,
                    };
                  }

                  return slide;
                }),
              )
            }
          >
            {props.activeSlide.buttons.position ? "Left" : "Right"}
          </Button>
        </div>

        <Select
          label="Language"
          value={props.file.language}
          onChange={(event) =>
            props.onSlidesChange(
              props.slides.map((slide) => {
                if (slide === props.activeSlide) {
                  slide.file.language = event.target.value as Language;
                }

                return slide;
              }),
            )
          }
        >
          {hljs.listLanguages().map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </Drawer>

      {/* Author Drawer */}
      <Drawer
        tabIndex={-1}
        title="Author"
        isVisible={display.author}
        onDisplayChange={() => setDisplay({ ...display, author: false })}
      >
        <Input
          label="Name"
          value={props.account.name}
          onChange={(event) =>
            props.onAuthorChange({
              ...props.account,
              name: event.target.value,
            })
          }
        />

        <Input
          label="Username"
          value={props.account.username}
          onChange={(event) =>
            props.onAuthorChange({
              ...props.account,
              username: event.target.value,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Visibility</p>
          <Button
            onClick={() =>
              props.onAuthorChange({
                ...props.account,
                isVisible: !props.account.isVisible,
              })
            }
          >
            {props.account.isVisible ? (
              <EyeSlashIcon className="h-6 w-6" />
            ) : (
              <EyeIcon className="h-6 w-6" />
            )}
            <span>{props.account.isVisible ? "Hide" : "Show"}</span>
          </Button>
        </div>
      </Drawer>

      <div className="relative flex w-full flex-row items-center justify-evenly gap-4 bg-white/80 p-2 backdrop-blur-3xl lg:h-full lg:flex-col lg:justify-between lg:py-8 dark:bg-stone-800/75 dark:text-stone-200">
        <div className="flex gap-4 lg:flex-col lg:justify-start">
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setDisplay({
                  author: false,
                  code: false,
                  settings: !display.settings,
                  slide: false,
                })
              }
            >
              {display.settings ? (
                <Squares2X2Icon className="h-6 w-6" />
              ) : (
                <SquaresPlusIcon className="h-6 w-6" />
              )}
            </Button>
            <p className="text-xs">Settings</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setDisplay({
                  author: false,
                  code: false,
                  settings: false,
                  slide: !display.slide,
                })
              }
            >
              <ViewfinderCircleIcon className="h-6 w-6" />
            </Button>
            <p className="text-xs">Slide</p>
          </div>

          <div className="flex flex-col items-center gap-1 lg:order-first">
            <Logo />
            <p className="text-xs font-semibold">Slides</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setDisplay({
                  author: false,
                  code: !display.code,
                  slide: false,
                  settings: false,
                })
              }
            >
              <CodeBracketSquareIcon className="h-6 w-6" />
            </Button>
            <p className="text-xs">Code</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() =>
                setDisplay({
                  author: !display.author,
                  code: false,
                  slide: false,
                  settings: false,
                })
              }
            >
              <UserCircleIcon className="h-6 w-6" />
            </Button>
            <p className="text-xs">Author</p>
          </div>
        </div>

        <div className="hidden lg:block">
          <Button
            onClick={() =>
              props.onSettingsChange({
                ...props.settings,
                theme: !props.settings.theme,
              })
            }
          >
            {props.settings.theme ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
