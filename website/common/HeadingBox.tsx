import {
  Box,
  BoxProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  useColorModeValue,
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
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
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
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        letterSpacing="tight"
        maxW={{ md: "80%", lg: "60%", xl: "50%" }}
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
        {...subtitleProps}
      >
        {subtitle}
      </Text>
    </Box>
  );
};

export default HeadingBox;
