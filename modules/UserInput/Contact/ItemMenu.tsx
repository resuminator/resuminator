import { IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { CgOptions } from "react-icons/cg";
import { FiEye } from "react-icons/fi";
import { IoMdRemoveCircle } from "react-icons/io";
import { ContactDataObject } from "./types";

interface Props {
  item?: ContactDataObject;
  index?: number;
  handlers?: { hide: (index: number) => void; remove: (index: number) => void };
}

const ItemMenu: React.FC<Props> = ({ item, index, handlers }) => {
  const { hide, remove } = handlers;
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        label="Options"
        aria-label="Show-Current-Handle-Options"
        icon={<CgOptions />}
      />
      <MenuList>
        <MenuItem name="hide" icon={<FiEye />} onClick={() => hide(index)}>
          {item.isHidden ? "Show on resume" : "Hide from resume"}
        </MenuItem>
        <MenuItem
          name="remove"
          color="red.500"
          icon={<IoMdRemoveCircle />}
          onClick={() => remove(index)}
        >
          Remove
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ItemMenu;
