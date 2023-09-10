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
  disabled?: (mode?: string) => boolean;
}

const DisplayRoleBox: React.FC<RoleData & { isActive?: boolean }> = ({
  name,
  href,
  logo,
  isActive,
}) => {
  const router = useRouter();

  return isActive ? (
    <Box
      border="5px solid white"
      borderTopWidth="40px"
      p="20px"
      bg="#29116C"
      textAlign="center"
    >
      <Box width="100%" onClick={() => isActive && router.push(href)}>
        <Image src={logo ?? LancerKnight} alt={name} />
      </Box>
      <Text>{capitalize(name)}</Text>
    </Box>
  ) : null;
};

const roles: RoleData[] = [
  {
    id: "org",
    name: "organization",
    href: "/quests?tab=1",
    disabled: (mode) => mode === "create-quest",
  },
  {
    id: "hunter",
    name: "credlancer",
    href: "/quests?tab=0",
    disabled: (mode) => mode === "join-quest",
  },
];

interface ModalProp {
  handleClose: () => void;
  isOpen?: string;
}

export const SelectRoleModal: React.FC<ModalProp> = ({
  handleClose,
  isOpen,
}) => {
  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={!!isOpen}
      onClose={handleClose}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent background="black" padding="2em" borderRadius="10px">
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Heading textAlign="center" fontFamily="Aclonica">
              Join as a:
            </Heading>

            <Grid
              mt="12"
              gap="4"
              alignItems="center"
              justifyContent="center"
              gridTemplateColumns="repeat(autofit, 1fr)"
            >
              {roles.map((role) => (
                <GridItem key={role.id}>
                  <DisplayRoleBox
                    {...role}
                    isActive={role.disabled?.(isOpen)}
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
