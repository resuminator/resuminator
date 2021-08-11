import { ButtonGroup } from "@chakra-ui/button";
import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import TabButton from "./TabButton";

interface TabItem {
  label: string;
  link: string;
  key: string;
}

interface Props {
  id: string | string[];
  currentRoute: string;
}

const NavTabs: React.FC<Props> = ({ id, currentRoute }) => {
  const getDefaultTabs = (id: Props["id"]): Array<TabItem> => [
    { key: "home", label: "Home", link: "/home" },
    { key: "create", label: "Create", link: `/create/${id}` },
    { key: "design", label: "Design", link: `/design/${id}` },
    { key: "share", label: "Share", link: `/share/${id}` },
  ];

  const tabs = getDefaultTabs(id);

  return (
    <Box>
      <ButtonGroup isAttached px="4">
        {tabs.map((tabitem) => (
          <TabButton
            key={tabitem.key}
            isSelected={currentRoute.split("/").includes(tabitem.key)}
            href={tabitem.link}
            isDisabled={tabitem.key !== "home" && !id.length}
          >
            {tabitem.label}
          </TabButton>
        ))}
      </ButtonGroup>
      <Divider />
    </Box>
  );
};

export default NavTabs;
