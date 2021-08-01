import { Text } from "@chakra-ui/react";
import React from "react";
import TextLink from "./TextLink";

interface ImageCreditProps {
  author: { name: string; link: string };
  source: { name: string; link: string };
}

const ImageCredit: React.FC<ImageCreditProps> = ({ author, source }) => {
  return (
    <Text fontSize="xs" color="gray">
      Illustration by <TextLink text={author.name} link={author.link} /> from{" "}
      <TextLink text={source.name} link={source.link} />
    </Text>
  );
};

export default ImageCredit;
