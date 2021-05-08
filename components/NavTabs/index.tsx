import { ButtonGroup } from "@chakra-ui/button";
import { Divider } from "@chakra-ui/layout";
import React, { Fragment } from "react";
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
    <Fragment>
      <ButtonGroup isAttached p="4" pb="0">
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
    </Fragment>
  );
};

const defaultTabs = [
  { label: "Home", link: "/home" },
  { label: "Create", link: "/create" },
  { label: "Design", link: "/design" },
  { label: "Share", link: "/share" },
];

export default NavTabs;
