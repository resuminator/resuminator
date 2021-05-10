import { Box, BoxProps, Text } from "@chakra-ui/layout";
import React from "react";

export interface BoxHeaderProps {
  title: string;
  subtitle?: string;
  size?: { title: string; subtitle?: string };
  spacing?: string;
}

const BoxHeader: React.FC<BoxHeaderProps & BoxProps> = ({
  title,
  subtitle,
  size = { title: "2xl", subtitle: "md" },
  spacing = "0.5",
  ...rest
}) => {
  return (
    <Box mb="8" {...rest}>
      <Text fontSize={size.title} fontWeight="semibold">
        {title}
      </Text>
      <Box p={spacing}/>
      <Text color="InactiveCaptionText" fontSize={size.subtitle}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default BoxHeader;
