import { Box, Divider, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import useUserStore from "../../User/store";

const RequestData = () => {
  const { email } = useUserStore();
  return (
    <GridItem rowSpan={2} colStart={2} colSpan={1} px="4">
      <Box mb="8">
        <BoxHeader
          title="Request Data"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />

        <Text fontSize="sm" color="gray" mb="2">
          Your data will be sent to you via your primary email {`(${email})`}{" "}
          within 14 days of request.
        </Text>
        <Divider />
      </Box>
    </GridItem>
  );
};

export default RequestData;
