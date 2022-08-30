import { style, globalStyle } from "@vanilla-extract/css"

export const container = style({
  padding: 0,
})

globalStyle("body", {
  margin: 0,
  WebkitTapHighlightColor: "var(--accent-color)",
})
