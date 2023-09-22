/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { SewingPinFilledIcon, StarFilledIcon } from "@radix-ui/react-icons";
import {
  ArrowRight,
  Building,
  CheckIcon,
  Check,
  Clock,
  LocateIcon,
  NavigationIcon,
  User,
  Wallet,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { useContractWrite } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { CONTRACT_ABI, CONTRACT_ADDRESS, NETID } from "~/STATIC";
import {
  paginatedIndexesConfig,
  useAccount,
  useContractInfiniteReads,
  useContractRead,
} from "wagmi";
import { RegisterModal } from "~/pages";

// You can continue adding more job listings as needed.

const wagmigotchiABI = CONTRACT_ABI;
const contractConfig = {
  address: CONTRACT_ADDRESS,
  abi: wagmigotchiABI,
  chainId: NETID,
};

const JobLists = ({ isRegistered }: { isRegistered: boolean }) => {
  const [searchInput, setSearchInput] = useState("");
  const [remoteOnly, setRemoteOnly] = useState<CheckedState>(false);
  const [showMine, setShowMine] = useState<CheckedState>(false);
  const [pastOnes, setPastOnes] = useState<CheckedState>(false);

  const { address } = useAccount();
  const { data, isLoading, fetchNextPage } = useContractInfiniteReads({
    cacheKey: "contractJobs",
    ...paginatedIndexesConfig(
      // @ts-ignore
      (index) => {
        return [
          {
            ...contractConfig,
            functionName: "jobs",
            args: [index] as const,
          },
        ];
      },
      { start: 0, perPage: 100, direction: "increment" }
    ),
  });

  useEffect(() => {
    console.log("JOBS", data);
  }, [data]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0">
        <div className="w-full md:max-w-[300px]">
          <Input
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search jobs..."
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-y-2 px-2 md:flex-row md:justify-end md:gap-x-4 md:gap-y-0 md:px-0">
          <div className="flex flex-row items-center gap-x-2">
            <Checkbox id="ownJobs" onCheckedChange={(e) => setShowMine(e)} />
            <label
              htmlFor="ownJobs"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show my jobs
            </label>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <Checkbox id="remote" onCheckedChange={(e) => setRemoteOnly(e)} />
            <label
              htmlFor="remote"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remote only
            </label>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <Checkbox id="pastOne" onCheckedChange={(e) => setPastOnes(e)} />
            <label
              htmlFor="pastOne"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show Completed
            </label>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {!isLoading &&
          data?.pages[0]
            ?.map((jobL, index) => {
              const listargs = jobL.result as unknown[];
              const job = {
                title: listargs[5] as string, //"Video Editor - YouTube Channel",
                company: "ViralVision Media",
                location: "Remote",
                type: "Freelance",
                budget: listargs[2] as number,
                minimumRating: 4.2,
                owner: listargs[0] as string,
                id: index,
                isActive: listargs[3] as boolean,
                acceptedFreelancer: listargs[4] as string,
                description: listargs[1] as string,
              };
              // if (job.isActive != true) console.log("activeJob", job);
              // console.log("acceptedJob", job);
              return job;
            })
            .filter((job) => {
              return (
                job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                job.company.toLowerCase().includes(searchInput.toLowerCase()) ||
                job.location.toLowerCase().includes(searchInput.toLowerCase())
              );
            })
            .filter((job) => {
              if (remoteOnly) {
                return job.location.toLowerCase().includes("remote");
              }
              return true;
            })
            .filter((job) => {
              if (showMine) {
                return job.owner === address;
              }
              return true;
            })
            .filter((job) => {
              if (!pastOnes) {
                return job.budget > 0;
              } else {
                return (
                  job.owner !== "0x0000000000000000000000000000000000000000"
                );
              }
            })
            .map((job) => (
              <li key={job.title + "-" + job.owner + "-" + job.id}>
                <Card className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row items-center gap-x-2">
                      <Building className="h-4 w-4" /> {job.company}
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <SewingPinFilledIcon /> {job.location}
                    </div>

                    <div className="flex flex-row items-center gap-x-2">
                      <StarFilledIcon /> min {job.minimumRating} rating
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <Clock className="h-4 w-4" /> {job.type}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-x-2">
                      <Wallet className="h-4 w-4" />{" "}
                      {(parseInt(job.budget.toString()) / 10 ** 18).toFixed(5)}{" "}
                      ETH
                    </div>
                    {job.isActive == false && <div>🚀 Completed 🚀</div>}
                    {job.isActive &&
                      (address === job.owner ? (
                        <ProposalsModal
                          job={job}
                          selectedFreelancer={job.acceptedFreelancer}
                        />
                      ) : !!address ? (
                        isRegistered ? (
                          <ProposeModal job={job} />
                        ) : (
                          <RegisterModal />
                        )
                      ) : (
                        <Button variant={"outline"}>Login to Propose</Button>
                      ))}
                  </CardFooter>
                </Card>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default JobLists;

const ProposeModal = ({
  job,
}: {
  job: {
    title: string;
    description: string;
    budget: number;
    minimumRating: number;
    type: string;
    location: string;
    id: number;
    company: string;
  };
}) => {
  const { data, error, isLoading, isSuccess, write } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: wagmigotchiABI,
    functionName: "submitProposal",
    chainId: NETID,
  });

  const formSchema = z.object({
    proposalText: z.string().min(2).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("submit", values);
    write({
      args: [job.id, values.proposalText],
    });
  }

  if (isSuccess) {
    return (
      <Dialog>
        <DialogTrigger>
          <Button>
            Proposal Submitted <Check className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Proposal submitted! 🚀
            </DialogTitle>
            <DialogDescription>
              Your proposal has been submitted on-chain and can be accepted by
              the client
            </DialogDescription>
          </DialogHeader>
          <Button variant={"link"}>
            <a
              href={`https://goerli.etherscan.io/tx/${data?.hash}`}
              target="_blank"
            >
              View Transaction
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="gap-x-2">
          Submit Proposal <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
          <DialogDescription>{job.description}</DialogDescription>

          <div className="flex flex-row items-center gap-x-2">
            <Building className="h-4 w-4" /> {job.company}
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <SewingPinFilledIcon /> {job.location}
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <StarFilledIcon /> min {job.minimumRating} rating
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <Clock className="h-4 w-4" /> {job.type}
          </div>
        </DialogHeader>

        <Separator className="my-3" />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="proposalText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Proposal</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Label className="text-gray-400">Proposal Fee: 0.01 ETH</Label>
            <Button
              disabled={isLoading}
              variant="fancy"
              type="submit"
              className="w-full"
            >
              {isLoading ? "Sending ... 🚀" : "Submit Proposal"}
            </Button>
            {!!error && <span className="text-red-500">{error?.name}</span>}
            {isSuccess && (
              <a
                href={`https://goerli.etherscan.io/tx/${data?.hash}`}
                target="_blank"
                className="text-pink-600 underline"
              >
                Transaction Successful
              </a>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const ProposalsModal = ({
  job,
  selectedFreelancer,
}: {
  job: {
    title: string;
    description: string;
    budget: number;
    minimumRating: number;
    type: string;
    location: string;
    id: number;
    company: string;
  };
  selectedFreelancer: string;
}) => {
  const { data, isLoading, isError, fetchNextPage } = useContractInfiniteReads({
    cacheKey: "jobProposals" + job.id,
    ...paginatedIndexesConfig(
      // @ts-ignore
      (index) => {
        return [
          {
            ...contractConfig,
            functionName: "jobProposals",
            args: [job.id, index] as const,
          },
        ];
      },
      { start: 0, perPage: 100, direction: "increment" }
    ),
  });
  const [selected, setSelected] = useState<number | null>(null);
  const {
    data: dataW,
    error: error,
    isLoading: isLoadingW,
    isSuccess: isSuccessW,
    write,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: wagmigotchiABI,
    functionName: "acceptProposal",
    chainId: NETID,
  });

  const {
    data: dataA,
    error: errorA,
    isLoading: isLoadingA,
    isSuccess: isSuccessA,
    write: writeA,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: wagmigotchiABI,
    functionName: "releasePayment",
    chainId: NETID,
  });

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  // console.log("RENDER FR", data, selectedFreelancer);
  const done =
    !!selectedFreelancer &&
    selectedFreelancer != "0x0000000000000000000000000000000000000000";
  console.log("done", done, isLoadingW, done);
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">View Proposals</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Proposals</DialogTitle>
          <DialogDescription>
            Here you can see all proposals that were submitted for your posting
          </DialogDescription>
        </DialogHeader>
        <Separator className="my-3" />
        <ul className="flex max-h-[500px] flex-col items-center gap-y-4 overflow-y-scroll px-4">
          {!isLoading &&
            !isError &&
            !!data?.pages &&
            data?.pages?.[0]?.map((proposalsL, index) => {
              const listargs = proposalsL.result as unknown[];
              if (!listargs) return null;
              const offer = {
                user: listargs[0] as string,
                text: listargs[1] as string,
              };
              return (
                <li key={offer.user + " " + job.id} className="w-full">
                  <Card className="flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle>
                        <UserObject userAddress={offer.user} />
                      </CardTitle>
                      <CardDescription>{offer.text}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row items-center justify-between"></CardContent>
                    <CardFooter className="flex flex-row items-center justify-end gap-x-2">
                      <Button
                        className="w-full gap-x-2"
                        onClick={() => {
                          write({
                            args: [job?.id, index],
                          });
                          setSelected(index);
                        }}
                        variant={!done ? "fancy" : "outline"}
                        disabled={isLoadingW || done}
                      >
                        {!isLoadingW && !done && (
                          <>
                            <CheckIcon className="h-4 w-4" /> Accept
                          </>
                        )}
                        {done && selectedFreelancer == offer.user && (
                          <span className="text-green-500">Accepted 🚀</span>
                        )}
                        {done && selectedFreelancer != offer.user && (
                          <span className="text-red-500">Rejected</span>
                        )}
                        {isLoadingW && !done && index == selected && (
                          <span>🚀 Accepting... </span>
                        )}
                        {isLoadingW && !done && index != selected && (
                          <span>Rejecting... </span>
                        )}
                      </Button>
                      {done && selectedFreelancer == offer.user && (
                        <Button
                          onClick={() => {
                            writeA({
                              args: [job?.id],
                            });
                          }}
                        >
                          Payout
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

const UserObject = ({ userAddress }: { userAddress: string }) => {
  const { data, isLoading, isSuccess, refetch } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: wagmigotchiABI,
    chainId: NETID,
    functionName: "users",
    args: [userAddress],
  });
  console.log("user", data);

  return (
    <div>
      {isLoading && <span>Loading ...</span>}
      {isSuccess && (
        <span>
          {" "}
          <a
            //@ts-ignore
            href={"https://goerli.etherscan.io/address/" + data?.[0]}
            target="_blank"
          >
            {
              //@ts-ignore
              data[2]
            }
          </a>
        </span>
      )}
    </div>
  );
};
