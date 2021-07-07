import { Box, GridItem } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import InputWithLabel from "../../../components/common/InputWithLabel";

const ChangePassword = () => {

  return (
    <GridItem rowSpan={2} colSpan={2} px="4">
      <Box mb="8">
        <BoxHeader
          title="Change Password"
          subtitle="Update the password for your current login account"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />
        <InputWithLabel
          label="Current Password"
          maxW="64"
          variant="outline"
          name="password"
        />
        <InputWithLabel
          label="New Password"
          maxW="64"
          variant="outline"
          name="password"
        />
        <InputWithLabel
          label="Confirm Password"
          maxW="64"
          variant="outline"
          name="password"
        />
      </Box>
    </GridItem>
  );
};

export default ChangePassword;
