import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import ResumePaper from "../Resume";
import AutoSaveStatus from "./AutoSaveStatus";

interface Props {}

const Viewer = (props: Props) => {
  return (
    <>
      <AutoSaveStatus />
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
