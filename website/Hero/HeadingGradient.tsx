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

import { Text, useColorModeValue } from "@chakra-ui/react";

const HeadingGradient: React.FC = ({ children }) => {
  const lightGradient = "linear(315deg, #24C6DC 0%, #514A9D 74%)";
  const darkGradient =
    "linear-gradient(90deg, rgba(144,205,244,1) 0%, rgba(101,222,247,1) 15%, rgba(81,237,229,1) 35%, rgba(119,247,193,1) 55%, rgba(180,251,149,1) 75%, rgba(249,248,113,1) 95%)";

  return (
    <Text
      as="span"
      bgGradient={useColorModeValue(lightGradient, darkGradient)}
      bgClip="text"
    >
      {children}{" "}
    </Text>
  );
};

export default HeadingGradient;
