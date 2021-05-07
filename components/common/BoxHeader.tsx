import { Box, BoxProps, Text } from "@chakra-ui/layout";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  size?: { title: string; subtitle: string };
}

const BoxHeader: React.FC<Props & BoxProps> = ({
  title,
  subtitle,
  size = { title: "2xl", subtitle: "md" },
  ...rest
}) => {
  return (
    <Box mb="8" {...rest}>
      <Text fontSize={size.title} fontWeight="semibold">
        {title}
      </Text>
      <Text color="InactiveCaptionText" fontSize={size.subtitle}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default BoxHeader;
