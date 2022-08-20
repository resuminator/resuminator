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

import { Box, BoxProps, Text } from "@chakra-ui/layout";
import { TextProps } from "@chakra-ui/react";
import React from "react";

export interface BoxHeaderProps {
  title: string;
  subtitle?: string;
  size?: { title: string; subtitle?: string };
  spacing?: string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
}

const BoxHeader: React.FC<BoxHeaderProps & BoxProps> = ({
  title,
  subtitle,
  size = { title: "2xl", subtitle: "md" },
  spacing = "0.5",
  titleProps,
  subtitleProps = { color: "#808080" },
  ...rest
}) => {
  return (
    <Box mb="8" {...rest}>
      <Text {...titleProps} fontSize={size.title} fontWeight="semibold">
        {title}
      </Text>
      <Box p={spacing} />
      <Text {...subtitleProps} fontSize={size.subtitle}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default BoxHeader;
