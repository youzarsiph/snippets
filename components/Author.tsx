/**
 * Author
 */

import React from "react";
import "../styles/components/author.css";

const Author = (props: { font: string }) => (
  <section className="author-container">
    <div className="author-main">
      <div className="author-bg"></div>

      <p className={props.font}>
        Made by{" "}
        <a className="author-link" href="https://github.com/youzarsiph">
          @youzarsiph
        </a>
      </p>
    </div>
  </section>
);

export default Author;
