import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import ProseMirror from "../../plugins/Tiptap/theme";
import ScrollBarTheme from "./scrollbar.theme";
import Frost from "./glass.theme";

const DefaultTheme: ChakraTheme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: "Inter",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      800: "#1A202C",
    },
    brand: {
      400: "#4cc9f0",
      500: "#4361ee",
      600: "#3a0ca3",
    },
  },
  styles: {
    global: (props) => ({
      ...ProseMirror(props),
      ...ScrollBarTheme(props),
      ...Frost(props),
    }),
  },
});

export default DefaultTheme;
