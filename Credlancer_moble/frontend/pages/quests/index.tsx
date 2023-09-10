import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { DashboardLayout } from "../../components/Page/DashboardLayout";
import { CreateQuestView, ListQuestsView } from "../../components/views";
import { useState } from "react";
import { QuestResponse } from "../../utils/models";
import { useQuestContext } from "../../providers/Quest";

const ViewQuests: NextPage = () => {
  const { editingQuest, updateEditQuestStatus } = useQuestContext()!;
  const { isConnected } = useAccount();
  const router = useRouter();
  const tab = router.query.tab as string;

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

  return (
    <DashboardLayout>
      <Tabs
        variant="unstyled"
        colorScheme="cyan"
        index={editingQuest ? 1 : undefined}
        defaultIndex={Number(tab) || 0}
        onChange={(tab) => updateEditQuestStatus(undefined)}
        isLazy
      >
        <TabList color="#321975" border="5px solid rgba(69, 76, 115, 0.88)">
          <Tab flex="1" _selected={selectedTab}>
            View Quests
          </Tab>
          <Tab flex="1" _selected={selectedTab}>
            Create Quest
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box h="100%" p="12" color="black.2" bg="#E8EDF6">
              <ListQuestsView />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              h="100%"
              p="12"
              w="full"
              maxW="800px"
              mx="auto"
              color="black.2"
              bg="#c9c9c9"
              borderRadius={7}
            >
              <CreateQuestView />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardLayout>
  );
};

export default ViewQuests;
