import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import useGlobalStore from "../../../store/global.store";

const Paper: React.FC<BoxProps> = ({ children, ...props }) => {
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);
  const applyFilters = grayscaleFilter && { filter: "grayscale(1)" };

  return (
    <Box
      display="flex"
      flexDir="column"
      aria-label="Resume Paper"
      height="inherit"
      overflowY="clip"
      {...applyFilters}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Paper;
