import {
    Box,
    BoxProps,
    Heading,
    HeadingProps, Text, TextProps
} from "@chakra-ui/react";
import React from "react";

interface HeadingBoxProps {
  title: string;
  subtitle?: string;
  titleProps?: HeadingProps;
  subtitleProps?: TextProps;
}

const HeadingBox: React.FC<BoxProps & HeadingBoxProps> = ({
  children,
  title,
  subtitle,
  titleProps,
  subtitleProps,
  ...rest
}) => {
  return (
    <Box
      py="4"
      mb={{ base: 0, md: "8" }}
      d={{ md: "flex" }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign={{ sm: "center" }}
      {...rest}
    >
      <Heading
        fontSize={{ base: "4xl", lg: "5xl" }}
        fontWeight="bold"
        letterSpacing={-2}
        mb="2"
        lineHeight="short"
        {...titleProps}
      >
        {title}
        {children}
      </Heading>
      <Text
        fontWeight="medium"
        fontSize={{ base: "2xl", md: "xl", lg: "2xl" }}
        letterSpacing={{ base: "tight", md: "tighter" }}
        maxW={{ md: "80%", lg: "60%" }}
        {...subtitleProps}
      >
        {subtitle}
      </Text>
    </Box>
  );
};

export default HeadingBox;
