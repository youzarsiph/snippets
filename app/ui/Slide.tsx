import clsx from "clsx";
import React from "react";
import { Constants } from "@/app/utils";
import { Settings, Slide } from "@/app/types";

const Slide = (props: {
  data: Slide;
  font: string;
  pageNum: number;
  slides: Slide[];
  settings: Settings;
  author: () => React.ReactNode;
  snippet: () => React.ReactNode;
  onSlidesChange: (slides: Slide[]) => void;
}) => {
  const [values, setValues] = React.useState({
    title: props.data.title,
    subtitle: props.data.subtitle,
    description: props.data.description,
  });
  const [display, setDisplay] = React.useState({
    title: true,
    subtitle: true,
    description: true,
  });

  return (
    <div className="p-1">
      <section
        style={Constants.sizes[props.settings.size]}
        className={clsx(
          "relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg ring-2",
          props.data.color,
          {
            "items-center justify-center": props.data.isTitleSlide,
            "p-4": props.settings.padding === "16px",
            "p-8": props.settings.padding === "32px",
            "p-16": props.settings.padding === "64px",
            "p-32": props.settings.padding === "128px",
            "bg-gradient-to-t":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "top",
            "bg-gradient-to-tr":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "top-right",
            "bg-gradient-to-r":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "right",
            "bg-gradient-to-br":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "bottom-right",
            "bg-gradient-to-b":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "bottom",
            "bg-gradient-to-bl":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "bottom-left",
            "bg-gradient-to-l":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "left",
            "bg-gradient-to-tl":
              props.data.isGradient &&
              props.data.type === "linear" &&
              props.data.direction === "top-left",
            "bg-gradient-conic":
              props.data.isGradient && props.data.type === "conic",
            "bg-gradient-radial":
              props.data.isGradient && props.data.type === "radial",
          },
        )}
      >
        <div className="mb-16 grid gap-32">
          {display.title ? (
            <h1
              onDoubleClick={() => setDisplay({ ...display, title: false })}
              className={clsx(
                "w-full border-none bg-transparent font-semibold outline-none",
                {
                  "text-9xl": props.data.isTitleSlide,
                  "text-6xl": !props.data.isTitleSlide,
                },
              )}
            >
              {props.data.title}
            </h1>
          ) : (
            <input
              autoFocus
              value={values.title}
              onChange={(event) =>
                setValues({ ...values, title: event.target.value })
              }
              className={clsx(
                "w-full border-none bg-transparent font-semibold outline-none",
                {
                  "text-9xl": props.data.isTitleSlide,
                  "text-6xl": !props.data.isTitleSlide,
                },
              )}
              onBlur={() => {
                setDisplay({ ...display, subtitle: true });
                props.onSlidesChange(
                  props.slides.map((slide) => {
                    if (slide === props.data) {
                      slide.title = values.title;
                    }

                    return slide;
                  }),
                );
              }}
            />
          )}

          {props.data.isTitleSlide ? (
            display.subtitle ? (
              <h2
                onDoubleClick={() =>
                  setDisplay({ ...display, subtitle: false })
                }
                className="text-6xl font-semibold"
              >
                {props.data.subtitle}
              </h2>
            ) : (
              <input
                autoFocus
                value={values.subtitle}
                onChange={(event) =>
                  setValues({ ...values, subtitle: event.target.value })
                }
                className="w-full border-none bg-transparent text-6xl font-semibold outline-none"
                onBlur={() => {
                  setDisplay({ ...display, subtitle: true });
                  props.onSlidesChange(
                    props.slides.map((slide) => {
                      if (slide === props.data) {
                        slide.subtitle = values.subtitle;
                      }

                      return slide;
                    }),
                  );
                }}
              />
            )
          ) : undefined}
        </div>

        {!props.data.isTitleSlide ? (
          <div className="flex">
            {display.description ? (
              <p
                className="w-full whitespace-pre-wrap text-xl font-thin"
                onDoubleClick={() =>
                  setDisplay({ ...display, description: false })
                }
              >
                {props.data.description}
              </p>
            ) : (
              <textarea
                autoFocus
                value={values.description}
                onChange={(event) =>
                  setValues({ ...values, description: event.target.value })
                }
                className="w-full resize-none border-none bg-transparent text-xl outline-none"
                onBlur={() => {
                  setDisplay({ ...display, description: true });
                  props.onSlidesChange(
                    props.slides.map((slide) => {
                      if (slide === props.data) {
                        slide.description = values.description;
                      }

                      return slide;
                    }),
                  );
                }}
              />
            )}

            <div className={props.font}>{props.snippet()}</div>
          </div>
        ) : undefined}

        <div
          className={clsx(
            "absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-tl ring-2 ring-offset-1",
            props.data.color,
          )}
        >
          {props.pageNum}
        </div>

        {props.author()}
      </section>
    </div>
  );
};

export default Slide;
