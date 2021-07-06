import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Fragment } from "react";
import { IconType } from "react-icons/lib";

interface SidebarOptionsProps {
  itemList: Array<{ title: string; icon: IconType; isDisabled: boolean }>;
}

const SidebarOptions: React.FC<SidebarOptionsProps> = ({ itemList }) => {
  return (
    <Fragment>
      {itemList.map((item) => (
        <HStack key={item.title} transition="0.2s all" width="inherit">
          <Button
            isDisabled={item.isDisabled}
            variant="ghost"
            isFullWidth
            justifyContent="left"
            fontWeight="normal"
            size="sm"
            leftIcon={<item.icon />}
          >
            {item.title}
          </Button>
        </HStack>
      ))}
    </Fragment>
  );
};

export default SidebarOptions;
