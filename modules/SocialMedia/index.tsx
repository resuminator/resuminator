import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { FiPlus } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import { ContactDataObject } from "../UserInput/Contact/types";
import { getIconForService } from "./helpers";
import { SocialHandleObject } from "./types";

export const SocialHandles: Array<SocialHandleObject> = [
  { label: "LinkedIn" },
  { label: "Twitter" },
  { label: "GitHub" },
  { label: "Email" },
  { label: "Phone" },
  { label: "Portfolio" },
  { label: "Custom" },
];
interface Props {
  handler: {
    add: (obj: ContactDataObject) => void;
  };
}

const SocialMediaMenu: React.FC<Props> = ({ handler }) => {
  const { add } = handler;
  return (
    <Menu>
      <MenuButton
        as={TooltipIconButton}
        icon={<FiPlus />}
        aria-label="Add New Handle"
        label="Add new handle"
      />
      <MenuList zIndex="50">
        {SocialHandles.map((item) => (
          <MenuItem
            key={item.label}
            icon={React.createElement(getIconForService(item.label))}
            onClick={() =>
              add({
                label: item.label,
                link: "",
                icon: getIconForService(item.label),
                isHidden: false,
              })
            }
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SocialMediaMenu;
