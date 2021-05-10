import { extendTheme } from "@chakra-ui/react";

const DefaultTheme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: "Inter",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      400: "#4cc9f0",
      500: "#4361ee",
      600: "#3a0ca3",
    },
  },
});

export default DefaultTheme;
