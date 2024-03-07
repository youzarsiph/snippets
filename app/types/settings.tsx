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

type AuthorSettings = {
  name: string;
  username: string;
  isVisible: boolean;
};

type FileSettings = {
  font: Font;
  file: File;
  highlight: Highlight;
  displayLineNumbers: boolean;
};

type Slide = {
  title: string;
  subtitle: string;
  isTitleSlide: boolean;
  description: string;
  color: Color;
  isGradient: boolean;
  type: GradientType;
  direction: Direction;
  buttons: { style: boolean; position: boolean };
};

type ExportSettings = {
  format: Format;
  quality: number;
};

type Settings = {
  size: Size;
  theme: boolean;
  padding: Padding;
};

export type { AuthorSettings, FileSettings, Slide, ExportSettings, Settings };
