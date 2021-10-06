/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Box, Button, ButtonProps, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons/lib";
import { useColorModeValue } from "@chakra-ui/react";

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
  itemProps = { size: "sm" }
}) => {
  const colorScheme = useColorModeValue("blue", "blue.200");
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
        <HStack key={item.title} transition="0.2s all" width="inherit">
          <Link href={item.link}>
            <Button
              {...itemProps}
              isFullWidth
              isDisabled={!item.link.length}
              variant="ghost"
              justifyContent="left"
              fontWeight={item.link === pathname ? "semibold" : "normal"}
              leftIcon={<item.icon />}
              color={item.link === pathname ? colorScheme : "inherit"}
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
