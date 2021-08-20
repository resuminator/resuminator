import { Button, ButtonProps } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

interface TabButtonProps {
  isSelected?: boolean;
  href: string;
}

const TabButton: React.FC<ButtonProps & TabButtonProps> = ({
  children,
  isSelected,
  href,
  ...rest
}) => {
  const btnColor = useColorModeValue(
    isSelected ? "blue.500" : "inherit",
    isSelected ? "blue.200" : "inherit"
  );
  return (
    <Link href={href}>
      <Button
        fontWeight={isSelected ? "semibold" : "medium"}
        variant="ghost"
        color={btnColor}
        width="8rem"
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};

export default TabButton;
