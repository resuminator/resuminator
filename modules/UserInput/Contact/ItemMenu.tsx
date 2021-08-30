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

import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import dynamic from "next/dynamic";
import React from "react";
import { CgOptions } from "react-icons/cg";
import { FiEdit, FiEye } from "react-icons/fi";
import { IoMdRemoveCircle } from "react-icons/io";
import InputWithLabel from "../../../components/common/InputWithLabel";
import { ContactDataObject } from "./types";
const ActionModal = dynamic(
  () => import("../../../components/common/ActionModal")
);

interface Props {
  item?: ContactDataObject;
  index?: number;
  handlers?: {
    hide: (index: number) => void;
    remove: (index: number) => void;
    update?: (index: number, key: string, value: any) => void;
  };
}

const ItemMenu: React.FC<Props> = ({ item, index, handlers }) => {
  const { hide, remove, update } = handlers;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isLazy placement="auto">
      <MenuButton
        as={IconButton}
        label="Options"
        aria-label="Show-Current-Handle-Options"
        icon={<CgOptions />}
      />
      <MenuList>
        {item.identifier !== undefined && (
          <MenuItem name="identifier" icon={<FiEdit />} onClick={onOpen}>
            Change identifier
          </MenuItem>
        )}
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
      <ActionModal
        isOpen={isOpen}
        onClick={onClose}
        onClose={onClose}
        title="Edit link identifier"
        buttonText="Confirm"
        color="green"
      >
        <Text fontSize="sm" wordBreak="break-word" mb="4">
          Change the identifier for {item.link}. This will be the text which
          will show on your resume. Make sure it represents the link you are
          willing to redirect the recruiter to.
        </Text>
        <InputWithLabel
          label="New Identifier"
          value={item.identifier}
          onChange={(e) => update(index, "identifier", e.target.value)}
        />
      </ActionModal>
    </Menu>
  );
};

export default ItemMenu;
