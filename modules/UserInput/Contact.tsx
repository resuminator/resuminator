import { Button, IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import {
  FaChevronDown,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaPlus,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Section from "../../components/layouts/Section";

const Contact = () => {
  return (
    <Section
      header={{
        title: "Where can people contact you",
        subtitle: "Select the service and enter your social handle",
      }}
    >
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            <HStack>
              <FaLinkedin />
              <Text>LinkedIn</Text>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaLinkedin />}>LinkedIn</MenuItem>
            <MenuItem icon={<FaTwitter />}>Twitter</MenuItem>
            <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
            <MenuItem icon={<FiMail />}>Email</MenuItem>
            <MenuItem icon={<FaPhoneAlt />}>Phone</MenuItem>
            <MenuItem icon={<FaUserAlt />}>Portfolio</MenuItem>
            <MenuItem icon={<FaLink />}>Custom</MenuItem>
          </MenuList>
        </Menu>
        <Input variant="outline" w="16rem" />
        <Tooltip label="Add New Handle">
          <IconButton aria-label="Add-New-Contact-Handle" icon={<FaPlus />} />
        </Tooltip>
      </HStack>
    </Section>
  );
};

export default Contact;
