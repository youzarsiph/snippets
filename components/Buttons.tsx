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

const Buttons = (props: {
  style: boolean;
  position: boolean;
  toggleStyle: () => void;
  togglePosition: () => void;
  toggleLineNumbers: () => void;
}) =>
  props.style ? (
    <div
      className={`buttons-container${
        !props.position ? " flex-row-reverse" : ""
      }`}
    >
      <div className={"buttons-btn-container"}>
        <button
          onClick={() => props.toggleLineNumbers()}
          className={"buttons-btn buttons-red peer"}
        ></button>
        <div className={"snippet-action-tooltip buttons-menu"}>
          <h2 className="text-sm">Line numbers</h2>
        </div>
      </div>

      <div className={"buttons-btn-container"}>
        <button
          onClick={() => props.toggleStyle()}
          className={"buttons-btn buttons-yellow peer"}
        ></button>
        <div className={"snippet-action-tooltip buttons-menu"}>
          <h2 className="text-sm">Style</h2>
        </div>
      </div>

      <div className={"buttons-btn-container"}>
        <button
          onClick={() => props.togglePosition()}
          className={"buttons-btn buttons-green peer"}
        ></button>
        <div className={"snippet-action-tooltip buttons-menu"}>
          <h2 className="text-sm">Position</h2>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`buttons-container${
        props.position ? " flex-row-reverse" : ""
      }`}
    >
      <div className={"buttons-btn-container"}>
        <button
          className={`buttons-win-btn peer`}
          onClick={() => props.togglePosition()}
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <div className={"snippet-action-tooltip buttons-menu"}>
          <h2 className="text-sm">Position</h2>
        </div>
      </div>

      <div className={"buttons-btn-container"}>
        <button
          className={`buttons-win-btn peer`}
          onClick={() => props.toggleStyle()}
        >
          <Square2StackIcon className="h-4 w-4" />
        </button>
        <div className={"snippet-action-tooltip buttons-menu"}>
          <h2 className="text-sm">Style</h2>
        </div>
      </div>

      <div className={"buttons-btn-container"}>
        <button
          className={`buttons-win-btn peer`}
          onClick={() => props.toggleLineNumbers()}
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
        <div className={"snippet-action-tooltip buttons-menu"}>
          <h2 className="text-sm">Line numbers</h2>
        </div>
      </div>
    </div>
  );

export default Buttons;
