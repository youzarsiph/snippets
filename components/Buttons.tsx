/**
 * Window control buttons
 */

import React from "react";
import {
  MinusIcon,
  Square2StackIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../styles/components/buttons.css";
import "../styles/components/snippet.css";

const Buttons = (props: {
  style: string;
  setStyle: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  toggleLineNumbers: () => void;
}) =>
  props.style === "mac" ? (
    <div
      className={`buttons-container${
        props.position === "right" ? " flex-row-reverse" : ""
      }`}
    >
      <div className={"buttons-btn-container"}>
        <button
          onClick={() => props.toggleLineNumbers()}
          className={"buttons-btn buttons-red peer"}
        ></button>
      </div>

      <div className={"buttons-btn-container"}>
        <button className={"buttons-btn buttons-yellow peer"}></button>
        <div className={"snippet-action-tooltip snippet-menu buttons-menu"}>
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

      <div className={"buttons-btn-container"}>
        <button className={"buttons-btn buttons-green peer"}></button>
        <div className={"snippet-action-tooltip snippet-menu buttons-menu"}>
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
      className={`buttons-container}${
        props.position === "left" ? " flex-row-reverse" : ""
      }`}
    >
      <div className={"buttons-btn-container"}>
        <button className={`buttons-win-btn peer`}>
          <MinusIcon className="h-4 w-4" />
        </button>
        <div className={"snippet-action-tooltip snippet-menu buttons-menu"}>
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

      <div className={"buttons-btn-container"}>
        <button className={`buttons-win-btn peer`}>
          <Square2StackIcon className="h-4 w-4" />
        </button>
        <div className={"snippet-action-tooltip snippet-menu buttons-menu"}>
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

      <div className={"buttons-btn-container"}>
        <button
          className={`buttons-win-btn peer`}
          onClick={() => props.toggleLineNumbers()}
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

export default Buttons;
