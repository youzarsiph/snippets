/**
 * Window control buttons
 */

import React from "react";
import {
  MinusIcon,
  Square2StackIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "../styles/components/Snippet.module.css";
import ButtonStyles from "../styles/components/Buttons.module.css";

const Buttons = (props: {
  style: string;
  setStyle: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  toggleLineNumbers: () => void;
}) =>
  props.style === "mac" ? (
    <div
      className={`${ButtonStyles.container}${
        props.position === "right" ? " flex-row-reverse" : ""
      }`}
    >
      <div className={ButtonStyles.btnContainer}>
        <button
          onClick={() => props.toggleLineNumbers()}
          className={`peer ${ButtonStyles.btn} ${ButtonStyles.red} focus:ring-opacity-60`}
        ></button>
      </div>

      <div className={ButtonStyles.btnContainer}>
        <button
          className={`peer ${ButtonStyles.btn} ${ButtonStyles.yellow} focus:ring-opacity-60`}
        ></button>
        <div
          className={`grid gap-8 ${styles.actionTooltip} ${styles.menu} peer-hover:scale-100 peer-focus:scale-100`}
        >
          <h2 className="text-lg">Style</h2>

          <div className="flex items-center gap-4">
            <label htmlFor="style">Style</label>
            <select
              id="style"
              value={props.style}
              className="bg-transparent"
              onChange={(event) => props.setStyle(event.target.value)}
            >
              <option value="mac">Mac</option>
              <option value="windows">Windows</option>
            </select>
          </div>
        </div>
      </div>

      <div className={ButtonStyles.btnContainer}>
        <button
          className={`peer ${ButtonStyles.btn} ${ButtonStyles.green} focus:ring-opacity-60`}
        ></button>
        <div
          className={`grid gap-8 ${styles.actionTooltip} ${styles.menu} peer-hover:scale-100 peer-focus:scale-100`}
        >
          <h2 className="text-lg">Position</h2>

          <div className="flex items-center gap-4">
            <label htmlFor="position">Position</label>
            <select
              id="position"
              value={props.position}
              className="bg-transparent"
              onChange={(event) => props.setPosition(event.target.value)}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`${ButtonStyles.container}${
        props.position === "left" ? " flex-row-reverse" : ""
      }`}
    >
      <div className={ButtonStyles.btnContainer}>
        <button className={`peer ${ButtonStyles.winBtn}`}>
          <MinusIcon className="h-4 w-4" />
        </button>
        <div
          className={`grid gap-8 ${styles.actionTooltip} ${styles.menu} peer-hover:scale-100 peer-focus:scale-100`}
        >
          <h2 className="text-lg">Style</h2>

          <div className="flex items-center gap-4">
            <label htmlFor="style">Style</label>
            <select
              id="style"
              value={props.style}
              className="bg-transparent"
              onChange={(event) => props.setStyle(event.target.value)}
            >
              <option value="mac">Mac</option>
              <option value="windows">Windows</option>
            </select>
          </div>
        </div>
      </div>

      <div className={ButtonStyles.btnContainer}>
        <button className={`peer ${ButtonStyles.winBtn}`}>
          <Square2StackIcon className="h-4 w-4" />
        </button>
        <div
          className={`grid gap-8 ${styles.actionTooltip} ${styles.menu} peer-hover:scale-100 peer-focus:scale-100`}
        >
          <h2 className="text-lg">Position</h2>

          <div className="flex items-center gap-4">
            <label htmlFor="position">Position</label>
            <select
              id="position"
              value={props.position}
              className="bg-transparent"
              onChange={(event) => props.setPosition(event.target.value)}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      </div>

      <div className={ButtonStyles.btnContainer}>
        <button
          className={`peer ${ButtonStyles.winBtn}`}
          onClick={() => props.toggleLineNumbers()}
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

export default Buttons;
