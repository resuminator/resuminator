import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { useState } from "react";
import { CgOptions } from "react-icons/cg";
import {
  FaGithub,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { FiEye, FiEyeOff, FiHelpCircle, FiMail, FiPlus } from "react-icons/fi";
import { IoMdRemoveCircle } from "react-icons/io";
import { IconType } from "react-icons/lib";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import Section from "../../components/layouts/Section";

type Services =
  | "LinkedIn"
  | "Twitter"
  | "GitHub"
  | "Email"
  | "Phone"
  | "Portfolio"
  | "Custom"
  | string;
interface SocialHandleObject {
  label: Services | string;
  icon?: IconType;
}

const SocialHandles: Array<SocialHandleObject> = [
  { label: "LinkedIn" },
  { label: "Twitter" },
  { label: "GitHub" },
  { label: "Email" },
  { label: "Phone" },
  { label: "Portfolio" },
  { label: "Custom" },
];

const getIconForService = (label: Services) => {
  switch (label) {
    case "LinkedIn":
      return FaLinkedin;
    case "Twitter":
      return FaTwitter;
    case "GitHub":
      return FaGithub;
    case "Email":
      return FiMail;
    case "Phone":
      return FaPhoneAlt;
    case "Portfolio":
      return FaUserAlt;
    default:
      return FaLink;
  }
};

const getColorSchemeForService = (label: Services) => {
  switch (label) {
    case "LinkedIn":
      return "cyan.600";
    case "Twitter":
      return "cyan.400";
    case "GitHub":
      return "gray";
    case "Email":
      return "teal";
    case "Phone":
      return "green.500";
    case "Portfolio":
      return "purple.500";
    default:
      return "blue.500";
  }
};

interface DataObject extends SocialHandleObject {
  isHidden?: boolean;
}

const Contact = () => {
  const [properties, setProperties] = useState({ isHidden: false });
  const [data, setData] = useState<Array<DataObject>>([]);

  const handleDelete = (index: number) => {
    const preList = data.slice(0, index);
    const postList = data.slice(index + 1);
    setData([...preList, ...postList]);
  };

  const handleHide = (index: number) => {
    const current: DataObject = data[index];
    const nextCurrent = { ...current, isHidden: !current.isHidden };
    const preList = data.slice(0, index);
    const postList = data.slice(index + 1);
    setData([...preList, nextCurrent, ...postList]);
  };

  return (
    <Section
      header={{
        title: "Where can people contact you",
        subtitle: "Select the service and enter your social handle",
        mb: "2",
      }}
    >
      <HStack mb="4" spacing="4">
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
        <TooltipIconButton
          aria-label="Toggle Visibility"
          label="Toggle Visibility"
          icon={properties.isHidden ? <FiEyeOff /> : <FiEye />}
          onClick={() =>
            setProperties({ ...properties, isHidden: !properties.isHidden })
          }
          colorScheme={properties.isHidden ? "red" : ""}
        />
        <TooltipIconButton
          aria-label="Know More"
          label="Know More"
          icon={<FiHelpCircle />}
        />
      </HStack>

      {/* Displaying user handles */}
      {data.map((item, index) => (
        <HStack key={item.label} mb="2">
          <InputGroup>
            <InputLeftElement>
              <Icon
                as={item.icon}
                color={getColorSchemeForService(item.label)}
              />
            </InputLeftElement>
            <Input
              variant="filled"
              w="16rem"
              isDisabled={item.isHidden}
              fontSize="sm"
            />
          </InputGroup>
          <Menu>
            <Tooltip label="Options">
              <MenuButton
                as={IconButton}
                aria-label="Show-Current-Handle-Options"
                icon={<CgOptions />}
              />
            </Tooltip>
            <MenuList>
              <MenuItem
                name="hide"
                icon={<FiEye />}
                onClick={() => handleHide(index)}
              >
                {item.isHidden ? "Show on resume" : "Hide from resume"}
              </MenuItem>
              <MenuItem
                name="remove"
                color="red.500"
                icon={<IoMdRemoveCircle />}
                onClick={() => handleDelete(index)}
              >
                Remove
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      ))}
    </Section>
  );
};

export default Contact;
