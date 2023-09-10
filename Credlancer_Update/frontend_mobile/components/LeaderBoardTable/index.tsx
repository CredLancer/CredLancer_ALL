import {
    Avatar,
    Badge,
    Box,
    Checkbox,
    HStack,
    VStack,
      Icon,
    IconButton,
    Table,
    TableProps,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react'
  import * as React from 'react'
  //import { FiEdit2, FiTrash2 } from 'react-icons/fi'
  //import { IoArrowDown } from 'react-icons/io5'
  import { Rating } from '../Rating'
  import { leaderBoardLancers } from '../../data/LeaderboardData'
  
  export const LeaderBoardTable = (props: TableProps) => (
    <Table {...props}>
      <Tbody>
        {leaderBoardLancers.map((leaderBoardLancer) => (
          <Tr key={leaderBoardLancer.id}>
            <Td>
              <HStack spacing="3">
                <Avatar name={leaderBoardLancer.name} src={leaderBoardLancer.avatarUrl} boxSize="20" />
                <Box>
                  <Text fontWeight="medium">{leaderBoardLancer.name}</Text>
                  <Text color="muted">{leaderBoardLancer.handle}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Text color="muted">{leaderBoardLancer.role}</Text>
            </Td>
            <Td>
                <HStack spacing="44px" p="4" mx="6" my="10">
                    <Box w="fit-content">
                        <VStack verticalAlign="top">
                            <Text fontWeight="extrabold">43.5k</Text>
                            <Text>Twitter</Text>
                            <Text>Followers</Text>
                        </VStack>
                    </Box>
                    <Box w="fit-content">
                        <VStack>
                            <Text fontWeight="extrabold">0</Text>
                            <Text>Discord</Text>
                            <Text>Members</Text>
                        </VStack>
                    </Box>
                    <Box w="fit-content">
                        <VStack>
                            <Text fontWeight="extrabold">0k</Text>
                            <Text>Holders</Text>
                            <Text></Text>
                        </VStack>
                    </Box>
                    <Box w="fit-content">
                        <VStack>
                            <Text fontWeight="extrabold">50.5k</Text>
                            <Text>Transactions</Text>
                            <Text></Text>
                        </VStack>
                    </Box>
                </HStack>
            </Td>
            {/* <Td>
              <HStack spacing="1">
                <IconButton
                  icon={<FiTrash2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Delete member"
                />
                <IconButton
                  icon={<FiEdit2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Edit member"
                />
              </HStack>
            </Td> */}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )