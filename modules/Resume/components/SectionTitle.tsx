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

import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import ColoredDivider from "../../../components/common/ColoredDivider";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const SectionTitle: React.FC = ({ children }) => {
  const props = useContext(StylePropsContext).sectionTitleProps;
  const { color } = props;

  return (
    <Box mb="2">
      <Text aria-label="Section Title" {...props}>
        {children}
      </Text>
      <ColoredDivider color={color} />
    </Box>
  );
};

export default SectionTitle;
