import Icon from "@chakra-ui/icon";
import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import {
  getColorSchemeForService,
  getIconForService
} from "../../UserInput/Contact/helpers";
import useContactStore from "../../UserInput/Contact/store";
import TextItem from "../components/TextItem";

const SocialHandlesLayout = () => {
  const data = useContactStore((state) => state.contact);

  return (
    <HStack wrap="wrap">
      {data
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Box display="flex" alignItems="center" key={item.label}>
            <Icon
              as={getIconForService(item.label)}
              color={getColorSchemeForService(item.label)}
              mx="1"
            />
            {item.identifier ? (
              <TextItem>{item.identifier}</TextItem>
            ) : (
              <TextItem>{item.link}</TextItem>
            )}
          </Box>
        ))}
    </HStack>
  );
};

export default SocialHandlesLayout;
