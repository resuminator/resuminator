import {
  Box,
  Button,
  Divider,
  GridItem,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import useUserStore from "../../User/store";

const PersonalDetails = () => {
  const { fullName, email, setProperty } = useUserStore();
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const toast = useToast();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [e.target.name, e.target.value];
    setUnsavedChanges(true);
    setProperty(key, value);
  };

  const saveChanges = () => {
    setUnsavedChanges(false);
    toast({
      title: "Changes Saved",
      duration: 3000,
      status: "success",
      variant: "subtle",
    });
  };
  return (
    <GridItem rowStart={2} rowSpan={1} colStart={2} colSpan={1} p="4">
      <Box mb="8">
        <BoxHeader
          title="Full Name"
          subtitle="This is the name which shows on your public profile"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />
        <Input
          maxW="64"
          variant="outline"
          name="fullName"
          value={fullName}
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
          maxW="64"
          variant="outline"
          name="email"
          value={email}
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
      >
        Save Changes
      </Button>
      <Divider />
    </GridItem>
  );
};

export default PersonalDetails;
