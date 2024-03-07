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
  AuthorSettings,
  FileSettings,
  Slide,
  ExportSettings,
  Settings,
} from "@/app/types";

const Nav = (props: {
  settings: Settings;
  account: AuthorSettings;
  code: FileSettings;
  slides: Slide[];
  activeSlide: Slide;
  export: ExportSettings;
  exportCallback: () => void;
  onCodeChange: (code: FileSettings) => void;
  onAccountChange: (account: AuthorSettings) => void;
  onSlidesChange: (slides: Slide[]) => void;
  onExportChange: (exportSettings: ExportSettings) => void;
  onSettingsChange: (settings: Settings) => void;
}) => {
  const [display, setDisplay] = React.useState({
    account: false,
    code: false,
    container: false,
    export: false,
  });

  return (
    <nav className="relative z-20 order-last w-full lg:static lg:-order-none lg:h-full lg:w-auto">
      {/* Slide Drawer */}
      <Drawer
        tabIndex={-1}
        title="Slide"
        isVisible={display.container}
        onDisplayChange={() => setDisplay({ ...display, container: false })}
      >
        <div className="flex items-center justify-between gap-4">
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
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
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

      {/* Export Drawer */}
      <Drawer
        tabIndex={-1}
        title="Export"
        isVisible={display.export}
        onDisplayChange={() => setDisplay({ ...display, export: false })}
      >
        <Select
          label="Format"
          value={props.export.format}
          onChange={(event) =>
            props.onExportChange({
              ...props.export,
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
          value={props.export.quality}
          onChange={(event) =>
            props.onExportChange({
              ...props.export,
              quality: parseFloat(event.target.value),
            })
          }
        >
          <option value={0.5}>50 %</option>
          <option value={0.75}>75 %</option>
          <option value={1}>100 %</option>
        </Select>

        <Button onClick={() => props.exportCallback()}>Export</Button>
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
          value={props.code.file.language}
          onChange={(event) =>
            props.onCodeChange({
              ...props.code,
              file: {
                ...props.code.file,
                language: event.target.value as Language,
              },
            })
          }
        >
          {hljs.listLanguages().map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </Select>

        <Select
          label="Font Family"
          value={props.code.font}
          onChange={(event) =>
            props.onCodeChange({
              ...props.code,
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
          value={props.code.highlight}
          onChange={(event) =>
            props.onCodeChange({
              ...props.code,
              highlight: event.target.value,
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
              props.onCodeChange({
                ...props.code,
                displayLineNumbers: !props.code.displayLineNumbers,
              })
            }
          >
            {props.code.displayLineNumbers ? (
              <EyeSlashIcon className="h-6 w-6" />
            ) : (
              <EyeIcon className="h-6 w-6" />
            )}
            <span>{props.code.displayLineNumbers ? "Hide" : "Show"}</span>
          </Button>
        </div>
      </Drawer>

      {/* Author Drawer */}
      <Drawer
        tabIndex={-1}
        title="Author"
        isVisible={display.account}
        onDisplayChange={() => setDisplay({ ...display, account: false })}
      >
        <Input
          label="Name"
          value={props.account.name}
          onChange={(event) =>
            props.onAccountChange({
              ...props.account,
              name: event.target.value,
            })
          }
        />

        <Input
          label="Username"
          value={props.account.username}
          onChange={(event) =>
            props.onAccountChange({
              ...props.account,
              username: event.target.value,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Visibility</p>
          <Button
            onClick={() =>
              props.onAccountChange({
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

      <div className="relative flex w-full flex-row justify-evenly gap-4 bg-white/80 p-2 backdrop-blur-3xl lg:h-full lg:flex-col lg:justify-start lg:py-8 dark:bg-stone-800/75 dark:text-stone-200">
        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                account: false,
                code: false,
                container: !display.container,
                export: false,
              })
            }
          >
            {display.container ? (
              <Squares2X2Icon className="h-6 w-6" />
            ) : (
              <SquaresPlusIcon className="h-6 w-6" />
            )}
          </Button>
          <p className="text-xs">Menu</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                account: false,
                code: false,
                container: false,
                export: !display.export,
              })
            }
          >
            <ViewfinderCircleIcon className="h-6 w-6" />
          </Button>
          <p className="text-xs">Export</p>
        </div>

        <div className="flex flex-col items-center gap-1 lg:order-first">
          <Logo />
          <p className="text-xs font-semibold">Snippets</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                account: false,
                code: !display.code,
                export: false,
                container: false,
              })
            }
          >
            <CodeBracketSquareIcon className="h-6 w-6" />
          </Button>
          <p className="text-xs">File</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                account: !display.account,
                code: false,
                export: false,
                container: false,
              })
            }
          >
            <UserCircleIcon className="h-6 w-6" />
          </Button>
          <p className="text-xs">Author</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
