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

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { BoxProps, Flex } from "@chakra-ui/react";
import React from "react";
import ColoredDivider from "../../components/common/ColoredDivider";
import useGlobalStore from "../../store/global.store";
import ResumePaper from "../Resume";
import AutoSaveStatus from "./AutoSaveStatus";
import OverflowWarning from "./OverflowWarning";

interface ViewerProps {
  withStatus?: boolean;
}

const Viewer: React.FC<ViewerProps & BoxProps> = ({ withStatus, ...props }) => {
  const contentOverflow = useGlobalStore((state) => state.contentOverflow);

  return (
    <Box {...props}>
      <Flex justifyContent="space-between">
        {withStatus ? <AutoSaveStatus /> : null}
        {contentOverflow ? <OverflowWarning /> : null}
      </Flex>
      <Box
        borderRadius="10px"
        bg={useColorModeValue("white", "inherit")}
        shadow={useColorModeValue("lg", "2xl")}
        width="21cm"
        height="29.7cm"
        overflowY="auto"
        className="viewer"
      >
        <ResumePaper />
        {contentOverflow ? (
          <ColoredDivider
            color="yellow.500"
            position="absolute"
            zIndex="1"
            top="29.7cm"
            width="21cm"
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Viewer;
