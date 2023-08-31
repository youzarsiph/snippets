/**
 * Snippets
 */

import React from "react";
import Image from "next/image";
import hljs from "highlight.js";
import { getIconForFile } from "vscode-icons-js";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Tab from "./Tab";
import Logo from "./Logo";
import Buttons from "./Buttons";
import type { TabType } from "@/types";
import "../styles/components/snippet.css";

const Snippet = (props: { tabs: TabType[]; font: string }) => {
  // Buttons
  const [style, setStyle] = React.useState<boolean>(true);
  const [position, setPosition] = React.useState<boolean>(true);

  // Programming language
  const [lang, setLang] = React.useState<string>("plaintext");

  // Snippet tabs
  const [tabs, setTabs] = React.useState<TabType[]>(props.tabs);

  // Active tab
  const [activeTab, setActiveTab] = React.useState<TabType>(
    tabs.length !== 0
      ? tabs[0]
      : {
          active: true,
          title: "Untitled",
          language: "plaintext",
          code: "Type tour code here.\n",
        }
  );

  // Display line numbers
  const [displayLN, setDisplayLN] = React.useState<boolean>(true);

  React.useEffect(() => hljs.highlightAll(), [tabs, lang, activeTab]);

  const Callbacks = {
    newTab: () => {
      const temp = tabs.map((item) => {
        item.active = false;
        return item;
      });

      // Add new
      temp.push({
        active: true,
        title: "Untitled",
        language: "plaintext",
        code: "Type your code here.\n",
      });

      setTabs(temp);

      setActiveTab(temp[temp.length - 1]);
    },
    removeTab: (item: TabType) => {
      const updatedTabs = tabs
        .map((i, index) => {
          i.active = false;

          if (index === tabs.length - 1) {
            i.active = true;
          }

          return i;
        })
        .filter((tab) => tab !== item);

      setTabs(updatedTabs);

      if (updatedTabs.length !== 0) {
        const newActiveTab = updatedTabs[updatedTabs.length - 1];
        newActiveTab.active = true;

        setActiveTab(newActiveTab);
      }
      // else {
      // const temp = {
      //   active: true,
      //   title: "Untitled",
      //   code: "Type tour code here.\n",
      //   language: "plaintext",
      // };

      // setTabs([temp]);
      // setActiveTab(temp);
      // }
    },
    renameTab: (tab: TabType, title: string) => {
      const temp = tabs.map((i) => {
        if (i === tab) {
          i.title = title;
        }

        return i;
      });

      setTabs(temp);
      setActiveTab(tab);
    },
    switchTab: (item: TabType) => {
      // Deactivate all tabs
      const temp = tabs.map((i) => {
        if (i !== item) {
          i.active = false;
        }

        return i;
      });

      setTabs(temp);

      // Activate clicked tab
      item.active = true;
      setActiveTab(item);
      setLang(activeTab.language);
    },
    prevTab: () => {
      if (!(tabs.length === 1 || activeTab === tabs[0])) {
        // Index of active tab
        let index = 0;

        tabs.forEach((i, idx) => {
          if (i === activeTab) {
            index = idx;
          }
        });

        const temp = tabs.map((i, idx) => {
          i.active = false;

          if (idx === index - 1) {
            i.active = true;
          }

          return i;
        });

        setTabs(temp);
        setActiveTab(temp[index - 1]);
      }
    },
    nextTab: () => {
      if (!(tabs.length === 1 || activeTab === tabs[tabs.length - 1])) {
        // Index of active tab
        let index = 0;

        tabs.forEach((i, idx) => {
          if (i === activeTab) {
            index = idx;
          }
        });

        const temp = tabs.map((i, idx) => {
          i.active = false;

          if (idx === index + 1) {
            i.active = true;
          }

          return i;
        });

        setTabs(temp);
        setActiveTab(temp[index + 1]);
      }
    },
    updateTabLang: (value: string) => {
      // Index of active tab
      let index = 0;

      // Update lang of current tab
      const temp = tabs.map((i, idx) => {
        if (i === activeTab) {
          index = idx;
          i.language = value;
        }

        return i;
      });

      setTabs(temp);

      setActiveTab(temp[index]);

      setLang(value);
    },
    countWords: (code: string) => {
      // Remove all special characters
      const cleanedCode = code.replace(/[^\w\s\s]/g, "");

      return cleanedCode.split(/\s+/).length;
    },
  };

  const Header = () => (
    <header className={"snippet-header"}>
      <div className={"snippet-tabs"}>
        {position ? (
          <Buttons
            style={style}
            position={position}
            toggleStyle={() => setStyle(!style)}
            togglePosition={() => setPosition(!position)}
            toggleLineNumbers={() => setDisplayLN(!displayLN)}
          />
        ) : undefined}

        {tabs.length !== 0
          ? tabs.map((item, idx) => (
              <Tab
                tab={item}
                key={`${item.title}-${idx}`}
                switchTab={() => Callbacks.switchTab(item)}
                removeTab={() => Callbacks.removeTab(item)}
                updateTab={(tab: TabType, title: string) => {
                  const temp = tabs.map((i) => {
                    if (i === tab) {
                      i.title = title;
                    }

                    return i;
                  });

                  setTabs(temp);
                  setActiveTab(tab);
                }}
              />
            ))
          : undefined}

        <button
          type="button"
          onClick={() => Callbacks.newTab()}
          className={"snippet-action-btn group"}
        >
          <PlusIcon className="h-4 w-4" />

          <span className={"snippet-action-tooltip"}>New tab</span>
        </button>

        {tabs.length >= 2 ? (
          <>
            <button
              type="button"
              onClick={() => Callbacks.prevTab()}
              className={"snippet-action-btn group"}
              disabled={
                tabs.length === 0 || tabs.length === 1 || activeTab === tabs[0]
              }
            >
              <ChevronLeftIcon className="h-4 w-4" />
              <span className={"snippet-action-tooltip"}>Prev</span>
            </button>

            <button
              type="button"
              onClick={() => Callbacks.nextTab()}
              className={"snippet-action-btn group"}
              disabled={
                tabs.length === 0 ||
                tabs.length === 1 ||
                activeTab === tabs[tabs.length - 1]
              }
            >
              <ChevronRightIcon className="h-4 w-4" />
              <span className={"snippet-action-tooltip"}>Next</span>
            </button>
          </>
        ) : undefined}
      </div>

      {!position ? (
        <Buttons
          style={style}
          position={position}
          toggleStyle={() => setStyle(!style)}
          togglePosition={() => setPosition(!position)}
          toggleLineNumbers={() => setDisplayLN(!displayLN)}
        />
      ) : undefined}
    </header>
  );

  const Footer = () => (
    <footer className={"snippet-footer"}>
      <div className={"snippet-tabs justify-between"}>
        {tabs.length !== 0 ? (
          <>
            <div className="flex items-center gap-4">
              <label className="relative bg-transparent">
                <Image
                  width={16}
                  height={16}
                  className="snippet-image"
                  alt={`${getIconForFile(activeTab.title)}`}
                  src={`icons/${getIconForFile(activeTab.title)}`}
                />

                <select
                  id="lang"
                  className="absolute inset-0 bg-transparent text-transparent outline-none"
                  value={activeTab.language}
                  onChange={(event) =>
                    Callbacks.updateTabLang(event.target.value)
                  }
                >
                  {hljs.listLanguages().map((lang) => (
                    <option key={lang}>
                      {lang.replace(
                        lang.charAt(0),
                        lang.charAt(0).toUpperCase()
                      )}
                    </option>
                  ))}
                </select>
              </label>

              <span>{activeTab.language}</span>
            </div>
            <div className="flex items-center gap-4">
              <p>{Callbacks.countWords(activeTab.code)} words</p>
              <p>{activeTab.code.length} chars</p>
            </div>
          </>
        ) : undefined}
      </div>
    </footer>
  );

  // Line number count
  let count = 0;

  return (
    <article className={"snippet-container"} style={{ fontFamily: props.font }}>
      <Header />

      <main className={"snippet-main"}>
        <section className={"snippet-main-section"}>
          {tabs.length !== 0 ? (
            <>
              {displayLN ? (
                <div className={"snippet-line-numbers"}>
                  {activeTab.code.split("\n").map(() => {
                    count += 1;
                    return <div key={count}>{count}</div>;
                  })}
                </div>
              ) : undefined}

              <div className="relative w-full">
                <textarea
                  id="code"
                  autoFocus
                  name="code"
                  value={activeTab.code}
                  className={"snippet-editor"}
                  onChange={(event) => {
                    let temp: TabType = {
                      active: true,
                      title: "Untitled",
                      code: "Type tour code here.\n",
                      language: "plaintext",
                    };

                    setTabs([
                      ...tabs.map((item) => {
                        if (item === activeTab) {
                          item.code = event.target.value;
                          temp = item;
                        }

                        return item;
                      }),
                    ]);

                    setActiveTab(temp);
                  }}
                ></textarea>

                <pre className={"snippet-code-container"}>
                  <code
                    className={`language-${activeTab.language}`}
                    style={{ padding: 0, background: "transparent" }}
                  >
                    {activeTab.code}
                  </code>
                </pre>
              </div>
            </>
          ) : (
            <div className="grid gap-4 px-20 py-12">
              <div className="flex items-center gap-4">
                <Logo />{" "}
                <h1 className="font-sans text-2xl font-bold">Snippets</h1>
              </div>
              <p className="font-sans text-lg font-semibold tracking-wide">
                Create beautiful images of your code snippets
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </article>
  );
};

export default Snippet;
