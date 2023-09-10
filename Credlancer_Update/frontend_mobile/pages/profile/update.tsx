import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Square,
  Input,
  FormLabel,
  VisuallyHiddenInput,
  FormControl,
  Select,
  Spinner,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import ORGANIZATION_ABI from "../../assets/contracts/OrganizationController.json";
import {
  useAccount,
  useContract,
  useSigner,
  useWebSocketProvider,
} from "wagmi";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { OrganizationService } from "../../services/organization.service";
import Image from "next/image";
import { ORGANIZATION_CONTRACT } from "../../utils/constants";
import { InternalNavigationPage } from "../../components/Page/InternalPage";
import { useRouter } from "next/router";
import { UpdateOrganizationProfile } from "../../components/views";
import { UpdateLancerProfile } from "../../components/views/profile/UpdateLancerProfile";

type LogoInfo = {
  size: number;
  name: string;
  image: string;
};

const UserProfile: NextPage = () => {
  const router = useRouter();

  if (router.query.user === "org") return <UpdateOrganizationProfile />;

  return <UpdateLancerProfile />;
};

export default UserProfile;
