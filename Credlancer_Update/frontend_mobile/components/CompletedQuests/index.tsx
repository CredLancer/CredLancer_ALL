import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { CompletedQuestCard } from '../CompletedQuestCard'
  import { completedQuests } from '../../data/CompletedQuestsData';

  export const CompletedQuests = () => (
    <Box 
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Box
      bg="black"
      maxW="6xl"
      mx="auto"
      height="45px"
      borderWidth='1px'
      borderColor='white'
      >
    </Box>
    <Box
      bg="#29116c"
      maxW="6xl"
      mx="auto"
      borderWidth='1px'
      borderColor='white'
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack spacing={{ base: '8', md: '12', lg: '16' }}>
        <Flex
          justify="space-between"
          align={{ base: 'start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Heading size="lg">Completed Quests</Heading>
          <HStack spacing={{ base: '2', md: '3' }}>
            <Link
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="bold"
              color="#CE4CDF"
              >
              See all Completed Quests
            </Link>
            <Icon
              as={ChevronRightIcon}
              color={useColorModeValue('pink.500', 'pink.300')}
              fontSize={{ base: 'sm', md: 'md' }}
            />
          </HStack>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '8', lg: '16' }}>
          {completedQuests.map((completedQuest) => (
            <CompletedQuestCard key={completedQuest.name} completedQuest={completedQuest} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
    </Box>
  )