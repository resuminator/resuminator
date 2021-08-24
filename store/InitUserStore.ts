import React, { useEffect } from "react";
import { useCustomToast } from "../hooks/useCustomToast";
import useUserStore from "../modules/User/store";
import { UserObject } from "../modules/User/types";

interface InitUserStoreProps {
  data: UserObject;
  status: "error" | "success" | "idle" | "loading";
}

const InitUserStore: React.FC<InitUserStoreProps> = ({ data, status }) => {
  const setProperty = useUserStore((state) => state.setProperty);
  const { createToast } = useCustomToast();

  if (status === "error")
    createToast(
      "Cannot connect to server.",
      "error",
      "Try checking your network connection while we try to reconnect.",
      "network-error",
      { variant: "subtle" }
    );

  useEffect(() => {
    if (status === "success") {
      setProperty("_id", data._id);
      setProperty("active", data.active);
      setProperty("isBanned", data.isBanned);
    }
  }, [status, data, setProperty]);

  return null;
};

export default InitUserStore;
