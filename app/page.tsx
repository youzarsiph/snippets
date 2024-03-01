"use client";

import clsx from "clsx";
import React from "react";
import hljs from "highlight.js";
import { Callbacks, Constants, exportImage } from "@/app/utils";
import { Account, Background, Fonts, Nav, Snippet } from "@/app/ui";
import { CodeSettings, ContainerSettings, ExportSettings } from "@/app/types";

const Home = () => {
  // Target element
  const target = React.useRef(null);

  // Container Settings
  const [container, setContainer] = React.useState<ContainerSettings>({
    theme: true,
    size: "auto",
    type: "linear",
    padding: "64px",
    isGradient: true,
    direction: "top-right",
    color: Constants.colors[0],
    buttons: { style: true, position: true },
  });

  // Export settings
  const [exportSettings, setExport] = React.useState<ExportSettings>({
    quality: 1,
    format: "png",
  });

  // Code Settings
  const [code, setCode] = React.useState<CodeSettings>({
    active: 0,
    font: "JetBrains Mono",
    highlight: "github-dark",
    displayLineNumbers: true,
    tabs: [
      {
        isActive: true,
        name: "views.py",
        language: "python",
        content: `""" Views """

from django.shortcuts import render
from django.http import HttpRequest, HttpResponse


# Create your views here.
def snippets(request: HttpRequest) -> HttpResponse:
  """Create beautiful images of your code snippets"""

  return render(request, "snippets/index.html")
`,
      },
    ],
  });

  // Account Settings
  const [account, setAccount] = React.useState({
    isVisible: false,
    name: "Your Name",
    username: "github.com/username",
  });

  React.useEffect(() => {
    document.getElementById("code")?.removeAttribute("data-highlighted");

    hljs.highlightAll();
  }, [code]);

  return (
    <div
      className={clsx(
        { dark: container.theme },
        "block h-screen w-screen",
        Fonts[code.font].className,
      )}
    >
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${code.highlight}.css`}
      />

      <Background />

      <div className="flex h-full w-full overflow-hidden">
        <main className="relative flex h-full w-full flex-col items-center lg:flex-row">
          <Nav
            code={code}
            account={account}
            container={container}
            export={exportSettings}
            onCodeChange={(c) => setCode(c)}
            onAccountChange={(a) => setAccount(a)}
            onContainerChange={(c) => setContainer(c)}
            onExportChange={(e) => setExport(e)}
            exportCallback={() =>
              exportImage(
                target,
                exportSettings.format,
                code.tabs[code.active].name,
                exportSettings.quality,
              )
            }
          />

          <div className="flex h-full w-full items-center justify-center">
            <div className={`relative h-fit w-fit p-1`}>
              <div className="p-1" id="target" ref={target}>
                <section
                  style={Constants.sizes[container.size]}
                  className={clsx(
                    "relative flex h-full w-full flex-col items-center justify-center overflow-auto rounded-lg shadow-xl",
                    container.color,
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
                        container.direction === "top",
                      "bg-gradient-to-tr":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "top-right",
                      "bg-gradient-to-r":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "right",
                      "bg-gradient-to-br":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "bottom-right",
                      "bg-gradient-to-b":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "bottom",
                      "bg-gradient-to-bl":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "bottom-left",
                      "bg-gradient-to-l":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "left",
                      "bg-gradient-to-tl":
                        container.isGradient &&
                        container.type === "linear" &&
                        container.direction === "top-left",
                      "bg-gradient-conic":
                        container.isGradient && container.type === "conic",
                      "bg-gradient-radial":
                        container.isGradient && container.type === "radial",
                    },
                  )}
                >
                  <Snippet
                    code={code}
                    buttons={container.buttons}
                    createTab={() =>
                      Callbacks.newTab(code.tabs, (res) =>
                        setCode({
                          ...code,
                          tabs: res,
                          active: code.tabs.length - 1,
                        }),
                      )
                    }
                    editTab={(idx, n) =>
                      Callbacks.renameTab(code.tabs, idx, n, (c) =>
                        setCode({ ...code, tabs: c }),
                      )
                    }
                    switchTab={(idx) => setCode({ ...code, active: idx })}
                    deleteTab={(idx) =>
                      Callbacks.removeTab(code.tabs, code.tabs[idx], (res) =>
                        setCode({
                          ...code,
                          tabs: res,
                          active: code.tabs.length - 2,
                        }),
                      )
                    }
                    onContentChange={(c) =>
                      setCode({
                        ...code,
                        tabs: code.tabs.map((i, idx) => {
                          if (idx === code.active) {
                            i.content = c;
                          }

                          return i;
                        }),
                      })
                    }
                  />

                  {account.isVisible ? (
                    <Account name={account.name} username={account.username} />
                  ) : undefined}
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
