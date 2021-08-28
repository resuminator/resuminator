import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  isHidden?: boolean;
}

const Announcement: React.FC<Props> = ({ isHidden = false }) => {
  const textColor = useColorModeValue("blue.800", "blue.100");
  const bgColor = useColorModeValue("blue.50", "blue.900");
  return (
    !isHidden && (
      <Box
        bg={bgColor}
        width="100%"
        p="2"
        color={textColor}
        textAlign="center"
      >
          {/* Put Announcement Here */}
      </Box>
    )
  );
};

export default Announcement;
