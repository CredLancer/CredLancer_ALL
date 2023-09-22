import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Building, Wrench } from "lucide-react";
import { SewingPinFilledIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const mockWorkers = [
  {
    name: "John Doe",
    location: "New York City, USA",
    rating: 4.9,
    skills: ["React", "Node.js", "TypeScript", "GraphQL"],
    description:
      "Full stack developer with 5+ years of experience building web applications. Currently working at Google.",
  },
  {
    name: "Jane Doe",
    location: "London, UK",
    rating: 4.8,
    skills: ["React", "Node.js", "TypeScript", "GraphQL"],
    description:
      "Full stack developer with 5+ years of experience building web applications. Currently working at Google.",
  },
];

const WorkerList = ({ isRegistered }: { isRegistered: boolean }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between">
        <div className="w-full max-w-[300px]">
          <Input
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for the perfect freelancer..."
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {mockWorkers
          .filter((worker) => {
            return (
              worker.description
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              worker.location.toLowerCase().includes(searchInput.toLowerCase())
            );
          })
          .map((worker) => (
            <li key={worker.name}>
              <Card className="flex min-h-[150px] flex-col justify-between">
                <CardHeader>
                  <CardTitle>{worker.name}</CardTitle>
                  <CardDescription>{worker.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row items-center gap-x-2">
                    <SewingPinFilledIcon /> {worker.location}
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <StarFilledIcon /> {worker.rating}
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <Wrench className="h-4 w-4" /> {worker.skills.join(" • ")}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-between">
                  <Button disabled={!isRegistered} className="gap-x-2">
                    Contact <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WorkerList;
