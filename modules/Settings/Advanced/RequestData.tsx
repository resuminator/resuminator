import { Box, Button, Divider, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import useUserStore from "../../User/store";

const RequestData = () => {
  const { email } = useUserStore();
  return (
    <Box mb="8">
      <BoxHeader
        title="Request Data"
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <Text fontSize="sm" mb="4">
        You can request a copy of all the data you have ever stored in
        Resuminator including your personal information, data entered in any
        resume, and all metadata for your account linked to {email} by raising a
        request.
      </Text>
      <Button colorScheme="purple" size="sm" mb="4">
        Request Account Data
      </Button>
      <Text fontSize="sm" color="gray" mb="2">
        Your data will be sent to you via your primary email {`(${email})`}{" "}
        within 14 days of request.
      </Text>
    </Box>
  );
};

export default RequestData;
