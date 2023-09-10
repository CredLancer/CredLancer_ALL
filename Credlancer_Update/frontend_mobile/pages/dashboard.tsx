import Logo from "../assets/svg/credlancer_logo.svg";
import LogoCred from "../assets/svg/credlancer-cred.svg";
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
  Stack,
  HStack,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useSendTransaction } from "wagmi";
import { BigNumber } from "@ethersproject/bignumber";
import { useMemo, useState } from "react";
import { SelectRoleModal } from "../components/Modals/SelectRole";
import { useRouter } from "next/router";
import { BackHouseLayout } from "../components/Page/BackOfHouseLayout";
import { DashboardLayout } from "../components/Page/DashboardLayout";
import { useQuery } from "react-query";
import {
  LancerService,
  OrganizationService,
  ProposalService,
  QuestService,
} from "../services";
import { ProposalStatus } from "../utils/models";

interface CompletedQuest {
  cid: string;
  title: string;
  description: string;
  skills: { title: string }[];
  id: string;
  value: string;
  status: string;
  questCID: string;
  orgId: string;
  deadline: string;
  blockNumber: number;
}

const Dashboard: NextPage = () => {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const { data: lancer, isLoading: loadingLancer } = useQuery(
    ["lancer.profile", address],
    () => LancerService.fecthLancer(address ?? ""),
    {
      enabled: !!address,
      retry: 2,
    }
  );
  const { data: proposal } = useQuery(
    ["lancer.proposal", address],
    () => ProposalService.fetchProposalsFromLancer(`${address}`),
    {
      enabled: !!address,
    }
  );
  console.log({ proposal });
  const pendingProposals = useMemo(() => {
    if (proposal?.proposals.length) {
      return proposal.proposals.filter(
        ({ status }) =>
          ![ProposalStatus.Awarded, ProposalStatus.Rejected].includes(status)
      );
    }
    return [];
  }, [proposal]);

  if (!isConnected) {
    router.push("/");
    return null;
  }

  const selectedTab = {
    backgroundColor: "white",
    border: "5px solid transparent",
    borderRadius: "0",
    borderColor: "transparent rgba(69, 76, 115, 0.88)",
  };

  console.log({ lancer });

  const credentials: CompletedQuest[] = lancer?.questsCompleted;

  return (
    <DashboardLayout>
      <Box>
        <Tabs variant="unstyled" colorScheme="cyan" defaultIndex={1}>
          <TabList color="#321975" border="5px solid rgba(69, 76, 115, 0.88)">
            <Tab _selected={selectedTab} flex="1" isDisabled>
              My Members
            </Tab>
            <Tab _selected={selectedTab} flex="1">
              Quests & Creds
            </Tab>
            <Tab _selected={selectedTab} flex="1" isDisabled>
              Analytics
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Nothing to see here</TabPanel>
            <TabPanel>
              <Box py="10" px="2">
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        bg="#321975"
                        color="white"
                        _hover={{ bg: "#321975" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Member Creds
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg="#E8EDF6" py={10} px="24" color="black">
                      Member Credentials
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="20px">
                    <h2>
                      <AccordionButton
                        bg="#321975"
                        color="white"
                        _hover={{ bg: "#321975" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Quests Completed
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg="#E8EDF6" py={10} px="24" color="black">
                      {credentials?.length ? (
                        credentials.map(
                          ({ id, orgId, deadline, skills, title }) => {
                            const { data: organization } = useQuery(
                              ["organization.id", orgId],
                              () =>
                                OrganizationService.findOrganizationById(
                                  Number(orgId)
                                ),
                              {
                                enabled: !!orgId,
                              }
                            );
                            return (
                              <Box
                                boxShadow="md"
                                bgGradient="linear(to-b, #7ea1cb, #2c5683)"
                                borderColor={"#9771ff"}
                                borderWidth={"5px"}
                                key={id}
                                w={"200px"}
                                h={"300px"}
                                rounded={"25px"}
                                overflow="hidden"
                              >
                                <VStack pt="15px" px="20px" align={"start"}>
                                  <Logo width="150" height="50" />
                                  <Box
                                    rounded={"50px"}
                                    p="2"
                                    minW="150px"
                                    bg="#9771ff"
                                    noOfLines={1}
                                  >
                                    {title}
                                  </Box>
                                  <Text
                                    color="white"
                                    fontSize={"10px"}
                                    textAlign="start"
                                  >
                                    Issue by: {organization.org.name}
                                  </Text>
                                  <Text
                                    color="white"
                                    fontSize={"10px"}
                                    textAlign="start"
                                  >
                                    Issue Date:{" "}
                                    {new Date(deadline).toLocaleDateString()}
                                  </Text>
                                  <Text
                                    color="white"
                                    fontSize={"10px"}
                                    textAlign="start"
                                  >
                                    Hours Completed: {100}
                                  </Text>
                                  <Text
                                    color="white"
                                    fontSize={"10px"}
                                    textAlign="start"
                                    noOfLines={4}
                                  >
                                    Skills:{" "}
                                    {skills
                                      .map(({ title }) => title)
                                      .join(", ")}
                                  </Text>
                                </VStack>
                              </Box>
                            );
                          }
                        )
                      ) : (
                        <Box color="red" textAlign="center">
                          No Quests Completed Yet
                        </Box>
                      )}
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="20px">
                    <h2>
                      <AccordionButton
                        bg="#321975"
                        color="white"
                        _hover={{ bg: "#321975" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Pending Quests
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg="#E8EDF6" py={10} px="24" color="black">
                      {pendingProposals.length ? (
                        pendingProposals.map(({ questId, quest, proposer }) => {
                          const { data: organization } = useQuery(
                            ["organization.id", quest.orgId],
                            () =>
                              OrganizationService.findOrganizationById(
                                Number(quest.orgId)
                              ),
                            {
                              enabled: !!quest.orgId,
                            }
                          );
                          const { deadline } = quest;
                          const { data } = useQuery(
                            [`Quest-${questId}`, quest.questCID],
                            () => QuestService.fetchQuestByCID(quest.questCID)
                          );
                          return (
                            <Box
                              boxShadow="md"
                              bgGradient="linear(to-b, #7ea1cb, #2c5683)"
                              borderColor={"#9771ff"}
                              borderWidth={"5px"}
                              key={questId}
                              w={"200px"}
                              h={"300px"}
                              rounded={"25px"}
                              overflow="hidden"
                            >
                              <VStack pt="15px" px="20px" align={"start"}>
                                <Logo width="150" height="50" />
                                <Box
                                  rounded={"50px"}
                                  p="2"
                                  minW="150px"
                                  bg="#9771ff"
                                  noOfLines={1}
                                >
                                  {data?.title}
                                </Box>
                                <Text
                                  color="white"
                                  fontSize={"10px"}
                                  textAlign="start"
                                >
                                  Issue by: {organization.org.name}
                                </Text>
                                <Text
                                  color="white"
                                  fontSize={"10px"}
                                  textAlign="start"
                                >
                                  Issue Date:{" "}
                                  {new Date(deadline).toLocaleDateString()}
                                </Text>
                                <Text
                                  color="white"
                                  fontSize={"10px"}
                                  textAlign="start"
                                >
                                  Hours Completed: {100}
                                </Text>
                                <Text
                                  color="white"
                                  fontSize={"10px"}
                                  textAlign="start"
                                  noOfLines={4}
                                >
                                  Skills:{" "}
                                  {data?.skills
                                    .map(({ title }: any) => title)
                                    .join(", ")}
                                </Text>
                              </VStack>
                            </Box>
                          );
                        })
                      ) : (
                        <Box color="red">There are no Pending Quests</Box>
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </TabPanel>
            <TabPanel>Nothing to analyze yet anyway</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
