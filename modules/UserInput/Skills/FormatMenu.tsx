import { Button } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { AiFillTags } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import useSkillStore from "./store";

const FormatMenu = () => {
const format = useSkillStore(state => state.format); 
const toggleFormat = useSkillStore((state) => state.toggleFormat);
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
        <MenuItem icon={<BsGridFill />} onClick={() => toggleFormat()}>
          Categories
        </MenuItem>
        <MenuItem icon={<AiFillTags />} onClick={() => toggleFormat()}>
          Tags
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default FormatMenu;
