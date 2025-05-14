import Headings from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center ">
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock Interview"
        />

        <Link to={"/generate/create"}>
          <Button size={"sm"}>
            <Plus /> Add new
          </Button>
        </Link>
      </div>

      <Separator className="my-8" />
    </>
  );
};

export default Dashboard;
