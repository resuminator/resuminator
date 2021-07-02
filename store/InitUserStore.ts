import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useUserStore from "../modules/User/store";
import { UserObject } from "../modules/User/types";

interface InitUserStoreProps {
  data: UserObject;
  status: "error" | "success" | "idle" | "loading";
}

const InitUserStore: React.FC<InitUserStoreProps> = ({ data, status }) => {
  const setProperty = useUserStore((state) => state.setProperty);
  const toast = useToast();

  if (status === "error")
    toast({
      title: "Cannot connect to server.",
      variant: "subtle",
      description:
        "Try checking your network connection while we try to reconnect.",
      status: "error",
      duration: 3500,
      isClosable: true,
    });

  useEffect(() => {
    if (status === "success") {
      setProperty("_id", data._id);
      setProperty("active", data.active);
      setProperty("email", data.email);
      setProperty("avatar", data.avatar);
      setProperty("fullName", data.fullName);
      setProperty("isBanned", data.isBanned);
    }
  }, [status, data, setProperty]);

  return null;
};

export default InitUserStore;
