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

import { ChakraProvider } from "@chakra-ui/react";
/* <--- Resume Font Imports ---> */
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/lora";
import "@fontsource/manrope";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/nunito";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/pt-serif";
import { enableMapSet } from "immer";
/* <--- Resume Font Imports ---> */
import { AppProps } from "next/app";
import Router from "next/router";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AuthProvider } from "../modules/Auth/AuthContext";
import SEO from "../modules/SEO";
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
