import { FontsObject } from "./types";

const Fonts: FontsObject = {
  CLASSIC: {
    primary: {
      fontFamily: "Inter",
      fontSize: "12pt",
      fontWeight: "medium"
    },
    secondary: {
      fontFamily: "Inter",
      fontSize: "10pt",
    },
  },
  MAGAZINE: {
    primary: {
      fontFamily: "Garamond",
      fontSize: "14pt",
      fontWeight: "semibold"
    },
    secondary: {
      fontFamily: "Garamond",
      fontSize: "12pt",
      fontStyle: "italic"
    },
  },
  POISE: {
    primary: {
      fontFamily: "Cambria",
      fontSize: "14pt",
      fontWeight: "semibold"
    },
    secondary: {
      fontFamily: "Cambria",
      fontSize: "11pt",
      fontStyle: "italic"
    },
  },
  SENIOR: {
    primary: {
      fontFamily: "Inter",
      fontSize: "14pt",
    },
    secondary: {
      fontFamily: "Inter",
      fontSize: "11pt",
    },
  },
  SPACE: {
    primary: {
      fontFamily: "Inter",
      fontSize: "14pt",
    },
    secondary: {
      fontFamily: "Inter",
      fontSize: "11pt",
    },
  },
};

export default Fonts;
