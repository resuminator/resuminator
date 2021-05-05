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
});

export default DefaultTheme;
