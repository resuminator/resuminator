import { Text, TextProps } from "@chakra-ui/layout";
import Link from "next/link";

interface Props {
  href: string;
}

const LinkText: React.FC<Props & TextProps> = ({
  href = "",
  children,
  ...rest
}) => {
  return (
    <Text as="span" cursor="pointer" _hover={{ textDecorationLine: "underline" }} {...rest}>
      <Link href={href}>{children}</Link>
    </Text>
  );
};

export default LinkText;
