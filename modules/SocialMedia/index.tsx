import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { FiPlus } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import { DataObject } from "../UserInput/Contact";
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

type Data = Array<DataObject>;

interface Props {
  handler: {
    data: Data;
    setData: React.Dispatch<React.SetStateAction<Data>>;
  };
}

const SocialMediaMenu: React.FC<Props> = ({ handler }) => {
  const { data, setData } = handler;
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
              setData([
                ...data,
                {
                  label: item.label,
                  icon: getIconForService(item.label),
                  isHidden: false,
                },
              ])
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
