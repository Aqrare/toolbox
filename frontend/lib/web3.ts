import { InjectedConnector } from "@web3-react/injected-connector";



export const injected = new InjectedConnector({});

export const getNetworkFromChainId = (chainId: number) => {
  let chainName = "";
  if (chainId == 4) {
    chainName = "rinkeby";
  }
  if (chainId == 5) {
    chainName = "goerli";
  }
  return chainName;
};
