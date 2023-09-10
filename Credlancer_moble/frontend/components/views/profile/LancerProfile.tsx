import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  SkeletonCircle,
  HStack,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { LancerService } from "../../../services";

interface Props {
  lancer?: any;
  isLoading: boolean;
}

export const LancerUserProfileView: React.FC<Props> = ({
  lancer,
  isLoading,
}) => {
  const router = useRouter();
  console.log({ lancer });

  return (
    <React.Fragment>
      {isLoading ? (
        <Box textAlign="center">
          <Spinner size="lg" />
        </Box>
      ) : lancer?.registered ? (
        <Grid
          gridTemplateColumns="1fr auto"
          justifyContent="space-between"
          gap="2em"
          p="2em"
        >
          <GridItem>
            <Grid
              gridTemplateColumns="200px 1fr"
              alignItems="flex-end"
              gap="1em"
              justifyContent="space-between"
            >
              <GridItem>
                <Heading as="h3" fontSize="xl" textAlign="center">
                  {lancer?.name}
                </Heading>
                <SkeletonCircle
                  size="20"
                  m="auto"
                  mt="4"
                  startColor="pink.500"
                  endColor="orange.500"
                />
              </GridItem>
              <GridItem>
                <Box>
                  <Heading>Industry</Heading>
                  <Text>{lancer?.description}</Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem alignSelf="center" justifySelf="center">
            <Button onClick={() => router.push("/quests")} colorScheme="blue">
              View Quests
            </Button>
          </GridItem>
        </Grid>
      ) : (
        <Box mt="8" mx="auto" textAlign="center">
          <Button
            onClick={() => router.push(`/profile/update?user=lancer`)}
            colorScheme="red"
          >
            Create Lancer Profile
          </Button>
        </Box>
      )}

      <HStack spacing="24px" p="4" mx="6" my="10"></HStack>
    </React.Fragment>
  );
};
