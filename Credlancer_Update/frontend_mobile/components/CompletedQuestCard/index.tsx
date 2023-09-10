import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { CompletedQuest } from "../../data/CompletedQuestsData";

interface Props {
  completedQuest: CompletedQuest;
  rootProps?: BoxProps;
}

export const CompletedQuestCard = (props: Props) => {
  const { completedQuest, rootProps } = props;
  return (
    <Box
      position="relative"
      key={completedQuest.name}
      borderRadius="xl"
      overflow="hidden"
      maxW="sm"
      width={{ base: "xm", lg: "xm" }}
      minH={{ base: "sm", lg: "sm" }}
      {...rootProps}
    >
      <Box>
        <Image
          src={completedQuest.imageUrl}
          height="250px"
          mx="auto"
          objectFit="cover"
          alt={completedQuest.name}
          fallback={<Skeleton />}
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 47.92%, #000000 100%)"
          boxSize="full"
        />
        <Flex
          color="white"
          direction="column-reverse"
          position="absolute"
          inset="0"
          boxSize="full"
          px={{ base: "4", md: "8" }}
          py={{ base: "6", md: "8", lg: "10" }}
        >
          <Stack spacing="5">
            <Stack spacing="1">
              <Heading fontSize="2xl" fontWeight="extrabold">
                {completedQuest.name}
              </Heading>
            </Stack>
            <HStack>
              <Link fontSize="lg" fontWeight="bold" textDecoration="underline">
                View More
              </Link>
              <Icon as={ChevronRightIcon} />
            </HStack>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
