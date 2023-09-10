import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Link,
    SkeletonCircle,
    HStack,
    VStack,
    Square,
    Input,
    FormLabel,
    VisuallyHiddenInput,
    FormControl,
    Select,
    Spinner,
  } from "@chakra-ui/react";

  import { ListLancerQuestsView } from "../../components/views";

  import type { NextPage } from "next";
  import ORGANIZATION_ABI from "../../assets/contracts/OrganizationController.json";
  import {
    useAccount,
    useContract,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSendTransaction,
    useSigner,
    useWebSocketProvider,
  } from "wagmi";
  import { BigNumber } from "@ethersproject/bignumber";
  import { ChangeEvent, useMemo, useState } from "react";
  import { useRouter } from "next/router";
  import { useForm } from "react-hook-form";
  import { useMutation } from "react-query";
  import { LancerService } from "../../services/lancer.service";
  import Image from "next/image";
  //import { ORGANIZATION_CONTRACT } from "../../utils/constants";
  import { InternalNavigationPage } from "../../components/Page/InternalPage";
  
  import { useSignMessage } from 'wagmi'
  import { verifyMessage } from 'ethers/lib/utils'
  import { useQuery } from "react-query";
  
  import { BASE_URL } from "../../utils/constants";
  
  type LogoInfo = {
    size: number;
    name: string;
    image: string;
  };
  
  const LancerQuests: NextPage = () => {

    return (
      <InternalNavigationPage
        heading={
          <Heading color="black" fontSize="large" as="h4">
            My Quests
          </Heading>
        }
      >
        <Heading as="h4" textAlign={`center`}>
          Available Quests
        </Heading>
        
        <ListLancerQuestsView />

      </InternalNavigationPage>
    );
  };
  
  export default LancerQuests;
  