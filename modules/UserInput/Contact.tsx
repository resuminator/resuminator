import { Button, IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { ReactElement, useState } from "react";
import { CgOptions } from "react-icons/cg";
import {
  FaChevronDown,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaUserAlt
} from "react-icons/fa";
import { FiEye, FiMail } from "react-icons/fi";
import { IoMdRemoveCircle } from "react-icons/io";
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
  icon?: ReactElement;
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

interface SelectedHandleObject extends SocialHandleObject {
  isHidden: boolean;
}

const getIconForService = (label: Services) => {
  switch (label) {
    case "LinkedIn":
      return <FaLinkedin />;
    case "Twitter":
      return <FaTwitter />;
    case "GitHub":
      return <FaGithub />;
    case "Email":
      return <FiMail />;
    case "Phone":
      return <FaPhoneAlt />;
    case "Portfolio":
      return <FaUserAlt />;
    default:
      return <FaLink />;
  }
};

const getColorSchemeForService = (label: Services) => {
  switch (label) {
    case "LinkedIn":
      return "linkedin";
    case "Twitter":
      return "twitter";
    case "GitHub":
      return "gray";
    case "Email":
      return "teal";
    case "Phone":
      return "green";
    case "Portfolio":
      return "purple";
    default:
      return "blue";
  }
};

const Contact = () => {
  const [data, setData] = useState([{ label: "LinkedIn" }]);
  const [current, setCurrent] = useState<SelectedHandleObject>({
    label: "LinkedIn",
    icon: getIconForService("LinkedIn"),
    isHidden: false,
  });

  return (
    <Section
      header={{
        title: "Where can people contact you",
        subtitle: "Select the service and enter your social handle",
      }}
    >
      {data.map((item) => (
        <HStack key={item.label}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaChevronDown />}
              colorScheme={getColorSchemeForService(current.label)}
            >
              <HStack>
                {getIconForService(current.label)}
                <Text>{current.label}</Text>
              </HStack>
            </MenuButton>
            <MenuList>
              {SocialHandles.map((item) => (
                <MenuItem
                  key={item.label}
                  icon={getIconForService(item.label)}
                  onClick={() => setCurrent({ ...current, label: item.label })}
                >
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Input variant="outline" w="16rem" />
          <Menu>
            <Tooltip label="Options">
              <MenuButton
                as={IconButton}
                aria-label="Show-Current-Handle-Options"
                icon={<CgOptions />}
              />
            </Tooltip>
            <MenuList>
              <MenuItem icon={<FiEye />}>
                {current.isHidden ? "Show on resume" : "Hide from resume"}
              </MenuItem>
              <MenuItem color="red.500" icon={<IoMdRemoveCircle />}>
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
