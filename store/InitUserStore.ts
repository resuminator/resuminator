/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
