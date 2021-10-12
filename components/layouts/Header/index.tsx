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

import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import useResumeStore from "../../../store/resume.store";
import { LogoSquare } from "../Logos";
import NavTabs from "../NavTabs";
import UserMenu from "../../../modules/Settings/UserMenu";
import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const savedState = useResumeStore((state) => state._id);
  const id = router.query.id ? router.query.id : savedState;

  return (
    <Box
      my={{ base: "1rem" }}
      px={{ md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoSquare />
      <NavTabs id={id} currentRoute={router.pathname} />
      <HStack spacing="4">
        <IconButton
          aria-label="Color-Toggle"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          variant="ghost"
          colorScheme={useColorModeValue("gray", "blue")}
        />
        <UserMenu />
      </HStack>
    </Box>
  );
};

export default Header;
