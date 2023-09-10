import {
  Box,
  Button,
  Flex,
  Text,
  SkeletonCircle,
  VStack,
  List,
  ListItem,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useAccount } from "wagmi";
import { useQuestContext } from "../../providers/Quest";
import { OrganizationService, QuestService } from "../../services";
import { QuestResponse } from "../../utils/models";
import { ViewSingleQuest } from "../utils";

export const ListQuestsView = () => {
  const { address } = useAccount();
  const { data: org } = useQuery(
    ["organization.address", address],
    () => OrganizationService.findOrganizationByAddress(`${address}`),
    {
      enabled: !!address,
    }
  );
  const { updateSelectedQuest } = useQuestContext()!;
  const { data, isLoading } = useQuery(
    ["quests.orgID", org?.org?.id],
    () => QuestService.fetchQuestByOrgID(org?.org?.id),
    {
      retry: 2,
      enabled: !!org?.org,
      onSuccess: () => updateSelectedQuest(undefined),
    }
  );
  const { data: allQuests } = useQuery("quests", () =>
    QuestService.fetchQuests()
  );

  return isLoading ? (
    <Flex alignItems="center" justifyContent="center">
      <Spinner size="md" />
    </Flex>
  ) : (
    <Grid mt="10" gap="6" gridTemplateColumns="1fr 1fr">
      {org?.org ? (
        data?.quests?.length ? (
          data.quests.map((quest: any) => (
            <GridItem colSpan={1} key={quest.id}>
              <ViewSingleQuest {...quest} />
            </GridItem>
          ))
        ) : null
      ) : allQuests?.quests?.length ? (
        allQuests.quests.map((quest: any) => (
          <GridItem colSpan={1} key={quest.id}>
            <ViewSingleQuest {...quest} />
          </GridItem>
        ))
      ) : (
        <Text size="20" fontWeight="bold" textAlign="center" color="red">
          There are no Quests to display!
        </Text>
      )}
    </Grid>
  );
};
