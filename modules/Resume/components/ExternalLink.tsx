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

import Icon from "@chakra-ui/icon";
import { Text, TextProps } from "@chakra-ui/layout";
import { ComponentWithAs } from "@chakra-ui/system";
import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const ExternalLink: ComponentWithAs<"p", TextProps> = ({ ...props }) => {
  const { fontSize, ...rest } = useContext(StylePropsContext).titleRowProps;
  const hoverProps = props.href && {
    _hover: { textDecoration: "underline" },
    transition: "0.2s all"
  };

  return props.href ? (
    <Text
      fontSize="sm"
      pb="2"
      target="_blank"
      {...rest}
      {...hoverProps}
      {...props}
    >
      Link
      <span>
        <Icon as={FiExternalLink} mx="1" height="0.8rem" />
      </span>
    </Text>
  ) : null;
};

export default ExternalLink;
