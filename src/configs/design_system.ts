import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({
  theme: {
    colors: {
      primary: "#FCC419",
      primary2: "#FFDF7E",
      primary3: "#FFEFBE",
      secondary: "#007AFE",
      secondary2: "#00B8FE",
      secondary3: "#00D8FE",
      black: "#181920",
      black2: "#333333",
      white: "#FFFFFF",
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "15px",
      largeTitle: "52px",
    },
    fonts: {
      ibm: "'IBM Plex Sans Thai Looped', sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
