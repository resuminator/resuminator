import { Stack } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../components/common/TextLink";
import {
  COOKIE_POLICY,
  GUIDES,
  HELP_CENTER,
  LICENSE,
  PRIVACY_POLICY
} from "../../data/DocLinks";
import ListHeader from "./ListHeader";

const SupportLinks = [
  {
    text: "Help Center",
    link: HELP_CENTER,
  },
  {
    text: "License",
    link: LICENSE,
  },
  {
    text: "Privacy Policy",
    link: PRIVACY_POLICY,
  },
  {
    text: "Cookie Policy",
    link: COOKIE_POLICY,
  },
  {
    text: "Guides",
    link: GUIDES,
  },
];

const Support = () => {
  return (
    <Stack>
      <ListHeader>Support</ListHeader>
      {SupportLinks.map((item) => (
        <TextLink
          key={item.text}
          text={item.text}
          link={item.link}
          color="blue.100"
          fontSize="sm"
        />
      ))}
    </Stack>
  );
};

export default Support;
