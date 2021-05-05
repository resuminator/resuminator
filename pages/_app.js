import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/manrope";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
