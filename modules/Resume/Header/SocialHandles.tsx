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
      spacing="4"
      isInline
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
          >
            <Icon
              as={getIconForService(item.label)}
              color={primaryColor}
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
