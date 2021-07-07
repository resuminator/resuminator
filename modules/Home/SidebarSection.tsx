import {
  Box,
  Button,
  ButtonProps,
  HStack, Text
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons/lib";

export type SideBarItems = Array<{
  title: string;
  icon: IconType;
  link: string;
}>;
interface SidebarOptionsProps {
  sectionTitle?: string;
  items: SideBarItems;
  itemProps?: ButtonProps;
}

const SidebarSection: React.FC<SidebarOptionsProps> = ({
  sectionTitle,
  items,
  itemProps = { size: "sm" },
}) => {
  const router = useRouter();
  const pathname = router.pathname;
  
  return (
    <Box mb="4" width="100%">
      <Text
        fontSize="sm"
        color="InactiveCaptionText"
        fontWeight="semibold"
        letterSpacing="wider"
        textTransform="uppercase"
        pb="2"
      >
        {sectionTitle}
      </Text>
      {items.map((item) => (
        <HStack
          key={item.title}
          transition="0.2s all"
          width="inherit"
        >
          <Link href={item.link}>
            <Button
              {...itemProps}
              isFullWidth
              isDisabled={!item.link.length}
              variant="ghost"
              justifyContent="left"
              fontWeight={item.link === pathname ? "semibold" : "normal"}
              leftIcon={<item.icon />}
              color={item.link === pathname ? "blue" : "inherit"}
            >
              {item.title}
            </Button>
          </Link>
        </HStack>
      ))}
    </Box>
  );
};

export default SidebarSection;
