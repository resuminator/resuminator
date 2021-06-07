import Icon from "@chakra-ui/icon";
import { Box, HStack, Stack } from "@chakra-ui/layout";
import React from "react";
import {
  generateLinkForLabel,
  getColorSchemeForService,
  getIconForService,
} from "../../UserInput/Contact/helpers";
import useContactStore from "../../UserInput/Contact/store";
import TextItem from "../components/TextItem";

const SocialHandlesLayout = () => {
  const data = useContactStore((state) => state.contact);

  return (
    <Stack wrap="wrap" isInline>
      {data
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Box display="flex" alignItems="center" key={item.label}>
            <Icon
              as={getIconForService(item.label)}
              color={getColorSchemeForService(item.label)}
              mr="1"
            />
            {item.identifier ? (
              <TextItem
                as="a"
                href={generateLinkForLabel(item.identifier, item.link)}
                target="_blank"
              >
                {item.identifier}
              </TextItem>
            ) : (
              <TextItem
                as="a"
                href={generateLinkForLabel(item.label, item.link)}
                target="_blank"
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
