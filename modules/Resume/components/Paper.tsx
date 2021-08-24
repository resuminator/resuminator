import { Box, BoxProps } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useResizeDetector } from "react-resize-detector";
import useGlobalStore from "../../../store/global.store";

const Paper: React.FC<BoxProps> = ({ children, ...props }) => {
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);
  const applyFilters = grayscaleFilter && { filter: "grayscale(1)" };
  const setContentOverflow = useGlobalStore(
    (state) => state.setContentOverflow
  );
  const { height, ref } = useResizeDetector();

  useEffect(() => {
    console.log(height);
    if (height > 1123) {
      setContentOverflow(true);
    } else {
      setContentOverflow(false);
    }
  }, [height, setContentOverflow]);

  return (
    <Box
      display="flex"
      flexDir="column"
      aria-label="Resume Paper"
      minHeight="29.7cm"
      id="resumePaperContent"
      ref={ref}
      // overflowY="clip"
      {...applyFilters}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Paper;
