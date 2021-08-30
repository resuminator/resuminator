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
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Text } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import TooltipIconButton from "./TooltipIconButton";
const ActionModal = dynamic(() => import("./ActionModal"));

interface Props {
  itemType?: string;
  handleDelete: () => void;
}

const RemoveItemButton: React.FC<Props> = ({
  itemType = "item",
  handleDelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <TooltipIconButton
        label="Remove Item"
        colorScheme="red"
        aria-label="Remove-Item-From-Resume"
        icon={<RiDeleteBin6Line />}
        onClick={onOpen}
      />
      <ActionModal
        title="Confirm delete"
        buttonText="Delete"
        isOpen={isOpen}
        onClick={() => {
          handleDelete();
          onClose();
        }}
        onClose={onClose}
      >
        Are you sure you want to delete this {itemType} from your resume? This
        action is irreversible. <br />
        <br />
        <Text
          fontSize="sm"
          color={useColorModeValue("GrayText", "whiteAlpha.700")}
        >
          If you wished to just hide it from your resume but still keep the data
          you can do it by using the eye icon (
          <Icon as={FiEye} m="1" color="blue.500" />) button on the item.
        </Text>
      </ActionModal>
    </Fragment>
  );
};

export default RemoveItemButton;
