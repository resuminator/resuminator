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

import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { LogoSquare, LogoWithText } from "../../components/layouts/Logos";

const AuthFormHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <HStack
        display={{ base: "none", lg: "inherit" }}
        flex="1 0"
        flexBasis="60%"
        marginBottom={"1.5rem"}
        spacing={"1rem"}
      >
        <LogoSquare href="/" />
        <LogoWithText />
      </HStack>
      <Text fontSize={"36px"} mb="2rem" letterSpacing={"tight"}>
        {title}
      </Text>
    </>
  );
};

export default AuthFormHeader;
