import {
  Code,
  Color,
  Direction,
  Font,
  Format,
  GradientType,
  Highlight,
  Padding,
  Size,
} from '@/app/types'

type Author = {
  name: string
  username: string
  isVisible: boolean
}

type CodeSettings = {
  tab: Code
  font: Font
  highlight: Highlight
  displayLineNumbers: boolean
}

type ContainerSettings = {
  size: Size
  theme: boolean
  color: Color
  padding: Padding
  isGradient: boolean
  type: GradientType
  direction: Direction
  buttons: { style: boolean; position: boolean }
}

type ExportSettings = {
  format: Format
  quality: number
}

export type { Author, CodeSettings, ContainerSettings, ExportSettings }
