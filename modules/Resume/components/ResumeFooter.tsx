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

import { Text } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../../components/common/TextLink";
import { WEBSITE } from "../../../data/RefLinks";

interface ResumeFooterProps {
  color?: string;
}

const ResumeFooter: React.FC<ResumeFooterProps> = ({ color }) => {
  return (
    <Text
      as="footer"
      fontSize="sm"
      color="gray"
      width="100%"
      textAlign="center"
      p="1"
      flexShrink={0}
    >
      Built with{" "}
      <TextLink
        fontFamily="Manrope"
        fontWeight="bold"
        text="Resuminator"
        link={WEBSITE}
        color={color}
      />
    </Text>
  );
};

export default ResumeFooter;
