import {
    Box,
    Button,
    Flex,
    SkeletonCircle,
    Spinner,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useQuery } from "react-query";
  import { QuestService } from "../../services";
  
  interface ComponentProps {
    title: string;
    description: string;
    id: number;
    questCID: string;
    status: string;
    orgId: number;
    value: number;
    blockNumber?: number;
    deadline?: number;
  }
  
  export const ViewSingleLancerQuest: React.FC<ComponentProps> = (quest: ComponentProps) => {

    const questCID = quest.questCID;
    const questID = quest.id;
    const isOpen : boolean = (quest.status == 'Open');

    const { data, isLoading } = useQuery([`Quest-${questID}`, questCID], () =>
      QuestService.fetchQuestByCID(questCID)
    );

    const applyQuest = (input: string) => {
      console.log(input);
    } 

    const completeQuest = (input: string) => {
      console.log(input);
    } 
    
    return isLoading ? (
      <Spinner />
    ) : (
      <Flex alignItems="stretch" justifyContent="flex-start" gap="4">
        <Box>
          <SkeletonCircle size="20" />
        </Box>
  
        <Box
          as={Flex}
          flex="1"
          display="flex"
          direction="column"
          alignItems="flex-start"
          justifyContent="space-evenly"
        >
          <Text fontWeight="bold">{data.title}</Text>
          <Text noOfLines={2} mt="3">
            {data.description}
          </Text>
        </Box>
  
        <VStack>
          <span>{isOpen}</span>
          { isOpen ? 
          (<Button
            onClick={() => applyQuest(questCID)}
            colorScheme="pink"
            w="100%"
          >
            Apply
          </Button>) 
          : (
            <Button
            onClick={() => completeQuest(questCID)}
            colorScheme="pink"
            w="100%"
          >
            Complete
          </Button>
          )
          
            }
          
          <Button onClick={() => console.log({ questID })} colorScheme="teal" w="100%">
            View
          </Button>
        </VStack>
      </Flex>
    );
  };
  