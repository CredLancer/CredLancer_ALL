import { Box, Container } from "@chakra-ui/react";

type ComponentProps = {
  children: React.ReactNode;
};

export const BackHouseLayout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Container
      bgGradient="linear(#71DCCC 0%, #E8EDF6 30%, #71DCCC 90%)"
      minW="100vw"
      maxW="100vw"
      minH="100vh"
      h="100vh"
      px="0"
    >
      <Box h="100%">{children}</Box>
    </Container>
  );
};
