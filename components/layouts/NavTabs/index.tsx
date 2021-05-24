import { ButtonGroup } from "@chakra-ui/button";
import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import TabButton from "./TabButton";

interface TabItem {
  label: string;
  link: string;
}

interface Props {
  tabs?: Array<TabItem>;
  currentRoute: string;
}

const NavTabs: React.FC<Props> = ({ tabs = defaultTabs, currentRoute }) => {
  return (
    <Box>
      <ButtonGroup isAttached px="4">
        {tabs.map((tabitem) => (
          <TabButton
            isSelected={tabitem.link === currentRoute}
            key={tabitem.link}
            href={tabitem.link}
          >
            {tabitem.label}
          </TabButton>
        ))}
      </ButtonGroup>
      <Divider />
    </Box>
  );
};

const defaultTabs = [
  { label: "Home", link: "/home" },
  { label: "Create", link: "/create" },
  { label: "Design", link: "/design" },
  { label: "Share", link: "/share" },
];

export default NavTabs;
