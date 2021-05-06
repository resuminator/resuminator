import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/manrope";
import { AppProps } from "next/app";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
