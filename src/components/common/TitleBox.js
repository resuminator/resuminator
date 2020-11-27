import { Box } from "@material-ui/core";
import React from "react";

export const TitleBox = ({id, pb, flexDirection, children}) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection={flexDirection || "row"}
      pb={pb || 1}
      id={id}
    >
      {children}
    </Box>
  );
};
