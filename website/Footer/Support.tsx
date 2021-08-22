import { Stack } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../components/common/TextLink";
import ListHeader from "./ListHeader";

export const SupportLinks = [
  {
    text: "Help Center",
    link: "#",
  },
  {
    text: "License",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Cookie Policy",
    link: "#",
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
