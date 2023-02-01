import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  useDisclosure,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import { injected } from "../lib/web3";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMetamask } from "use-metamask";
import { ethers } from "ethers";
import { Web3Resolver } from "web3-domain-resolver";
import * as sigUtil from "@metamask/eth-sig-util";
import * as ethUtil from "ethereumjs-util";
import { useWeb3Modal, Web3Button } from "@web3modal/react";

const Unstoppable = () => {
  const web3resolver = new Web3Resolver();
  const { activate, library, account } = useWeb3React<Web3Provider>();
  // const { metaState } = useMetamask();
  const [publicKey, setPublicKey] = useState("");
  const [domain, setDomain] = useState("");
  const [address, setAddress] = useState("");
  const requestPublicKey = async (account: string) => {
    const result = await (window as any).ethereum.send(
      "eth_getEncryptionPublicKey",
      [account]
    );
    return result.result;
  };
  const connect = async () => {
    activate(injected);
  };

  const handleAddressChange = (e: any) => {
    const inputValue = e.target.value;
    setDomain(inputValue);
  };

  // Use the mainnet

  // Specify your own API keys
  // Each is optional, and if you omit it the default
  // API key for that service will be used.
  
  const ens = async () => {
    const provider = new ethers.providers.InfuraProvider(("homestead"), [
      "bc8701cbe1834b4c88966c78c6d3aab0",
    ]);
    const address = await provider
      .resolveName("0xyuzu.eth");
    console.log(address);
  };

  const freename = async() => {
    const resolvedDomain = await web3resolver.resolve("takumi.hosokawa");
    console.log(resolvedDomain.ownerAddress, "domain");
  } 


  const search = async () => {
    // Get domain information from API
    const check = domain.indexOf(".");
    let address = domain;
    if (check !== -1) {
      console.log("The string contains a period.");
      // Fetch address from Unstoppable Domain
      let afterDot = domain.substring(check + 1);
      let [nextWord] = afterDot.split(" ");
      if (nextWord == "crypto") {
        const resp = await fetch(
          `https://resolve.unstoppabledomains.com/domains/${domain}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer 26745ce7-3efc-42f7-bda0-691c559f48b7",
            },
          }
        );
        
        const data = await resp.json();
        console.log(data.records);
        // const text = await resp.text();
        // console.log(text)
        address = data.meta.owner;
      } else if (nextWord == "eth") {
        const provider = new ethers.providers.InfuraProvider("homestead", [
          "bc8701cbe1834b4c88966c78c6d3aab0",
        ]);
        address = await provider.resolveName("0xyuzu.eth");
      } else {
        address = "invalid";
      }
    }
    setAddress(address);
    console.log(address);
    // set address to address
  };

  // const web3 = metaState.web3 as providers.Web3Provider;
  return (
    <div>
      <Input onChange={handleAddressChange}></Input>
      <Button onClick={search}>Search</Button>
      {address && <Text>{address}</Text>}
      <Button onClick={ens}></Button>
      <Button onClick={freename}>Freename</Button>
    </div>
  );
};

export default Unstoppable;
