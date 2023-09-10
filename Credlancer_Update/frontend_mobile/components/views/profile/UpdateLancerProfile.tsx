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
  Spinner,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useAccount, useSignMessage } from "wagmi";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { LancerService } from "../../../services";
import Image from "next/image";
import { InternalNavigationPage } from "../../Page/InternalPage";
import { verifyMessage } from "ethers/lib/utils";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

type LogoInfo = {
  size: number;
  name: string;
  image: string;
};

export const UpdateLancerProfile = () => {
  const { address } = useAccount();
  const { data: lancerSignatureOrProfile } = useQuery(
    ["lancer.signature|profile", address],
    () => LancerService.fetchLancerSignatureOrProfile(address ?? ""),
    {
      enabled: !!address,
      retry: 2,
    }
  );
  const { mutate, isLoading: isSubmitting } = useMutation(
    LancerService.createLancerProfile
  );
  const { handleSubmit, register, setValue } = useForm();
  const [uploadedLogo, setUploadedLogo] = useState<LogoInfo>();

  const { isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      console.log({ address, data });
      console.log(data, variables);
      console.log({ lancerData: variables });
      postLancer({ ...variables, signature: data });
    },
  });

  const postLancer = async ({ signature, ...model }: any) => {
    const formData = new FormData();
    formData.append("image", model.lancer_logo);
    formData.append("name", `${model.lancer_name}`);
    formData.append("description", model.lancer_description);
    formData.append("email", model.email);
    formData.append("signature", signature);
    formData.append("address", `${address}`);

    mutate(formData, {
      onSuccess: () => {
        toast.success("Lancer Creates Successfully");
      },
      onError: () => {
        toast.error("Failed to create lancer");
      },
    });
  };

  const onSubmit = async (model: any) => {
    console.log({ model });

    if (!lancerSignatureOrProfile) {
      alert("There was a problem with your request!");
      return;
    }

    if (lancerSignatureOrProfile.isRegistered) {
      toast("Lancer exists with this address!");
      return;
    }

    signMessage({ ...model, message: lancerSignatureOrProfile.message });
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
        setValue("lancer_logo", logo);
      }
    }
  };

  return (
    <InternalNavigationPage
      heading={
        <Heading color="black" fontSize="large" as="h4">
          Update Profile
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
                    <Text>Choose a Image to upload</Text>
                  </Square>
                )}
                <VisuallyHiddenInput
                  name="lancer_logo"
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
              <FormLabel htmlFor="lancer_name">Name</FormLabel>
              <Input
                bg="white.2"
                borderRadius="2px"
                {...register("lancer_name")}
                id="lancer_name"
                type="text"
                color="black.5"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel htmlFor="title">Job Title</FormLabel>
              <Input
                bg="white.2"
                borderRadius="2px"
                {...register("title")}
                id="title"
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

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel htmlFor="lancer_description">Description</FormLabel>
              <Input
                bg="white.2"
                borderRadius="2px"
                id="lancer_description"
                {...register("lancer_description")}
                type="text"
                color="black.5"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}></GridItem>

          <GridItem colSpan={4}>
            <Button width="100%" type="submit" colorScheme="purple">
              {isSubmitting || isLoading ? <Spinner /> : "CREATE"}
            </Button>
          </GridItem>
        </Grid>
      </form>
    </InternalNavigationPage>
  );
};
