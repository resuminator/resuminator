import Icon from "@chakra-ui/icon";
import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import {
  generateLinkForLabel,
  getColorSchemeForService,
  getIconForService
} from "../../UserInput/Contact/helpers";
import useContactStore from "../../UserInput/Contact/store";
import TextItem from "../components/TextItem";

const SocialHandlesLayout = () => {
  const data = useContactStore((state) => state.contact);

  return (
    <Stack aria-label="Social Handles" wrap="wrap" isInline>
      {data
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Box
            aria-label={item.label}
            display="flex"
            alignItems="center"
            key={item.label}
          >
            <Icon
              as={getIconForService(item.label)}
              color={getColorSchemeForService(item.label)}
              mr="1"
            />
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
