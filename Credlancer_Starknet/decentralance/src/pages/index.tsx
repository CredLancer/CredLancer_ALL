/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { useWeb3Modal } from "@web3modal/react";
import { Plus } from "lucide-react";
import Head from "next/head";

import { useEffect, useMemo, useState } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { prepareWriteContract, writeContract } from "@wagmi/core";

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { getUserAccountData } from "~/contractInteraction/user";
import { CONTRACT_ABI, CONTRACT_ADDRESS, NETID, REG_FEE } from "../STATIC";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Slider } from "~/components/ui/slider";
import { parseEther } from "viem";

const wagmigotchiABI = CONTRACT_ABI;
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import JobLists from "~/components/job-lists";
import { Separator } from "~/components/ui/separator";
import { Checkbox } from "~/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Label } from "~/components/ui/label";
import WorkerList from "~/components/worker-list";
import { cn } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import BgBubble from "~/components/bg-bubble";
import Image from "next/image";
import { Arrow } from "@radix-ui/react-select";
import { Footer } from "~/components/footer";

export default function Home() {
  const { open, close } = useWeb3Modal();

  const { address } = useAccount();

  const [showLanding, setShowLanding] = useState(!address);

  const [selectedView, setSelectedView] = useState<"projects" | "workers">(
    "projects"
  );

  const {
    data: dataC,
    isLoading: loadingC,
    isSuccess: successC,
    refetch: refetchC,
  } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: wagmigotchiABI,
    chainId: NETID,
    functionName: "users",
    args: [address],
  });

  useEffect(() => {
    console.log("Welcome to stake!" + dataC?.toString());
  }, [dataC]);

  const myData = dataC as unknown[];

  const isRegistered = useMemo(() => {
    return (
      !!address &&
      !!dataC &&
      myData[0] != "0x0000000000000000000000000000000000000000" &&
      !loadingC
    );
  }, [address, dataC, myData, loadingC]);

  console.log("DATA", address, dataC, loadingC);
  console.log("registered: ", isRegistered);
  return (
    <>
      <Head>
        <title>decentralance</title>
        <meta name="description" content="Decentralized Freelance Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark relative flex min-h-screen flex-col items-center overflow-hidden bg-[#050210] px-2 py-8 md:px-16 lg:px-64">
        <div className="z-10 flex w-full flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0">
          {/* <span className="text-4xl font-semibold text-gray-200">
            <span className="bg-gradient-to-r from-[#b429f9] to-[#26c5f3] bg-clip-text  text-transparent">
              decentral
            </span>
            ance
          </span> */}

          <Image
            onClick={() => setShowLanding(!address)}
            alt="logo"
            className="hover:cursor-pointer"
            src="/decent.png"
            width={200}
            height={200}
          />

          <div className="z-10 flex flex-col items-center justify-center gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
            {!!address && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" className="gap-x-2">
                    <span className="bg-gradient-to-r from-[#b429f9] to-[#26c5f3] bg-clip-text text-transparent">
                      {address?.slice(0, 6) + "..." + address?.slice(-4)}
                    </span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>General</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Inbox</DropdownMenuItem>
                  <DropdownMenuItem>My Posted Jobs</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>

                  <DropdownMenuItem onClick={() => open()}>
                    Open WalletConnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {!address && (
              <Button variant={"default"} onClick={() => open()}>
                Login
              </Button>
            )}

            {!!address &&
              !!dataC &&
              myData[0] != "0x0000000000000000000000000000000000000000" &&
              !loadingC && <PostJobModal />}

            {!!address &&
              (!dataC ||
                myData[0] == "0x0000000000000000000000000000000000000000") &&
              !loadingC && <RegisterModal className="" />}
          </div>
        </div>
        <Separator className="my-8" />
        {showLanding ? (
          <div className="relative z-10 mt-0 flex w-full flex-col  md:mt-24  md:pt-0">
            <Image
              alt="interview"
              className="absolute right-0 -z-[1] hidden opacity-70 md:top-auto md:inline-block"
              src="/interview.svg"
              width={400}
              height={400}
            />
            <h1 className=" text-5xl  font-bold md:max-w-lg">
              <span className="text-[#26c5f3]">Decentralized</span> &{" "}
              <span className="text-[#b429f9]">Trustworthy</span> Freelance
              Services{" "}
            </h1>
            <span className="mt-8 text-xl text-gray-200 md:max-w-lg">
              A decentralized freelance platform built on the Polygon Network to
              provide a trustless and secure environment for freelancers and
              clients to interact.
              <br />
            </span>
            <div className="mt-8 flex md:flex-row items-center md:gap-x-6 md:gap-y-0 flex-col gap-y-6 md:max-w-lg">
              <Button
                variant={"default"}
                className="gap-x-2 text-xl w-full md:w-auto"
                onClick={() => open()}
              >
                Connect your Wallet
              </Button>
              <Button
                variant={"outline"}
                className="gap-x-2 text-xl w-full md:w-auto"
                onClick={() => setShowLanding(false)}
              >
                Browse Jobs <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="z-10 flex h-full w-full flex-col  justify-center gap-y-4 ">
            {!isRegistered && !!address && (
              <Alert variant={"destructive"}>
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle className="text-white">Heads up!</AlertTitle>
                <AlertDescription className="text-white">
                  You first need to register your account before you can apply
                  for or post a job.
                </AlertDescription>
                <RegisterModal className="mt-4" onComplete={refetchC} />
              </Alert>
            )}
            <div className="mb-12 flex flex-row items-center justify-center gap-x-4 md:justify-start">
              <h1 className="text-3xl font-semibold">Browse</h1>
              <Tabs
                defaultValue="projects"
                onValueChange={(value) =>
                  setSelectedView(value as "projects" | "workers")
                }
              >
                <TabsList className="py-6">
                  <TabsTrigger
                    className="w-full text-xl font-semibold"
                    value="projects"
                  >
                    Projects
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full text-xl font-semibold"
                    value="workers"
                  >
                    Freelancers
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            {selectedView === "projects" && (
              <JobLists isRegistered={isRegistered} />
            )}
            {selectedView === "workers" && (
              <WorkerList isRegistered={isRegistered} />
            )}
          </div>
        )}
        <BgBubble className="-left-1/4 -top-[200px]" />
        <BgBubble className="-left-1/4 -top-1/3" />
        <BgBubble className="right-[200px] top-[100px]" />
        <BgBubble className="left-10 top-[600px]" />
        <BgBubble className="left-[200px] top-[600px]" />
        <BgBubble className="bottom-10 right-10 rounded-s-sm" />
        <Footer />
      </main>
    </>
  );
}

