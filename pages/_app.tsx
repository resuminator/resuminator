import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/manrope";
import { AppProps } from "next/app";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import AppProvider from "../store/AppProvider";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";
import progress from "../widgets/ProgressBar";

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
