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

import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import ProseMirror from "../../plugins/Tiptap/theme";
import ScrollBarTheme from "./scrollbar.theme";
import Frost from "./glass.theme";

const DefaultTheme: ChakraTheme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: "Inter"
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  colors: {
    gray: {
      800: "#1A202C"
    },
    brand: {
      400: "#4cc9f0",
      500: "#4361ee",
      600: "#3a0ca3"
    }
  },
  styles: {
    global: (props) => ({
      ...ProseMirror(props),
      ...ScrollBarTheme(props),
      ...Frost(props)
    })
  }
});

export default DefaultTheme;
