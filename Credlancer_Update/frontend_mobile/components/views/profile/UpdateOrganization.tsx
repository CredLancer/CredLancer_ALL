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
import ORGANIZATION_ABI from "../../../assets/contracts/OrganizationController.json";
import {
  useAccount,
  useContract,
  useSigner,
  useWebSocketProvider,
} from "wagmi";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { OrganizationService } from "../../../services/organization.service";
import Image from "next/image";
import { ORGANIZATION_CONTRACT } from "../../../utils/constants";
import { InternalNavigationPage } from "../../Page/InternalPage";

type LogoInfo = {
  size: number;
  name: string;
  image: string;
};

export const UpdateOrganizationProfile = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useWebSocketProvider({ chainId: 3141 });
  const contract = useContract({
    address: ORGANIZATION_CONTRACT,
    abi: ORGANIZATION_ABI,
    signerOrProvider: signer,
  });
  const { data: organization, isLoading } = useQuery(
    ["organization.address", address],
    () => OrganizationService.findOrganizationByAddress(`${address}`),
    { enabled: !!address, retry: 2 }
  );
  const { mutate, isLoading: isSubmitting } = useMutation(
    OrganizationService.createOrganizationProfile
  );
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      org_name: organization?.org?.name,
      email: organization?.org?.email ?? "",
      org_description: organization?.org?.description ?? "",
    } as any,
  });
  const [uploadedLogo, setUploadedLogo] = useState<LogoInfo>();

  console.log({ provider });
  const onSubmit = (model: any) => {
    console.log({ model });

    if (!address) {
      alert("Please connect your wallet");
      return;
    }
    const formData = new FormData();
    formData.append("image", model.org_logo);
    formData.append("name", `${model.org_name}`);
    formData.append("description", model.org_description);
    formData.append("email", model.email);
    formData.append("admin", address);
    formData.append("signature", "");
    mutate(formData, {
      onSuccess: async (response) => {
        console.log({ response });
        const { name, imageCID, signature, nonce } = response;
        contract?.createOrganization(name, imageCID, signature, nonce, {
          maxPriorityFeePerGas: await provider?.send(
            "eth_maxPriorityFeePerGas",
            []
          ),
        });
      },
    });
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const logo = files[0];
      const size = logo?.size,
        name = logo?.name;

      if (size && name) {
        const image = URL.createObjectURL(logo);
        setUploadedLogo({
          size,
          name,
          image,
        });
        setValue("org_logo", logo);
      }
    }
  };

  return isLoading ? (
    <Box>
      <Spinner size="lg" />
    </Box>
  ) : (
    <InternalNavigationPage
      heading={
        <Heading color="black" fontSize="large" as="h4">
          {organization ? "Update Profile" : "Create Profile"}
        </Heading>
      }
    >
      <Heading as="h4" textAlign={`center`}>
        Please Complete:
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="6">
          <GridItem colSpan={4}>
            <Flex gap="6" alignItems={`flex-end`} justifyContent="flex-start">
              <FormLabel>
                {uploadedLogo ? (
                  <Square
                    overflow="hidden"
                    alignItems="start"
                    maxH="100%"
                    minH="100%"
                    maxW="100%"
                    minW="100%"
                  >
                    <Image
                      src={uploadedLogo?.image ?? ""}
                      alt={uploadedLogo?.name}
                      width="100%"
                      height="100%"
                    />
                  </Square>
                ) : (
                  <Square
                    size="150px"
                    p="3"
                    textAlign={`center`}
                    border="1px dashed currentColor"
                  >
                    <Text>Choose a logo to upload</Text>
                  </Square>
                )}
                <VisuallyHiddenInput
                  name="org_logo"
                  onChange={handleFileUpload}
                  type="file"
                />
              </FormLabel>

              {uploadedLogo ? (
                <Box>
                  <VStack spacing="4" alignItems="flex-start">
                    <Text color="black.5">
                      <span style={{ fontWeight: "bolder", color: "white" }}>
                        File Size:
                      </span>{" "}
                      {Math.round(uploadedLogo.size / 100)}Kb
                    </Text>
                    <Text color="black.5">
                      <span style={{ fontWeight: "bolder", color: "white" }}>
                        File Name:
                      </span>{" "}
                      {uploadedLogo.name}
                    </Text>
                  </VStack>
                </Box>
              ) : null}
            </Flex>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel htmlFor="org_name">Organization Name</FormLabel>
              <Input
                bg="white.2"
                borderRadius="2px"
                {...register("org_name")}
                id="org_name"
                type="text"
                color="black.5"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                bg="white.2"
                borderRadius="2px"
                {...register("email")}
                id="email"
                type="text"
                color="black.5"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={3}>
            <FormControl>
              <FormLabel htmlFor="org_description">Description</FormLabel>
              <Input
                bg="white.2"
                borderRadius="2px"
                id="org_description"
                {...register("org_description")}
                type="text"
                color="black.5"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Select
                placeholder="Select country..."
                id="country"
                bg="white.2"
                color="black.5"
                {...register("country")}
                borderRadius="2px"
              >
                {[
                  "USA",
                  "Mexico",
                  "India",
                  "Nigeria",
                  "Sudan",
                  "Peru",
                  "Brazil",
                  "China",
                  "Japan",
                  "Russia",
                  "Germany",
                ].map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={4}>
            <Button width="100%" type="submit" colorScheme="purple">
              {isSubmitting ? <Spinner /> : "CREATE"}
            </Button>
          </GridItem>
        </Grid>
      </form>
    </InternalNavigationPage>
  );
};
