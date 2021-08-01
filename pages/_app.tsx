import { ChakraProvider } from "@chakra-ui/react";
/* <--- Resume Font Imports ---> */
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/lora";
import "@fontsource/manrope";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/nunito";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { enableMapSet } from "immer";
/* <--- Resume Font Imports ---> */
import { AppProps } from "next/app";
import Router from "next/router";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AuthProvider } from "../modules/Auth/AuthContext";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";
import progress from "../widgets/ProgressBar";

/*<---Router Events--->*/
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

/* <--- Enabling Immer ---> */
enableMapSet();

function MyApp({ Component, pageProps }: AppProps) {
  //To enable React-Query on SSR
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <AuthProvider>
      <ChakraProvider theme={DefaultTheme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
