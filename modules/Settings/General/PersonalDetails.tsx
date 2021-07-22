import { Box, Button, Divider, Input } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import { useCustomToast } from "../../../hooks/useCustomToast";
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
      setUser({ displayName: auth.user.displayName, email: auth.user.email });
    }
  }, [auth.user]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnsavedChanges(true);
    const [key, value] = [e.target.name, e.target.value];
    setUser({ ...user, [key]: value });
  };

  const saveChanges = async () => {
    setStatus(Status.loading);
    await auth.user
      .updateProfile({ displayName: user.displayName })
      .then(() => {
        setUnsavedChanges(false);
        setStatus(Status.success);
        createToast("Changes Saved", "success");
      })
      .catch((err) => {
        setStatus(Status.error);
        createToast("Couldn't save changes", "error", err.message);
      });
  };

  return (
    <Fragment>
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
          subtitle="Updating your email means you will be logged out and will have to verify your email again."
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
    </Fragment>
  );
};

export default PersonalDetails;
