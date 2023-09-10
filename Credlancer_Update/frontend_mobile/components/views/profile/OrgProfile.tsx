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
import React, { useState } from "react";
import { useQuery } from "react-query";
import { SelectRoleModal } from "../../Modals/SelectRole";
import { useRouter } from "next/router";
import { OrganizationService } from "../../../services/organization.service";

export const OrganizationUserProfileView = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { data, isLoading } = useQuery(
    ["organization.address", address],
    () => OrganizationService.findOrganizationByAddress(`${address}`),
    {
      enabled: !!address,
      retry: 2,
    }
  );

  return (
    <React.Fragment>
      {isLoading ? (
        <Box textAlign="center">
          <Spinner size="lg" />
        </Box>
      ) : data?.org ? (
        <Grid
          gridTemplateColumns="1fr auto"
          justifyContent="space-between"
          padding="3em"
          gap="1em"
        >
          <GridItem>
            <Grid
              gridTemplateColumns="200px 1fr"
              alignItems="flex-end"
              gap="1em"
              justifyContent="space-between"
            >
              <GridItem>
                <Heading as="h3" fontSize="xl" textAlign="center">
                  {data?.org?.name}
                </Heading>
                <SkeletonCircle
                  size="20"
                  m="auto"
                  mt="4"
                  startColor="pink.500"
                  endColor="orange.500"
                />
              </GridItem>
              <GridItem>
                <Box pb="4">
                  <Heading as="h2" fontSize="larger">
                    Web3 Builder & Full-Stack Developer
                  </Heading>
                  <Text mt="4" color="#E8EDF6" noOfLines={2}>
                    {data?.org?.description ??
                      "Creating In-game graphics, audio engineering, VR"}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem alignSelf="center" justifySelf="center">
            <VStack>
              <Button
                onClick={() => router.push("/quests?tab=1")}
                colorScheme="blue"
              >
                Create Quest
              </Button>
              <Button
                onClick={() => router.push("/quests?tab=0")}
                colorScheme="blue"
                variant="outline"
              >
                View Quests
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      ) : (
        <Box textAlign="center" mx="auto" mt="8">
          <Button
            colorScheme="red"
            onClick={() => router.push(`/profile/update?user=org`)}
          >
            Create Organization Profile
          </Button>
        </Box>
      )}

      <Box px="3em">
        {data?.org ? <Button colorScheme="pink">Connect Discord</Button> : null}
      </Box>

      <Accordion px="3em" mt="8" allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              bg="#321975"
              color="white"
              _hover={{ bg: "#321975" }}
            >
              <Box as="span" flex="1" textAlign="left">
                DAO Analytics
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel bg="#E8EDF6" my="10" py={10} px="24" color="black">
            <HStack
              spacing="24px"
              alignItems="stretch"
              justifyContent="space-evenly"
            >
              {[
                { name: "members", value: 0, display: "Disord Members" },
                { name: "holders", value: 0, display: "NFT Holders" },
                {
                  name: "followers",
                  value: 0,
                  display: "Twitter Followers",
                },
                {
                  name: "transactions",
                  value: 100,
                  display: "Transactions",
                },
              ].map((stat) => (
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  gap="3"
                  color="#0A0017"
                  p="6"
                  borderRadius="6"
                  direction="column"
                  bg="#71DCCC"
                  border="2px solid #E8EDF6"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  key={stat.name}
                  width="fit-content"
                >
                  <Text fontWeight="extrabold">
                    {stat.value.toLocaleString()}
                  </Text>
                  <Text textAlign="center" fontSize="large">
                    {stat.display}
                  </Text>
                </Flex>
              ))}
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </React.Fragment>
  );
};
