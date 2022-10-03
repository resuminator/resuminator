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

import { Box, Tag, useColorModeValue, Icon } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FiGitPullRequest } from "react-icons/fi";
import LinkText from "../../components/common/LinkText";
import TextLink from "../../components/common/TextLink";
import { VERSION_1_FAQ } from "../../data/DocLinks";
import { HFColors } from "../Hacktoberfest/hf_colors";

interface Props {
  isHidden?: boolean;
}

export const Content = () => (
  <Fragment>
    <Tag colorScheme={"cyan"} variant="solid" mx="2" size="sm">
      New
    </Tag>
    We are participating in Hacktoberfest 2022. Contribute to Resuminator&apos;s
    open source codebase{" "}
    <LinkText
      href="/hacktoberfest"
      color={HFColors.text.primary}
      textDecoration="underline"
      fontWeight={"bold"}
    >
      Learn more
    </LinkText>
  </Fragment>
);

const Announcement: React.FC<Props> = ({ isHidden = false, children }) => {
  // const textColor = useColorModeValue("blue.800", "blue.100");
  // const bgColor = useColorModeValue("blue.50", "blue.900");

  //Hacktoberfest Notice Colors
  const textColor = useColorModeValue(
    HFColors.text.secondary,
    HFColors.text.light
  );
  const bgColor = useColorModeValue(HFColors.bg.primary, HFColors.bg.secondary);

  return (
    !isHidden && (
      <Box
        bg={bgColor}
        width="100%"
        p="2"
        color={textColor}
        textAlign="center"
        fontSize="sm"
        bgGradient={`linear(to-r, #FFE27D, #64E3FF, #9092FF)`}
      >
        <Content />
      </Box>
    )
  );
};

export default Announcement;
