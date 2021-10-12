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

import Icon from "@chakra-ui/icon";
import { Box, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import useResumeStore from "../../../store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";
import {
  generateLinkForLabel,
  getIconForService
} from "../../UserInput/Contact/helpers";
import useContactStore from "../../UserInput/Contact/store";
import TextItem from "../components/TextItem";

const SocialHandlesLayout = () => {
  const data = useContactStore((state) => state.contact);
  const primaryColor = useContext(StylePropsContext).primaryColor;
  const spacing = useResumeStore((state) => state.spacing);

  return (
    <Stack
      aria-label="Social Handles"
      wrap="wrap"
      spacing="2"
      isInline
      shouldWrapChildren
      px={spacing * 8}
      py={spacing * 2}
    >
      {data
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Box
            aria-label={item.label}
            display="flex"
            alignItems="center"
            key={item.label}
            pb="1"
          >
            <Icon as={getIconForService(item.label)} color="gray.600" mr="1" />
            {item.identifier ? (
              <TextItem
                aria-label={item.identifier}
                as="a"
                href={generateLinkForLabel(item.identifier, item.link)}
                target="_blank"
                _hover={{ textDecoration: "underline" }}
              >
                {item.identifier}
              </TextItem>
            ) : (
              <TextItem
                aria-label={item.label}
                as="a"
                href={generateLinkForLabel(item.label, item.link)}
                target="_blank"
                _hover={{ textDecoration: "underline" }}
              >
                {item.link}
              </TextItem>
            )}
          </Box>
        ))}
    </Stack>
  );
};

export default SocialHandlesLayout;
