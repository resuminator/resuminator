import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import ResumePaper from "../Resume";
import AutoSaveStatus from "./AutoSaveStatus";

interface ViewerProps {
  withStatus?: boolean;
}

const Viewer: React.FC<ViewerProps> = ({ withStatus }) => {
  return (
    <>
      {withStatus ? <AutoSaveStatus /> : null}
      <Box
        borderRadius="10px"
        bg={useColorModeValue("white", "inherit")}
        shadow={useColorModeValue("lg", "2xl")}
        width="21cm"
        height="29.7cm"
        overflowY="auto"
        className="viewer"
      >
        <ResumePaper />
      </Box>
    </>
  );
};

export default Viewer;
