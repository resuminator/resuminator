import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface SidebarOptionsProps {
  sectionTitle: string;
  items: Array<{
    title: string;
    icon: IconType;
    link: string;
  }>;
}

const SidebarSection: React.FC<SidebarOptionsProps> = ({
  sectionTitle,
  items,
}) => {
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
        <HStack key={item.title} transition="0.2s all" width="inherit">
          <Link href={item.link}>
            <Button
              isFullWidth
              isDisabled={!item.link.length}
              variant="ghost"
              justifyContent="left"
              fontWeight="normal"
              size="sm"
              leftIcon={<item.icon />}
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
