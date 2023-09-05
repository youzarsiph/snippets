/**
 * Author
 */

import React from "react";
import "../styles/components/author.css";

const Author = () => (
  <section className="author-container">
    <div className="author-main">
      <div className="author-bg"></div>

      <p>
        Made by{" "}
        <a className="author-link" href="https://github.com/youzarsiph">
          @youzarsiph
        </a>
      </p>
    </div>
  </section>
);

export default Author;
