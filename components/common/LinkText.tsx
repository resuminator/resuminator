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
    <Link href={href}>
      <Text
        as="span"
        cursor="pointer"
        _hover={{ textDecorationLine: "underline" }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

export default LinkText;
