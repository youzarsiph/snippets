import {
  File,
  Color,
  Direction,
  Font,
  Format,
  GradientType,
  Highlight,
  Padding,
  Size,
} from "@/app/types";

type Author = {
  name: string;
  username: string;
  isVisible: boolean;
};

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  isTitleSlide: boolean;
  description: string;
  color: Color;
  isGradient: boolean;
  type: GradientType;
  direction: Direction;
  file: File;
  buttons: { style: boolean; position: boolean };
};

type Settings = {
  font: Font;
  size: Size;
  format: Format;
  theme: boolean;
  quality: number;
  padding: Padding;
  highlight: Highlight;
  displayLineNumbers: boolean;
};

export type { Author, Slide, Settings };
