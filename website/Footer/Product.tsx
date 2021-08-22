import { Stack } from "@chakra-ui/react";
import React from "react";
import LinkText from "../../components/common/LinkText";
import ListHeader from "./ListHeader";

const ProductLinks = [
  {
    text: "Features",
    link: "#",
  },
  {
    text: "Tutorials",
    link: "#",
  },
  {
    text: "Sponsor",
    link: "#",
  },
  {
    text: "About Us",
    link: "#",
  },
];

const Product = () => {
  return (
    <Stack>
      <ListHeader>Product</ListHeader>
      {ProductLinks.map((item) => (
        <LinkText
          key={item.text}
          href={item.link}
          color="blue.100"
          fontSize="sm"
        >
          {item.text}
        </LinkText>
      ))}
    </Stack>
  );
};

export default Product;
