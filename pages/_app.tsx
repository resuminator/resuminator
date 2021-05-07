import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/manrope";
import { AppProps } from "next/app";
import Router from "next/router";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";
import progress from "../widgets/ProgressBar";

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
