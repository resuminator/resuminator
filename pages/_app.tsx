import { ChakraProvider } from "@chakra-ui/react";
//-------------Resume Font Imports-----------
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/manrope";
import "@fontsource/nunito";
import "@fontsource/lora";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
//-------------Resume Font Imports-----------
import { AppProps } from "next/app";
import Router from "next/router";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";
import progress from "../widgets/ProgressBar";

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ChakraProvider theme={DefaultTheme}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
