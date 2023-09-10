import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { capitalize } from "lodash";
import Image from "next/image";
import React from "react";
import * as LancerKnight from "../../assets/pngs/knight-logo.png";
import { useRouter } from "next/router";

interface RoleData {
  name: string;
  id: string;
  href: string;
  logo?: string;
}

const ProfileChoiceBox: React.FC<RoleData & { handleClick?: () => void }> = ({
  name,
  href,
  logo,
  handleClick,
}) => {
  const router = useRouter();

  return (
    <Box
      border="5px solid white"
      borderTopWidth="40px"
      p="20px"
      bg="#29116C"
      textAlign="center"
    >
      <Box
        width="100%"
        onClick={() => {
          router.push(href);
          handleClick?.();
        }}
      >
        <Image src={logo ?? LancerKnight} alt={name} />
      </Box>
      <Text>{capitalize(name)}</Text>
    </Box>
  );
};

const roles: RoleData[] = [
  {
    id: "org",
    name: "Organization",
    href: "/profile?user=org",
  },
  {
    id: "hunter",
    name: "CredLancer",
    href: "/profile?user=lancer",
  },
];

interface ModalProp {
  handleClose: () => void;
}

export const SelectProfileToDisplayModal: React.FC<ModalProp> = ({
  handleClose,
}) => {
  return (
    <Modal isCentered closeOnOverlayClick={false} isOpen onClose={handleClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent background="black" padding="2em" borderRadius="10px">
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Heading textAlign="center" fontFamily="Aclonica">
              View Profile as:
            </Heading>

            <Grid
              mt="12"
              gap="4"
              alignItems="stretch"
              justifyContent="center"
              gridTemplateColumns="repeat(2, 1fr)"
            >
              {roles.map((role) => (
                <GridItem key={role.id}>
                  <ProfileChoiceBox
                    {...role}
                    handleClick={() => handleClose()}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