const PostJobModal = () => {
  const formSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(500),
    budget: z.coerce.number().min(0),
  });
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: wagmigotchiABI,
    functionName: "postJob",
    chainId: NETID,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: 0.001,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // const { request } = await prepareWriteContract({
    //   address: CONTRACT_ADDRESS,
    //   abi: wagmigotchiABI,
    //   functionName: "postJob",
    //   args: [values.description, values.budget],
    // });
    // const sendStatus = await writeContract(request);
    write({
      args: [
        values.title,
        values.description,
        parseEther(values.budget.toString()),
      ],
      value: parseEther(values.budget.toString()),
    });
    // console.log(values, sendStatus);
    console.log("sending");
  }

  useEffect(() => {
    console.log("transaction", data, isLoading);
  }, [data, isLoading]);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex justify-center gap-x-2">
          <Plus /> Post new Job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isSuccess ? "Job posted! " : "Post a new job"}
          </DialogTitle>
          {isSuccess && (
            <DialogDescription>
              Freelancers can now find your job posting and send proposals
            </DialogDescription>
          )}{" "}
        </DialogHeader>

        {isSuccess ? (
          <Button variant={"link"}>
            <a
              href={`https://goerli.etherscan.io/tx/${data?.hash}`}
              target="_blank"
            >
              View Transaction
            </a>
          </Button>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 space-y-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>
                      Provide as much detail as possible
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Budget</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" step={0.001} />
                    </FormControl>
                    <FormDescription>in ETH</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Transaction in Progress..." : "Post the Job"}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export const RegisterModal = ({
  className,
  onComplete,
}: {
  className?: string;
  onComplete?: () => void;
}) => {
  const items = [
    {
      id: "frontend",
      label: "Frontend",
    },
    {
      id: "backend",
      label: "Backend",
    },
    {
      id: "design",
      label: "Design",
    },
    {
      id: "marketing",
      label: "Marketing",
    },
  ] as const;

  const { data, isLoading, isSuccess, write, error, isError } =
    useContractWrite({
      address: CONTRACT_ADDRESS,
      abi: wagmigotchiABI,
      functionName: "register",
      chainId: NETID,
    });

  useEffect(() => {
    if (isSuccess) {
      onComplete?.();
    }
  }, [isSuccess]);
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(2).max(500).optional(),
    workType: z
      .object({
        items: z
          .array(z.string())
          .refine((value) => value.some((item) => item), {
            message: "You have to select at least one item.",
          }),
      })
      .optional(),
    type: z.enum(["client", "worker"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "worker",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("submit", values);
    write({
      args: [values.name, true],
      value: REG_FEE,
    });
  }

  return (
    <Dialog>
      <DialogTrigger className={cn(className)}>
        <Button variant="outline" className="gap-x-2 text-white">
          <span className="">Register</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isSuccess ? "Registration Successfull!" : "Welcome 👋"}{" "}
          </DialogTitle>
          {!isSuccess && (
            <DialogDescription>
              In order to be able to post or apply for jobs, you need to stake
              some ETH
            </DialogDescription>
          )}
        </DialogHeader>
        {!isSuccess && (
          <Tabs
            onValueChange={(value) =>
              form.setValue("type", value as "worker" | "client")
            }
            defaultValue="worker"
            className="w-full"
          >
            <Label className="mb-2">I am a</Label>
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="worker">
                Freelancer
              </TabsTrigger>
              <TabsTrigger className="w-full" value="client">
                Client
              </TabsTrigger>
            </TabsList>
            <Separator className="my-4" />
            <TabsContent value="worker">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-4 space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About you</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>
                          Tell us a bit about yourself
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="workType"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">
                            Your Skills
                          </FormLabel>
                          <FormDescription>
                            Select the skills you want to be hired for
                          </FormDescription>
                        </div>
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="workType"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.items.includes(
                                        item.id
                                      )}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          field.onChange({
                                            items: [
                                              ...(field.value?.items ?? []),
                                              item.id,
                                            ],
                                          });
                                        } else {
                                          field.onChange({
                                            items: field.value?.items.filter(
                                              (i) => i !== item.id
                                            ),
                                          });
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isLoading}
                    variant="fancy"
                    type="submit"
                    className="w-full"
                  >
                    {isLoading ? "Staking... 🚀" : "Stake 0.01 ETH"}
                  </Button>

                  {!!error && (
                    <Alert variant={"destructive"}>
                      <ExclamationTriangleIcon className="h-4 w-4" />
                      <AlertTitle className="">Error</AlertTitle>
                      <AlertDescription className="">
                        {error?.name}
                      </AlertDescription>
                    </Alert>
                  )}
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="client">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-4 space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name/Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isLoading}
                    variant="fancy"
                    type="submit"
                    className="w-full"
                  >
                    {isLoading ? "Staking... 🚀" : "Stake 0.01 ETH"}
                  </Button>
                  {!!error && (
                    <span className="text-red-500">{error?.name}</span>
                  )}
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        )}
        {isSuccess && (
          <a
            href={`https://goerli.etherscan.io/tx/${data?.hash}`}
            target="_blank"
            className="text-white hover:underline"
          >
            Transaction Successful
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
};
