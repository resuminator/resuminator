/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
      py={{ base: "8", sm: "10", md: "16", lg: "20" }}
      d={{ md: "flex" }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign={{ sm: "center" }}
      aria-label="Section Headings"
      {...rest}
    >
      <Heading
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        fontWeight="bold"
        letterSpacing={-2}
        lineHeight="short"
        mb="2"
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
