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

import { Button } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { AiFillTags } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { patchSkillFormat } from "../../../apis/patchSkills";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePatchParams } from "../../../hooks/usePatchParams";
import { Result } from "../../../store/types";
import useSkillStore from "./store";

const FormatMenu = () => {
  const { format, setFormat } = useSkillStore();
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  const handleSubmit = async () => {
    return await patchSkillFormat(token, resumeId, { format: format === "CATEGORIES" ? "TAGS" : "CATEGORIES" })
      .then((res: Result) => {
        setFormat(res.skills.format);
        return createToast("Skill display style updated", "success");
      })
      .catch(() =>
        createToast(
          "Couldn't update display style",
          "error",
          "Please try again in sometime"
        )
      );
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        rightIcon={<FaChevronDown />}
        my={{ base: "4", md: "0" }}
      >
        {format === "CATEGORIES" ? (
          <HStack>
            <BsGridFill />
            <Text>Categories</Text>
          </HStack>
        ) : (
          <HStack>
            <AiFillTags />
            <Text>Tags</Text>
          </HStack>
        )}
      </MenuButton>
      <MenuList>
        <MenuItem icon={<BsGridFill />} onClick={handleSubmit}>
          Categories
        </MenuItem>
        <MenuItem icon={<AiFillTags />} onClick={handleSubmit}>
          Tags
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FormatMenu;
