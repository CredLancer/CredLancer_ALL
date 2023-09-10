import {
    Box,
    Button,
    ButtonGroup,
    Container,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  //import { FiSearch } from 'react-icons/fi'
  import { LeaderBoardTable } from '../LeaderBoardTable'
  
  export const LeaderBoard = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
        <Box 
        maxW="7xl"
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
        >

        <Box
          mx="30px"
          bg="bg-surface"
          boxShadow={{ base: 'none', md: useColorModeValue('sm', 'sm-dark') }}
          borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
        >
          <Stack spacing="5">
            <Box pt="5">
              <Stack direction={{ base: 'column', md: 'row' }} justify="space-between">
                <Text fontSize="3xl" fontWeight="medium">
                  Quest Leaderboard
                </Text>
              </Stack>
            </Box>
            <Box overflowX="auto">
              <LeaderBoardTable />
            </Box>
          </Stack>
        </Box>
        </Box>
    )
  }
