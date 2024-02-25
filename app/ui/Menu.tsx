import clsx from "clsx";
import React from "react";
import {
  Bars2Icon,
  DocumentArrowDownIcon,
  MoonIcon,
  SunIcon,
  UserMinusIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fonts } from "@/app/ui";
import { Constants, Logo } from "@/components";

const Menu = (props: {
  font: string;
  size: string;
  color: string;
  theme: boolean;
  visible: boolean;
  gradient: string;
  direction: string;
  highlight: string;
  isGradient: boolean;
  onColorChange: (color: string) => void;
  onThemeChange: (theme: boolean) => void;
  exportCallback: (format: string) => void;
  onVisibleChange: (visible: boolean) => void;
  onGradientChange: (gradient: string) => void;
  onDirectionChange: (direction: string) => void;
  onHighlightChange: (highlight: string) => void;
  onFontChange: (font: keyof typeof Fonts) => void;
  onIsGradientChange: (isGradient: boolean) => void;
  onSizeChange: (size: keyof typeof Constants.sizes) => void;
}) => {
  const [display, setDisplay] = React.useState({
    menu: false,
    export: false,
  });

  return (
    <nav className="relative z-20 order-last w-full lg:static lg:-order-none lg:h-full lg:w-auto">
      {/* Menu */}
      <div
        className={clsx(
          "absolute inset-x-0 max-h-screen overflow-auto rounded-t-3xl bg-white/80 ring-1 ring-white dark:bg-stone-800/75 dark:ring-stone-900 lg:inset-x-auto lg:rounded-3xl",
          {
            "bottom-full lg:bottom-4 lg:left-28": display.menu,
            "-bottom-[1000%] lg:-left-[200%] lg:bottom-4": !display.menu,
          },
        )}
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>
          <div className="grid gap-6 p-6">
            <h2 className="text-lg">Settings</h2>

            <label className="grid gap-2">
              <span>Container Size</span>
              <select
                value={props.size}
                onChange={(event) =>
                  props.onSizeChange(
                    event.target.value as keyof typeof Constants.sizes,
                  )
                }
                className="w-full rounded-lg bg-transparent px-4 py-2 ring-2 ring-white"
              >
                {Object.keys(Constants.sizes).map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span>Font Family</span>
              <select
                value={props.font}
                onChange={(event) =>
                  props.onFontChange(event.target.value as keyof typeof Fonts)
                }
                className="w-full rounded-lg bg-transparent px-4 py-2 ring-2 ring-white"
              >
                {Object.keys(Fonts).map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span>Highlight Theme</span>
              <select
                value={props.highlight}
                onChange={(event) =>
                  props.onHighlightChange(event.target.value)
                }
                className="w-full rounded-lg bg-transparent px-4 py-2 ring-2 ring-white"
              >
                {Constants.highlights.map((highlight) => (
                  <option key={highlight} value={highlight}>
                    {highlight}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={props.isGradient}
                onChange={() => props.onIsGradientChange(!props.isGradient)}
                className="h-6 w-6 appearance-none rounded bg-transparent ring-2 ring-white checked:bg-green-500"
              />
              <span>Gradient Background</span>
            </label>

            <label className="grid gap-2">
              <span>Gradient Type</span>
              <select
                value={props.gradient}
                onChange={(event) => props.onGradientChange(event.target.value)}
                className="w-full rounded-lg bg-transparent px-4 py-2 ring-2 ring-white"
              >
                {Constants.types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span>Gradient Direction</span>
              <select
                value={props.direction}
                onChange={(event) =>
                  props.onDirectionChange(event.target.value)
                }
                className="w-full rounded-lg bg-transparent px-4 py-2 ring-2 ring-white"
              >
                {Constants.directions.map((direction) => (
                  <option key={direction} value={direction}>
                    {direction}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-2">
              <span>BG Colors</span>
              <div className="grid grid-cols-9 gap-4 lg:max-w-lg lg:grid-cols-12">
                {Constants.colors.map((clr) => (
                  <button
                    key={clr}
                    onClick={() => props.onColorChange(clr)}
                    className={clsx(
                      "h-8 w-8 rounded shadow-lg hover:scale-[300%] hover:shadow-xl",
                      clr,

                      {
                        "bg-gradient-to-t":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "top",
                        "bg-gradient-to-tr":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "top-right",
                        "bg-gradient-to-r":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "right",
                        "bg-gradient-to-br":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "bottom-right",
                        "bg-gradient-to-b":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "bottom",
                        "bg-gradient-to-bl":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "bottom-left",
                        "bg-gradient-to-l":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "left",
                        "bg-gradient-to-tl":
                          props.isGradient &&
                          props.gradient === "linear" &&
                          props.direction === "top-left",
                        "bg-gradient-conic":
                          props.isGradient && props.gradient === "conic",
                        "bg-gradient-radial":
                          props.isGradient && props.gradient === "radial",
                      },
                    )}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Menu */}
      <div
        className={clsx(
          "absolute inset-x-0 rounded-t-3xl bg-white/80 ring-1 ring-white dark:bg-stone-800/75 dark:ring-stone-900 lg:inset-x-auto lg:rounded-3xl",
          {
            "bottom-full lg:bottom-4 lg:left-28": display.export,
            "-bottom-[200%] lg:-left-full lg:bottom-4": !display.export,
          },
        )}
      >
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-t-3xl backdrop-blur-3xl lg:rounded-r-3xl"></div>
          <div className="grid gap-4 p-6">
            <h2 className="text-lg">Export As...</h2>
            <ul className="grid gap-2">
              {Constants.formats.map((format) => (
                <li key={format}>
                  <button
                    type="button"
                    onClick={() => props.exportCallback(format)}
                    className="flex items-center gap-4"
                  >
                    {format.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-row justify-evenly gap-4 bg-white/80 p-2 backdrop-blur-3xl dark:bg-stone-800/75 dark:text-stone-200 lg:h-full lg:flex-col lg:justify-start lg:py-8">
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => setDisplay({ export: false, menu: !display.menu })}
            className="flex h-10 w-10 items-center justify-center rounded-3xl p-2 hover:bg-white/80 dark:hover:bg-stone-800/75"
          >
            {display.menu ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars2Icon className="h-8 w-8" />
            )}
          </button>
          <p className="text-xs">Menu</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => setDisplay({ menu: false, export: !display.export })}
            className="relative flex h-10 w-10 items-center justify-center rounded-3xl p-2 hover:bg-white/80 dark:hover:bg-stone-800/75"
          >
            <DocumentArrowDownIcon className="h-8 w-8" />
          </button>
          <p className="text-xs">Export</p>
        </div>

        <div className="flex flex-col items-center gap-1 lg:order-first">
          <Logo />
          <p className="text-xs font-semibold">Snippets</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-3xl p-2 hover:bg-white/80 dark:hover:bg-stone-800/75"
            onClick={() => props.onThemeChange(!props.theme)}
          >
            {props.theme ? (
              <SunIcon className="h-8 w-8" />
            ) : (
              <MoonIcon className="h-8 w-8" />
            )}
          </button>
          <p className="text-xs">Theme</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-3xl p-2 hover:bg-white/80 dark:hover:bg-stone-800/75"
            onClick={() => props.onVisibleChange(!props.visible)}
          >
            {props.visible ? (
              <UserMinusIcon className="h-8 w-8" />
            ) : (
              <UserPlusIcon className="h-8 w-8" />
            )}
          </button>
          <p className="text-xs">Account</p>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
