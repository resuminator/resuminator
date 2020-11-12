/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import indigo from "@material-ui/core/colors/indigo"
import pink from "@material-ui/core/colors/pink"

export const resuminator = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: {
        primary: "Karla",
        secondary: "Roboto"
      }
    },
    spacing: 8,
    palette: {
      type: "light",
      primary: {
        light: "#534bae",
        main: indigo[900],
        dark: "#000051",
      },
      secondary: {
        main: pink["A100"],
        light: "#ff79b0",
        dark: "#c60055",
      },
      text: {
        primary: "#424242",
        secondary: "#919DF2",
      },
      contrast: {
        main: "#e0e0e0",
        light: "#fffafa",
      },
      contrastThreshold: 5,
      tonalOffset: 0.2,
    },
  })
)