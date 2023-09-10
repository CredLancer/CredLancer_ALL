import React, { FC, useState } from "react";
import { Box, Flex, HStack, Link, Stack } from "@chakra-ui/layout";
import Logo from "../../assets/svg/credlancer_logo.svg";
import NextLink from "next/link";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { TribeMembers } from "../TribeMembers";
import { CompletedQuests } from "../CompletedQuests";
import { Button, Input } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { SelectRoleModal } from "../Modals/SelectRole";
import { SelectProfileToDisplayModal } from "../Modals";
// import { useWallet } from '../../context/wallet-provider'

export const Page: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { isConnected } = useAccount();
  const [openModal, setOpen] = useState(false);
  const router = useRouter();

  if (openModal) {
    return <SelectProfileToDisplayModal handleClose={() => setOpen(false)} />;
  }

  return (
    <>
      <Flex direction="column">
        <Box w="full" bg="#454C73E0">
          <Stack w="full" direction={["column", "column", "row"]} px="2" py="4">
            <HStack w="full" justifyContent="space-between">
              <Box fontWeight="bold" fontSize={[20, 20, 20]}>
                <NextLink href="/" passHref>
                  <Link className="center flex gap-2">
                    <Logo width="150" height="50" />
                  </Link>
                </NextLink>
              </Box>

              <Box>
                <Input type="search" placeholder="search" />
              </Box>

              <Flex gap="6">
                {isConnected && (
                  <Button colorScheme="blue" onClick={() => setOpen(true)}>
                    Profile
                  </Button>
                )}
                {/* 
                {isConnected && (
                  <Button
                    colorScheme="blue"
                    onClick={() => router.push("/lancer/update")}
                  >
                    Lancer Profile
                  </Button>
                )} */}

                <ConnectButton label="Join Us" />
              </Flex>
            </HStack>
          </Stack>
        </Box>
        <>{children}</>
      </Flex>
    </>
  );
};
