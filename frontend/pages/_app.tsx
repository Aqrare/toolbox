import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ExternalProvider, Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import theme from "../lib/theme";

const App = ({ Component, pageProps }: AppProps) => {
  function getLibrary(provider: ExternalProvider) {
    return new Web3Provider(provider, "any");
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />;
      </ChakraProvider>
    </Web3ReactProvider>
  );
};

export default App;
