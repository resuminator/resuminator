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

import {
  Box,
  Button,
  Collapse,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import { navLinkDetails } from "./links";
import LoginSignupButtons from "./LoginSignupButtons";

const CollapseMenu = ({ isOpen, onToggle }) => {
  return (
    <Collapse in={isOpen}>
      <Box
        mt="1"
        borderRadius="md"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
        minH="90vh"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Stack alignItems="flex-start" pt="4">
          {navLinkDetails.map((item) => (
            <Button
              key={item.label}
              as="a"
              href={item.link}
              variant="ghost"
              size="md"
              fontWeight="normal"
              onClick={onToggle}
              colorScheme="blue"
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <LoginSignupButtons
          display={{ md: "none" }}
          justifyContent="center"
          mb="8"
          ml="8"
        />
      </Box>
    </Collapse>
  );
};

export default CollapseMenu;
