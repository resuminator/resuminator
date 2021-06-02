import { FontsObject } from "./types";

const Fonts: FontsObject = {
  CLASSIC: {
    primary: {
      fontFamily: "Inter", //Final
      fontSize: "1em",
      fontWeight: "medium",
    },
    secondary: {
      fontFamily: "Inter",
      fontSize: "0.8em",
    },
    body: {
      fontFamily: "Inter",
      fontSize: "0.9em",
    }
  },
  MAGAZINE: {
    primary: {
      fontFamily: "Nunito",
      fontSize: "1.0em",
      fontWeight: 700,
    },
    secondary: {
      fontFamily: "Lora",
      fontSize: "0.9em",
      fontStyle: "italic",
    },
    body: {
      fontFamily: "Nunito",
      fontSize: "0.9em",
    }
  },
  POISE: {
    primary: {
      fontFamily: "Cambria", //Final
      fontSize: "1.1em",
      fontWeight: "semibold",
    },
    secondary: {
      fontFamily: "Cambria",
      fontSize: "0.9em",
      fontStyle: "italic",
    },
    body: {
      fontFamily: "Nunito",
      fontSize: "0.9em",
    }
  },
  SENIOR: {
    primary: {
      fontFamily: "Didot",
      fontSize: "1.2em",
      fontWeight: "semibold",
    },
    secondary: {
      fontFamily: "Didot",
      fontSize: "1em",
      fontStyle: "italic"
    },
    body: {
      fontFamily: "Nunito",
      fontSize: "0.9em",
    }
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
    body: {
      fontFamily: "Nunito",
      fontSize: "0.9em",
    }
  },
};

export default Fonts;
