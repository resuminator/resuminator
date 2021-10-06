/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { FontsObject } from "./types";

//Keep minimum fontSize as 0.8em and maximum up to 1.2em
const Fonts: FontsObject = {
  CLASSIC: {
    headerTitle: {
      fontFamily: "Inter",
      fontSize: "4xl",
      fontWeight: "normal",
      letterSpacing: "tight"
    },
    headerSubtitle: {
      fontFamily: "Inter",
      fontSize: "xl",
      fontWeight: "medium"
    },
    heading: {
      fontFamily: "Inter", //✅ Final
      fontSize: "1.3em",
      fontWeight: "normal"
    },
    primary: {
      fontFamily: "Inter",
      fontSize: "1em",
      fontWeight: "medium"
    },
    secondary: {
      fontFamily: "Inter",
      fontSize: "0.8em"
    },
    body: {
      fontFamily: "Inter",
      fontSize: "0.9em",
      fontWeight: "normal"
    }
  },
  MAGAZINE: {
    //✅ Final
    headerTitle: {
      fontFamily: "Lora",
      fontSize: "4xl",
      fontWeight: "light"
    },
    headerSubtitle: {
      fontFamily: "Nunito",
      fontSize: "xl",
      fontWeight: "bold"
    },
    heading: {
      fontFamily: "Lora",
      fontSize: "xl",
      fontWeight: "bold"
    },
    primary: {
      fontFamily: "Lora",
      fontSize: "1.1em",
      fontWeight: "bold"
    },
    secondary: {
      fontFamily: "Nunito",
      fontSize: "0.85em"
    },
    body: {
      fontFamily: "Nunito",
      fontSize: "0.9em",
      fontWeight: "normal"
    }
  },
  POISE: {
    //✅ Final

    headerTitle: {
      fontFamily: "Poppins",
      fontSize: "4xl",
      fontWeight: "bold"
    },
    headerSubtitle: {
      fontFamily: "Poppins",
      fontSize: "xl",
      fontWeight: "medium"
    },
    heading: {
      fontFamily: "Poppins",
      fontSize: "lg",
      fontWeight: "extrabold",
      textTransform: "uppercase"
    },
    primary: {
      fontFamily: "Poppins", //Final
      fontSize: "1.05em",
      fontWeight: 500
    },
    secondary: {
      fontFamily: "Poppins",
      fontSize: "0.8em"
    },
    body: {
      fontFamily: "Poppins",
      fontSize: "0.85em",
      fontWeight: "normal"
    }
  },
  SENIOR: {
    //✅ Final
    headerTitle: {
      fontFamily: "PT Serif",
      fontSize: "4xl",
      fontWeight: "light"
    },
    headerSubtitle: {
      fontFamily: "Inter",
      fontSize: "xl",
      fontWeight: "semibold"
    },
    heading: {
      fontFamily: "Inter",
      fontSize: "md",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wide"
    },
    primary: {
      fontFamily: "PT Serif",
      fontSize: "1em",
      fontWeight: "normal"
    },
    secondary: {
      fontFamily: "PT Serif",
      fontSize: "0.85em",
      fontStyle: "italic"
    },
    body: {
      fontFamily: "PT Serif",
      fontSize: "0.85em",
      fontWeight: "normal"
    }
  }
};

export default Fonts;
