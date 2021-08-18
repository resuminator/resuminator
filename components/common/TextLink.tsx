import { Text, TextProps } from "@chakra-ui/react";

interface TextLinkProps extends TextProps {
  link: string;
  text: string;
}

const TextLink: React.FC<TextLinkProps> = ({
  link,
  text,
  color = "blue.500",
  ...rest
}) => (
  <Text
    as="a"
    href={link}
    color={color}
    target="_blank"
    _hover={{ textDecoration: "underline" }}
    {...rest}
  >
    {text}
  </Text>
);

export default TextLink;
