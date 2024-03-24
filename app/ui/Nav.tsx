import clsx from "clsx";
import React from "react";
import hljs from "highlight.js";
import { Fonts } from "@/app/styles";
import { Constants } from "@/app/utils";
import { Button, Combobox, Drawer, Input, Logo, Select } from "@/app/ui";
import {
  Font,
  Language,
  Padding,
  Size,
  Author,
  CodeSettings,
  ContainerSettings,
  ExportSettings,
} from "@/app/types";

const Nav = (props: {
  author: Author;
  code: CodeSettings;
  container: ContainerSettings;
  export: ExportSettings;
  exportCallback: () => void;
  onCodeChange: (code: CodeSettings) => void;
  onAccountChange: (account: Author) => void;
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
              <i className="bi bi-moon-fill text-xl" />
            ) : (
              <i className="bi bi-sun-fill text-xl" />
            )}
            <span>{props.container.theme ? "Dark" : "Light"}</span>
          </Button>
        </div>

        <Select
          label="Container Size"
          data={Object.keys(Constants.sizes)}
          value={props.container.size}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              size: value as Size,
            })
          }
        />

        <Select
          label="Container Padding"
          value={props.container.padding}
          data={Object.keys(Constants.paddings)}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              padding: value as Padding,
            })
          }
        />

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
          data={Constants.types}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              type: value,
            })
          }
        />

        <Select
          label="Gradient Direction"
          value={props.container.direction}
          data={Constants.directions}
          onChange={(value) =>
            props.onContainerChange({
              ...props.container,
              direction: value,
            })
          }
        />

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
          data={Constants.formats}
          onChange={(value) =>
            props.onExportChange({
              ...props.export,
              format: value,
            })
          }
        />

        <Select
          label="Quality"
          value={props.export.quality.toString()}
          data={Object.keys({ "50%": 0.5, "75%": 0.75, "100%": 1 })}
          onChange={(value) =>
            props.onExportChange({
              ...props.export,
              quality: parseFloat(value),
            })
          }
        />

        <Button onClick={() => props.exportCallback()}>Export</Button>
      </Drawer>

      {/* Code Drawer */}
      <Drawer
        tabIndex={-1}
        title="Code"
        isVisible={display.code}
        onDisplayChange={() => setDisplay({ ...display, code: false })}
      >
        <Combobox
          label="Language"
          value={props.code.tabs[props.code.active]?.language}
          data={hljs.listLanguages()}
          onChange={(value) =>
            props.onCodeChange({
              ...props.code,
              tabs: props.code.tabs.map((i, idx) => {
                if (idx === props.code.active) {
                  i.language = value as Language;
                }

                return i;
              }),
            })
          }
        />

        <Combobox
          label="Font Family"
          value={props.code.font}
          data={Object.keys(Fonts)}
          onChange={(value) =>
            props.onCodeChange({
              ...props.code,
              font: value as Font,
            })
          }
        />

        <Combobox
          label="Highlight Theme"
          value={props.code.highlight}
          data={Constants.highlights}
          onChange={(value) =>
            props.onCodeChange({
              ...props.code,
              highlight: value,
            })
          }
        />

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
              <i className="bi bi-eye-slash-fill text-xl" />
            ) : (
              <i className="bi bi-eye-fill text-xl" />
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
              <i className="bi bi-eye-fill text-xl" />
            ) : (
              <i className="bi bi-eye-slash-fill text-xl" />
            )}
            <span>{props.author.isVisible ? "Hide" : "Show"}</span>
          </Button>
        </div>
      </Drawer>

      <div className="relative flex w-full items-center justify-evenly gap-4 bg-white/80 p-2 backdrop-blur-3xl lg:h-full lg:flex-col lg:justify-between lg:py-8 dark:bg-stone-800/75 dark:text-stone-200">
        <div className="flex w-full items-center justify-evenly gap-4 lg:flex-col lg:justify-start">
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
                <i className="bi bi-x-lg text-xl" />
              ) : (
                <i className="bi bi-list text-xl" />
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
              <i className="bi bi-download text-xl" />
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
              <i className="bi bi-code text-xl" />
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
              <i className="bi bi-person-fill text-xl" />
            </Button>
            <p className="text-xs">Account</p>
          </div>
        </div>

        <div className="hidden lg:block">
          <Button
            onClick={() =>
              props.onContainerChange({
                ...props.container,
                theme: !props.container.theme,
              })
            }
          >
            {props.container.theme ? (
              <i className="bi bi-moon-fill text-xl" />
            ) : (
              <i className="bi bi-sun-fill text-xl" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
