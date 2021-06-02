import { FontsObject } from "./types";

//Keep minimum fontSize as 0.8em and maximum up to 1.2em
const Fonts: FontsObject = {
  CLASSIC: {
    heading: {
      fontFamily: "Inter", //✅ Final
      fontSize: "2xl",
      fontWeight: "light",
    },
    primary: {
      fontFamily: "Inter", 
      fontSize: "1em",
      fontWeight: "semibold",
    },
    secondary: {
      fontFamily: "Inter", 
      fontSize: "0.8em",
    },
    body: {
      fontFamily: "Inter", 
      fontSize: "0.9em",
    },
  },
  MAGAZINE: {
    //✅ Final
    heading: {
      fontFamily: "Lora", 
      fontSize: "xl",
      fontWeight: "bold",
    },
    primary: {
      fontFamily: "Lora",
      fontSize: "1.1em",
      fontWeight: "bold",
    },
    secondary: {
      fontFamily: "Nunito",
      fontSize: "0.85em",
    },
    body: {
      fontFamily: "Nunito",
      fontSize: "0.9em",
    },
  },
  POISE: {
    //✅ Final
    heading: {
      fontFamily: "Poppins", 
      fontSize: "lg",
      fontWeight: "extrabold",
      textTransform: "uppercase",
      letterSpacing: "wider"
    },
    primary: {
      fontFamily: "Poppins", //Final
      fontSize: "1.05em",
      fontWeight: "semibold",
    },
    secondary: {
      fontFamily: "Poppins",
      fontSize: "0.8em",
    },
    body: {
      fontFamily: "Poppins",
      fontSize: "0.8em",
    },
  },
  SENIOR: {
    //✅ Final
    heading: {
      fontFamily: "Inter",
      fontSize: "md",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wide"
    },
    primary: {
      fontFamily: "Georgia",
      fontSize: "1.05em",
      fontWeight: "normal",
    },
    secondary: {
      fontFamily: "Georgia",
      fontSize: "0.8em",
      fontStyle: "italic",
    },
    body: {
      fontFamily: "Georgia",
      fontSize: "0.9em",
    },
  },
};

export default Fonts;
