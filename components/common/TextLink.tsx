import { Text, TextProps } from "@chakra-ui/react";

interface TextLinkProps extends TextProps {
  link: string;
  text: string;
}

const TextLink: React.FC<TextLinkProps> = ({ link, text, ...rest }) => (
  <Text
    as="a"
    href={link}
    color="blue.500"
    target="_blank"
    _hover={{ textDecoration: "underline" }}
    {...rest}
  >
    {text}
  </Text>
);

export default TextLink;
