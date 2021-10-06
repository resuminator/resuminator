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

import { useDisclosure } from "@chakra-ui/hooks";
import { Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import { getIconForService, labelIsPresent } from "./helpers";
import { ContactData, ContactDataObject, SocialHandleObject } from "./types";
const ActionModal = dynamic(
  () => import("../../../components/common/ActionModal")
);

export const SocialHandles: Array<SocialHandleObject> = [
  { label: "LinkedIn" },
  { label: "Twitter" },
  { label: "GitHub" },
  { label: "GitLab" },
  { label: "Email" },
  { label: "Phone" },
  { label: "Portfolio" },
  { label: "Behance" },
  { label: "Dribbble" },
  { label: "YouTube" }
];

interface Props {
  handler: {
    data: ContactData;
    add: (obj: ContactDataObject) => void;
  };
}

const SocialMediaMenu: React.FC<Props> = ({ handler }) => {
  const { data, add } = handler;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValues, setModalValues] = useState({ link: "", identifier: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    setModalValues({ ...modalValues, [key]: value });
  };

  return (
    <Menu>
      <MenuButton
        as={TooltipIconButton}
        icon={<FiPlus />}
        aria-label="Add New Handle"
        label="Add new handle"
      />
      <MenuList zIndex="50">
        {SocialHandles.map((item) =>
          labelIsPresent(data, item.label) ? null : (
            <MenuItem
              key={item.label}
              icon={React.createElement(getIconForService(item.label))}
              onClick={() =>
                add({
                  label: item.label,
                  link: "",
                  isHidden: false
                })
              }
            >
              {item.label}
            </MenuItem>
          )
        )}
        <MenuItem
          icon={React.createElement(getIconForService("Custom"))}
          onClick={onOpen}
        >
          Custom
        </MenuItem>
        <ActionModal
          title="Create new custom contact input"
          color="green"
          buttonText="Create"
          isOpen={isOpen}
          onClick={() => {
            add({
              label: "Custom",
              link: modalValues.link,
              isHidden: false,
              identifier: modalValues.identifier
            });
            setModalValues({ link: "", identifier: "" });
            onClose();
          }}
          onClose={onClose}
        >
          <Text fontSize="sm" mb="2">
            Create a custom contact input by entering the{" "}
            <strong>Identifier</strong> (the text which shall display on your
            resume) and a <strong>Link</strong> (where should the identifier
            redirect)
          </Text>
          <Text color="InactiveCaptionText" fontSize="sm" mb="4">
            Pattern: <code>{"https://<service>.com/<identifier>"}</code>
          </Text>
          <InputWithLabel
            label="Link to handle"
            value={modalValues.link}
            name="link"
            onChange={handleChange}
            placeholder="https://youtube.com/c/viveknigam3003"
          />
          <InputWithLabel
            label="Identifier"
            value={modalValues.identifier}
            name="identifier"
            onChange={handleChange}
            autoFocus
            placeholder="viveknigam3003"
          />
        </ActionModal>
      </MenuList>
    </Menu>
  );
};

export default SocialMediaMenu;
