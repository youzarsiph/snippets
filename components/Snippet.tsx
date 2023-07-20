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
import Buttons from "./Buttons";
import type { Tab as TabType } from "@/types";
import SnippetStyles from "../styles/components/Snippet.module.css";

const Snippet = (props: { tabs: TabType[] }) => {
  // Buttons
  const [style, setStyle] = React.useState<string>("mac");
  const [position, setPosition] = React.useState<string>("left");

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

      if (updatedTabs.length !== 0) {
        setTabs(updatedTabs);

        const newActiveTab = updatedTabs[updatedTabs.length - 1];
        newActiveTab.active = true;

        setActiveTab(newActiveTab);
      } else {
        const temp = {
          active: true,
          title: "Untitled",
          code: "Type tour code here.\n",
          language: "plaintext",
        };

        setTabs([temp]);
        setActiveTab(temp);
      }
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
    <header className={SnippetStyles.header}>
      <div className={SnippetStyles.tabs}>
        {position === "left" ? (
          <Buttons
            style={style}
            position={position}
            setStyle={(value) => setStyle(value)}
            setPosition={(value) => setPosition(value)}
          />
        ) : undefined}

        {tabs.map((item, idx) => (
          <Tab
            tab={item}
            isLast={tabs.length === 1}
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
        ))}

        <button
          type="button"
          onClick={() => Callbacks.newTab()}
          className={`group ${SnippetStyles.actionBtn}`}
        >
          <PlusIcon className="h-4 w-4" />

          <span
            className={`${SnippetStyles.actionTooltip} group-hover:scale-100 group-focus:scale-100`}
          >
            New tab
          </span>
        </button>

        <button
          type="button"
          onClick={() => Callbacks.prevTab()}
          className={`group ${SnippetStyles.actionBtn}`}
          disabled={tabs.length === 1 || activeTab === tabs[0]}
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span
            className={`${SnippetStyles.actionTooltip} group-hover:scale-100 group-focus:scale-100`}
          >
            Prev
          </span>
        </button>

        <button
          type="button"
          onClick={() => Callbacks.nextTab()}
          className={`group ${SnippetStyles.actionBtn}`}
          disabled={tabs.length === 1 || activeTab === tabs[tabs.length - 1]}
        >
          <ChevronRightIcon className="h-4 w-4" />
          <span
            className={`${SnippetStyles.actionTooltip} group-hover:scale-100 group-focus:scale-100`}
          >
            Next
          </span>
        </button>
      </div>

      {position === "right" ? (
        <Buttons
          style={style}
          position={position}
          setStyle={(value) => setStyle(value)}
          setPosition={(value) => setPosition(value)}
        />
      ) : undefined}
    </header>
  );

  const Footer = () => (
    <footer className={SnippetStyles.footer}>
      <div className={SnippetStyles.tabs + " justify-between"}>
        <div className="flex items-center gap-4">
          <Image
            width={16}
            height={16}
            alt={`${getIconForFile(activeTab.title)}`}
            src={`icons/${getIconForFile(activeTab.title)}`}
            className="h-7 w-7 rounded bg-white/75 p-1 dark:bg-stone-800/75"
          />

          <select
            id="lang"
            value={activeTab.language}
            onChange={(event) => Callbacks.updateTabLang(event.target.value)}
            className="block cursor-pointer appearance-none rounded bg-transparent px-2 py-1 font-sans outline-none hover:bg-white dark:hover:bg-stone-800"
          >
            {hljs.listLanguages().map((lang) => (
              <option key={lang}>
                {lang.replace(lang.charAt(0), lang.charAt(0).toUpperCase())}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <p>{Callbacks.countWords(activeTab.code)} words</p>
          <p>{activeTab.code.length} chars</p>
        </div>
      </div>
    </footer>
  );

  // Line number count
  let count = 0;

  return (
    <article className={SnippetStyles.container}>
      <Header />

      <main className={SnippetStyles.main}>
        <section className={SnippetStyles.mainSection}>
          <div className={SnippetStyles.lineNumbers}>
            {activeTab.code.split("\n").map(() => {
              count += 1;
              return <div key={count}>{count}</div>;
            })}
          </div>

          <div className="relative w-full">
            <textarea
              id="code"
              autoFocus
              name="code"
              value={activeTab.code}
              className={SnippetStyles.editor}
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

            <pre className={SnippetStyles.codeContainer}>
              <code
                className={`language-${activeTab.language}`}
                style={{ padding: 0, background: "transparent" }}
              >
                {activeTab.code}
              </code>
            </pre>
          </div>
        </section>
      </main>

      <Footer />
    </article>
  );
};

export default Snippet;
