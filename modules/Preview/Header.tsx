/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022 Resuminator Authors

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

import { Box, HStack, IconButton } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import ColorModeToggle from "../../components/layouts/Header/ColorModeToggle";
import { LogoWithText } from "../../components/layouts/Logos";

interface Props {}

const PreviewHeader = (props: Props) => {
  return (
    <Box
      py="4"
      width={"100%"}
      px={{ md: "4rem", lg: "7rem" }}
      display={"flex"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <LogoWithText
        width={"120px"}
        height={"24px"}
        filter="grayscale(1)"
        opacity={"0.5"}
      />
      <HStack>
        <IconButton
          aria-label="Download Resume"
          icon={<FiDownload />}
          size="sm"
          variant={"ghost"}
          colorScheme="gray"
        />
        <ColorModeToggle />
      </HStack>
    </Box>
  );
};

export default PreviewHeader;
