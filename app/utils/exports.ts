import React from "react";
import * as HtmlToImg from "html-to-image";

const exportImage = (target: React.MutableRefObject<null>, format: string) => {
  if (target.current === null) {
    return;
  }

  switch (format) {
    case "svg":
      HtmlToImg.toSvg(target.current, {
        cacheBust: true,
        quality: 1,
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "snippet.svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case "jpeg":
      HtmlToImg.toJpeg(target.current, {
        cacheBust: true,
        quality: 1,
      })
        .then((dataUrl: string) => {
          const link = document.createElement("a");
          link.download = "snippet.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err: any) => {
          console.log(err);
        });
      break;

    default:
      HtmlToImg.toPng(target.current, {
        cacheBust: true,
        quality: 1,
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "snippet.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
      break;
  }
};

export default exportImage;
