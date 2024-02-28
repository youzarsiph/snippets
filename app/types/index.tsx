import Account from "@/app/types/Account";
import Code from "@/app/types/Code";
import {
  Color,
  Direction,
  Font,
  GradientType,
  Highlight,
  Language,
  Padding,
  Size,
} from "@/app/types/common";

type CodeSettings = {
  font: Font;
  tabs: Code[];
  active: number;
  highlight: Highlight;
  displayLineNumbers: boolean;
};

type ContainerSettings = {
  size: Size;
  theme: boolean;
  color: Color;
  padding: Padding;
  isGradient: boolean;
  type: GradientType;
  direction: Direction;
  buttons: { style: boolean; position: boolean };
};

export type {
  Account,
  Code,
  CodeSettings,
  ContainerSettings,
  Color,
  Direction,
  Font,
  GradientType,
  Highlight,
  Language,
  Padding,
  Size,
};
