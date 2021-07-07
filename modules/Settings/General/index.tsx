import { Avatar, Box, GridItem, Input, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import useUserStore from "../../User/store";

const General = () => {
  const { fullName, email, avatar, setProperty } = useUserStore();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [e.target.name, e.target.value];
    setProperty(key, value);
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
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}>
        <Text></Text>  
        <Avatar size="2xl" src={avatar} />
      </GridItem>
    </Fragment>
  );
};

export default General;
