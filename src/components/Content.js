import React from "react";
import Resume from "./Resume/Resume";
import { Box } from "@material-ui/core";

function Content() {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      id="main"
      m={5}
    >
      {/* <ResumeForm /> */}
      <Resume />
    </Box>
  );
}

export default Content;
