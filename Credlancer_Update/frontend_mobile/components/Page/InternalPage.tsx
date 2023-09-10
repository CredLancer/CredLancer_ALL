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
import type { NextPage } from "next";
import ORGANIZATION_ABI from "../../assets/contracts/OrganizationController.json";
import {
  useAccount,
  useContract,
  useContractWrite,
  usePrepareContractWrite,
  useSendTransaction,
  useSigner,
  useWebSocketProvider,
} from "wagmi";
import { BigNumber } from "@ethersproject/bignumber";
import { ChangeEvent, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { OrganizationService } from "../../services/organization.service";
import Image from "next/image";
import { ORGANIZATION_CONTRACT } from "../../utils/constants";

type ComponentProps = {
  heading: React.ReactNode;
  children: React.ReactNode;
};

export const InternalNavigationPage: React.FC<ComponentProps> = ({
  heading,
  children,
}) => {
  return (
    <Box
      bgGradient="linear(#321975E0 0%, #7D18C2E0 25%, #71DCCC 75%)"
      minH="3xl"
    >
      <Container maxW="4xl" paddingY="2em">
        <Box
          maxW="100%"
          marginX="auto"
          mt="12"
          border="1px solid white"
          bg="black"
        >
          <Flex
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
            padding="10px"
            color="black"
            fontSize="large"
          >
            {heading}
          </Flex>

          <Box p="30px">{children}</Box>
        </Box>
      </Container>
    </Box>
  );
};
