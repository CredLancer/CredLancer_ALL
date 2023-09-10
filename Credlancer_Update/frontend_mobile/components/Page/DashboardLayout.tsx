import { Box, Flex, List, Link, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { BackHouseLayout } from "./BackOfHouseLayout";

type SidebarLink = {
  name: string;
  path: string;
  disabled?: boolean;
};

const sidebarLinks: SidebarLink[] = [
  { name: "My Info", path: "/dashboard" },
  { name: "Quest Board", path: "/quests" },
  { name: "Community", path: "/community", disabled: true },
  { name: "Messages", path: "/messages", disabled: true },
  { name: "Wallet", path: "/wallet", disabled: true },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box pt="24">
      <List as={Flex} flexDirection="column" gap="4" alignItems="stretch">
        {sidebarLinks.map(({ name, path, disabled }, index) => {
          const isActive = router.pathname.includes(path);

          return (
            <ListItem
              bg={isActive ? "#4B9C9B" : "transparent"}
              border={isActive ? "5px solid #71DCCC " : "none"}
              key={index + path}
              py="2"
              textAlign="center"
              color={isActive ? "white" : "#321975"}
            >
              <Link
                as={disabled ? undefined : NextLink}
                _hover={{ textDecoration: "none" }}
                href={disabled ? undefined : path}
              >
                {name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

type ComponentProps = {
  children: React.ReactNode;
};

export const DashboardLayout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <BackHouseLayout>
      <Flex borderTop="1px solid #3B2095" h="100%" alignItems="stretch">
        <Box flex="1" borderRight="1px solid #3B2095" maxW="250px">
          <Sidebar />
        </Box>
        <Box flex="1" overflow="auto" pt="12">
          {children}
        </Box>
      </Flex>
    </BackHouseLayout>
  );
};
