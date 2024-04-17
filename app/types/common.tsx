import { Fonts } from '@/app/styles'
import { Constants } from '@/app/utils'

type Color = (typeof Constants.colors)[number]

type Direction = (typeof Constants.directions)[number]

type Font = keyof typeof Fonts

type Format = (typeof Constants.formats)[number]

type GradientType = (typeof Constants.types)[number]

type Highlight = (typeof Constants.highlights)[number]

type Language = (typeof Constants.languages)[number]

type Padding = keyof typeof Constants.paddings

type Size = keyof typeof Constants.sizes

export type {
  Color,
  Direction,
  Font,
  Format,
  GradientType,
  Highlight,
  Language,
  Padding,
  Size,
}
