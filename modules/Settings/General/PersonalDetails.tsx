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

import { Box, Button, Divider, Input } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import { useCustomToast } from "../../../hooks/useCustomToast";
import mp from "../../../services/mixpanel";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";

const PersonalDetails = () => {
  const auth = useAuth();
  const [user, setUser] = useState({ displayName: "", email: "" });
  const [status, setStatus] = useState<Status>(Status.idle);
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const { createToast } = useCustomToast();

  useEffect(() => {
    if (auth.user) {
      setUser({
        displayName: auth.user.displayName || "",
        email: auth.user.email,
      });
    }
  }, [auth.user]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnsavedChanges(true);
    const [key, value] = [e.target.name, e.target.value];
    setUser({ ...user, [key]: value });
  };

  const saveChanges = async () => {
    setStatus(Status.loading);
    return await auth.user
      .updateProfile({ displayName: user.displayName })
      .then(() => {
        mp.track("General Settings", {
          action: "name change",
          status: "success",
        });
        setUnsavedChanges(false);
        setStatus(Status.success);
        createToast("Changes Saved", "success");
      })
      .catch((err) => {
        mp.track("General Settings", {
          action: "name change",
          status: "error",
          source: "Firebase",
        });
        setStatus(Status.error);
        createToast("Couldn't save changes", "error", err.message);
      });
  };

  return (
    <Box mb="8">
      <Box mb="8">
        <BoxHeader
          title="Full Name"
          subtitle="This is the name which shows on your public profile"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />
        <Input
          maxW="80"
          variant="outline"
          name="displayName"
          value={user.displayName}
          onChange={handleInput}
        />
      </Box>
      <Box mb="8">
        <BoxHeader
          title="Primary Email"
          // subtitle="Updating your email means you will be logged out and will have to verify your email again."
          subtitle="This is the email used for all primary communication. It cannot be changed."
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />
        <Input
          maxW="80"
          variant="outline"
          name="email"
          value={user.email}
          onChange={handleInput}
          isDisabled
        />
      </Box>
      <Button
        colorScheme="green"
        isDisabled={!unsavedChanges}
        onClick={saveChanges}
        mb="2"
        size="sm"
        isLoading={status === Status.loading}
        loadingText="Saving changes"
      >
        Save Changes
      </Button>
      <Divider />
    </Box>
  );
};

export default PersonalDetails;
