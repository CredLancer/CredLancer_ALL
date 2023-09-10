/* eslint-disable @next/next/no-img-element */
import NextLink from "next/link";
import Logo from "../../assets/svg/credlancer_logo.svg";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavDrawerItem, NavItem } from "./NavItem";
import { useAccount } from "wagmi";

export const Header = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { isConnected } = useAccount();

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Portfolio",
      href: "/portfolio",
    },
    {
      text: "Organization",
      href: "/dashboard?user=org",
      disabled: !isConnected,
    },
    {
      text: "Freelancer",
      href: "/lancerDashboard?user=lancer",
      disabled: !isConnected,
    },
  ];

  return (
    <Box bg="black">
      <Stack direction={["column", "column", "row"]} px={2} py={4}>
        <HStack
          justifyContent={["space-between"]}
          w={"full"}
          px={{ base: 0, lg: "2rem" }}
        >
          <Box fontWeight="bold" fontSize={[20, 20, 20]}>
            <NextLink href="/" passHref>
              <Link className="center flex gap-2">
                <Logo width="150" height="50" />
              </Link>
            </NextLink>
          </Box>

          <HStack>
            <HStack
              px={[4, 4, 0]}
              display={["none", "none", "none", "flex"]}
              gap={{ lg: "0.4rem", xl: "1.5rem" }}
              mr={4}
            >
              {navItems.map((navItem, index) => (
                <NavItem
                  key={index}
                  href={navItem.disabled ? "" : navItem.href}
                >
                  <Text className="capitalize">{navItem.text}</Text>
                </NavItem>
              ))}
            </HStack>

            {/* Connect Wallet Button */}
            <ConnectButton label="Join Us" />

            {/* Drawer Toggle Button */}
            <Button
              backgroundColor="transparent"
              display={["flex", "flex", "flex", "none"]}
              color="white"
              _hover={{
                backgroundColor: "#121212",
              }}
              borderRadius="100%"
              onClick={onOpen}
            >
              {isOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <HamburgerIcon className="w-5 h-5" />
              )}
            </Button>
          </HStack>
        </HStack>
      </Stack>

      {/* Mobile Navbar */}
      <Drawer
        placement={"top"}
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody background="#1F1B24" px={2}>
            {/* Top Wrapper */}
            <Box
              fontWeight="bold"
              display="flex"
              justifyContent="space-between"
              width="100%"
              paddingX="0.5rem"
              paddingTop="0.5rem"
              marginBottom="3rem"
              fontSize={[20, 20, 20]}
            >
              <NextLink passHref href="/">
                <Link className="center flex gap-2">
                  <Logo width="150" height="50" />
                  <span className="text-xl">CredQuest</span>
                </Link>
              </NextLink>

              {/* Wallet and Close Button Wrapper */}
              <Flex gap="0.5rem">
                {/* Close Icon */}
                <Button
                  backgroundColor="transparent"
                  color="white"
                  paddingX={0}
                  _hover={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  borderRadius="100%"
                  onClick={onToggle}
                >
                  <CloseIcon className="w-7 h-7" />
                </Button>
              </Flex>
            </Box>

            {/* Mapping through Links */}
            {navItems.map((navItem, index) => (
              <NavDrawerItem onClick={onToggle} key={index} href={navItem.href}>
                <Flex alignItems="center" gap={2}>
                  <Text padding="0" fontSize={"2rem"}>
                    {navItem.text}
                  </Text>
                </Flex>
              </NavDrawerItem>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
