"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

export default function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(userId);
      toast.success("User followed succesfully");
    } catch (error) {
      toast.error("Error following user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleFollow}
      variant={"secondary"}
      size={"sm"}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="size-2 animate-spin" /> : "Follow"}
    </Button>
  );
}
