import clsx from "clsx";
import React from "react";
import hljs from "highlight.js";
import { Fonts } from "@/app/styles";
import { Constants } from "@/app/utils";
import { Button, Drawer, Input, Logo, Select } from "@/app/ui";
import {
  Font,
  Language,
  Padding,
  Size,
  AccountSettings,
  CodeSettings,
  ContainerSettings,
  ExportSettings,
} from "@/app/types";

const Nav = (props: {
  author: AccountSettings;
  code: CodeSettings;
  container: ContainerSettings;
  export: ExportSettings;
  exportCallback: () => void;
  onCodeChange: (code: CodeSettings) => void;
  onAccountChange: (account: AccountSettings) => void;
  onContainerChange: (container: ContainerSettings) => void;
  onExportChange: (exportSettings: ExportSettings) => void;
}) => {
  const [display, setDisplay] = React.useState({
    author: false,
    code: false,
    menu: false,
    export: false,
  });

  return (
    <nav className="relative z-20 order-last w-full lg:static lg:-order-none lg:h-full lg:w-auto">
      {/* Menu Drawer */}
      <Drawer
        tabIndex={-1}
        title="Menu"
        isVisible={display.menu}
        onDisplayChange={() => setDisplay({ ...display, menu: false })}
      >
        <div className="flex items-center justify-between gap-4">
          <p>Theme</p>
          <Button
            onClick={() =>
              props.onContainerChange({
                ...props.container,
                theme: !props.container.theme,
              })
            }
          >
            {props.container.theme ? (
              <i className="bi bi-moon-fill text-2xl" />
            ) : (
              <i className="bi bi-sun-fill text-2xl" />
            )}
            <span>{props.container.theme ? "Dark" : "Light"}</span>
          </Button>
        </div>

        <Select
          label="Container Size"
          value={props.container.size}
          onChange={(event) =>
            props.onContainerChange({
              ...props.container,
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
          label="Container Padding"
          value={props.container.padding}
          onChange={(event) =>
            props.onContainerChange({
              ...props.container,
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
          <p>Window Style</p>
          <Button
            onClick={() =>
              props.onContainerChange({
                ...props.container,
                buttons: {
                  ...props.container.buttons,
                  style: !props.container.buttons.style,
                },
              })
            }
          >
            {props.container.buttons.style ? "Mac" : "Windows"}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>Window Position</p>
          <Button
            onClick={() =>
              props.onContainerChange({
                ...props.container,
                buttons: {
                  ...props.container.buttons,
                  position: !props.container.buttons.position,
                },
              })
            }
          >
            {props.container.buttons.position ? "Left" : "Right"}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p>Gradient Background</p>
          <Button
            onClick={() =>
              props.onContainerChange({
                ...props.container,
                isGradient: !props.container.isGradient,
              })
            }
          >
            {props.container.isGradient ? "Yes" : "No"}
          </Button>
        </div>

        <Select
          label="Gradient Type"
          value={props.container.type}
          onChange={(event) =>
            props.onContainerChange({
              ...props.container,
              type: event.target.value,
            })
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
          value={props.container.direction}
          onChange={(event) =>
            props.onContainerChange({
              ...props.container,
              direction: event.target.value,
            })
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
                  props.onContainerChange({
                    ...props.container,
                    color: clr,
                  })
                }
                className={clsx(
                  "h-8 w-8 rounded-sm shadow-lg hover:-translate-y-8 hover:scale-[400%] hover:shadow-xl",
                  clr,
                  {
                    "ring-4 ring-opacity-75 ring-offset-1":
                      clr === props.container.color,
                    "bg-gradient-to-t":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "top",
                    "bg-gradient-to-tr":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "top-right",
                    "bg-gradient-to-r":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "right",
                    "bg-gradient-to-br":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "bottom-right",
                    "bg-gradient-to-b":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "bottom",
                    "bg-gradient-to-bl":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "bottom-left",
                    "bg-gradient-to-l":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "left",
                    "bg-gradient-to-tl":
                      props.container.isGradient &&
                      props.container.type === "linear" &&
                      props.container.direction === "top-left",
                    "bg-gradient-conic":
                      props.container.isGradient &&
                      props.container.type === "conic",
                    "bg-gradient-radial":
                      props.container.isGradient &&
                      props.container.type === "radial",
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

      {/* Code Drawer */}
      <Drawer
        tabIndex={-1}
        title="Code"
        isVisible={display.code}
        onDisplayChange={() => setDisplay({ ...display, code: false })}
      >
        <Select
          label="Language"
          value={props.code.tabs[props.code.active]?.language}
          onChange={(event) =>
            props.onCodeChange({
              ...props.code,
              tabs: props.code.tabs.map((i, idx) => {
                if (idx === props.code.active) {
                  i.language = event.target.value as Language;
                }

                return i;
              }),
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
              <i className="bi bi-eye-slash-fill text-2xl" />
            ) : (
              <i className="bi bi-eye-fill text-2xl" />
            )}
            <span>{props.code.displayLineNumbers ? "Hide" : "Show"}</span>
          </Button>
        </div>
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
          value={props.author.name}
          onChange={(event) =>
            props.onAccountChange({
              ...props.author,
              name: event.target.value,
            })
          }
        />

        <Input
          label="Username"
          value={props.author.username}
          onChange={(event) =>
            props.onAccountChange({
              ...props.author,
              username: event.target.value,
            })
          }
        />

        <div className="flex items-center justify-between gap-4">
          <p>Visibility</p>
          <Button
            onClick={() =>
              props.onAccountChange({
                ...props.author,
                isVisible: !props.author.isVisible,
              })
            }
          >
            {props.author.isVisible ? (
              <i className="bi bi-eye-fill text-2xl" />
            ) : (
              <i className="bi bi-eye-slash-fill text-2xl" />
            )}
            <span>{props.author.isVisible ? "Hide" : "Show"}</span>
          </Button>
        </div>
      </Drawer>

      <div className="relative flex w-full flex-row justify-evenly gap-4 bg-white/80 p-2 backdrop-blur-3xl lg:h-full lg:flex-col lg:justify-start lg:py-8 dark:bg-stone-800/75 dark:text-stone-200">
        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                author: false,
                code: false,
                menu: !display.menu,
                export: false,
              })
            }
          >
            {display.menu ? (
              <i className="bi bi-x-lg text-2xl" />
            ) : (
              <i className="bi bi-list text-2xl" />
            )}
          </Button>
          <p className="text-xs">Menu</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                author: false,
                code: false,
                menu: false,
                export: !display.export,
              })
            }
          >
            <i className="bi bi-download text-2xl" />
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
                author: false,
                code: !display.code,
                export: false,
                menu: false,
              })
            }
          >
            <i className="bi bi-code text-2xl" />
          </Button>
          <p className="text-xs">Code</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={() =>
              setDisplay({
                author: !display.author,
                code: false,
                export: false,
                menu: false,
              })
            }
          >
            <i className="bi bi-person-fill text-2xl" />
          </Button>
          <p className="text-xs">Account</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
