import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import useGlobalStore from "../../store/global.store";
import { Status } from "../../utils/constants";
import ResumePaper from "../Resume";

interface Props {}

const getStatus = (status: Status) => {
  switch(status){
    case Status.idle: return "All Changes Saved";
    case Status.loading: return "Saving Changes";
    case Status.error: return "Couldn't Save Changes";
    case Status.success: return `Changes saved at ${new Date()}`
  }
}

const Viewer = (props: Props) => {
  const saveStatus = useGlobalStore(state => state.saveStatus);
  return (
    <>
    <Text>{getStatus(saveStatus)}</Text>
    <Box
      borderRadius="10px"
      bg={useColorModeValue("white", "inherit")}
      shadow={useColorModeValue("lg", "2xl")}
      width="21cm"
      height="29.7cm"
      overflowY="auto"
    >
      <ResumePaper />
    </Box>
    </>
  );
};

export default Viewer;
