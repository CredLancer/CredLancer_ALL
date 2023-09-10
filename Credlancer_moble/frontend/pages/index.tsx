import { Box, Button, Container, Flex, Heading, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useSendTransaction } from "wagmi";
import { BigNumber } from "@ethersproject/bignumber";
import { useState } from "react";
import { SelectRoleModal } from "../components/Modals/SelectRole";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { TribeMembers } from "../components/TribeMembers";
import { CompletedQuests } from "../components/CompletedQuests";
import { LeaderBoard } from "../components/LeaderBoard";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";

type QuestType = "create-quest" | "join-quest" | undefined;

const CallToAction = () => {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [openModal, setOpen] = useState<QuestType>();
  const handleCreateQuest = () => {
    setOpen("create-quest");
  };
  const handleJoinQuest = () => {
    setOpen("join-quest");
  };

  const disabled = !isConnected || !address;

  if (openModal) {
    return (
      <SelectRoleModal
        handleClose={() => setOpen(undefined)}
        isOpen={openModal}
      />
    );
  }

  return (
    <Box padding="12" minH="md" mt="200px">
      <Heading fontFamily="Alvotica" textAlign="center" color="#9C1EF3">
        Join a Quest
      </Heading>
      <Heading fontFamily="Alvotica" textAlign="center" color="#9C1EF3">
        Find your Soul Bound Tribe
      </Heading>

      <Flex alignItems="center" justifyContent="center" gap="8" marginTop="10">
        <Button
          onClick={() => !disabled && handleCreateQuest()}
          disabled={disabled}
          colorScheme="blue"
          type="button"
        >
          Create a Quest
        </Button>

        <Button
          colorScheme="blue"
          disabled={disabled}
          onClick={() => !disabled && handleJoinQuest()}
          type="button"
          variant="outline"
        >
          Join a Quest
        </Button>
      </Flex>
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <Box bgGradient="linear(#71DCCC 0%, #71DCCC 25%, #29116c 50%, )">
      <Container>
        <CallToAction />
      </Container>
      <CompletedQuests />
      <LeaderBoard />
      <TribeMembers />
      <Footer />
    </Box>
  );
};

export default Home;
