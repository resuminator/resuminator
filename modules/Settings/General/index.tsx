import {
  Avatar,
  Box,
  Button,
  GridItem,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import BoxHeader from "../../../components/common/BoxHeader";
import useUserStore from "../../User/store";

const General = () => {
  const { fullName, email, avatar, setProperty } = useUserStore();
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
      variant: "subtle"
    });
  };

  return (
    <Fragment>
      <GridItem rowSpan={5} colSpan={2} p="4">
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
        >
          Save Changes
        </Button>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} p="4">
        <VStack>
          <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
            Profile Picture
          </Text>
          <Avatar size="2xl" src={avatar} />
          <Button
            rightIcon={<FiUpload />}
            colorScheme="purple"
            size="sm"
            variant="ghost"
          >
            {avatar.length ? "Upload New" : "Upload"}
          </Button>
        </VStack>
      </GridItem>
    </Fragment>
  );
};

export default General;
