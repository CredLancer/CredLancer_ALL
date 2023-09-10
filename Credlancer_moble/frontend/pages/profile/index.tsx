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
  Spinner,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useSendTransaction } from "wagmi";
import { BigNumber } from "@ethersproject/bignumber";
import { useState } from "react";
import { useQuery } from "react-query";
import { SelectRoleModal } from "../../components/Modals/SelectRole";
import { useRouter } from "next/router";
import { OrganizationService } from "../../services/organization.service";
import {
  LancerUserProfileView,
  OrganizationUserProfileView,
} from "../../components/views";
import { LancerService } from "../../services";

const UserProfile: NextPage = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { data } = useQuery(
    ["organization.address", address],
    () => OrganizationService.findOrganizationByAddress(`${address}`),
    {
      enabled: !!address,
      retry: 2,
    }
  );
  const { data: lancer, isLoading: loadingLancer } = useQuery(
    ["lancer.profile", address],
    () => LancerService.fecthLancer(address ?? ""),
    {
      enabled: !!address,
      retry: 2,
    }
  );

  return (
    <Box bgGradient="linear(#71DCCC 0%, #E8EDF6 25%, #71DCCC 75%)" minH="3xl">
      <Container maxW="6xl" padding="2em">
        <Box
          maxW="100%"
          marginX="auto"
          mt="12"
          border="1px solid white"
          bg="#29116C"
          pb="10"
        >
          <Flex
            backgroundColor="white"
            alignItems="flex-end"
            justifyContent="space-between"
            paddingX="20px"
            paddingY="10px"
          >
            <Heading color="black" fontSize="large" as="h4">
              My Profile
            </Heading>

            <Button
              onClick={() =>
                router.push(`/profile/update?user=${router.query.user}`)
              }
              variant="link"
            >
              {router.query.user === "org"
                ? data?.org
                  ? "Edit Profile"
                  : "Create Profile"
                : null}

              {router.query.user === "lancer"
                ? lancer?.registered
                  ? "Edit Profile"
                  : "Create Profile"
                : null}
            </Button>
          </Flex>

          {router.query.user === "org" && <OrganizationUserProfileView />}

          {router.query.user === "lancer" && (
            <LancerUserProfileView
              isLoading={loadingLancer}
              lancer={lancer?.lancer}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default UserProfile;
