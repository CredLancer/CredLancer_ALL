import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

interface PageProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const QuestDisplayPage: React.FC<PageProps> = ({ header, children }) => {
  return (
    <Container>
      <Box border="2px solid white.2" borderRadius="4px">
        <Box textAlign="center" px="3" py="1" color="black.2" bgColor="white.2">
          {header}
        </Box>

        <Box bg="black.2">{children}</Box>
      </Box>
    </Container>
  );
};
