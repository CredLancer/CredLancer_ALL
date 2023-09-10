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
//import { FaChevronRight } from 'react-icons/fa'

import { ChevronRightIcon } from "@chakra-ui/icons";
import { TribeMember } from "../../data/TribeMembersData";

interface Props {
  tribeMember: TribeMember;
  rootProps?: BoxProps;
}

export const TribeMemberCard = (props: Props) => {
  const { tribeMember, rootProps } = props;
  return (
    <Box
      position="relative"
      key={tribeMember.name}
      borderRadius="3xl"
      overflow="hidden"
      maxW="sm"
      width={{ base: "xm", lg: "xm" }}
      height={{ base: "sm", lg: "sm" }}
      {...rootProps}
    >
      <Box>
        <Image
          src={tribeMember.imageUrl}
          borderRadius="full"
          height="250px"
          mx="auto"
          objectFit="cover"
          alt={tribeMember.name}
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
                {tribeMember.name}
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
