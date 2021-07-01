import { Button, ButtonProps } from "@chakra-ui/button";
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
  return (
    <Link href={href}>
      <Button
        fontWeight={isSelected ? "semibold" : "medium"}
        variant="ghost"
        color={isSelected ? "blue.500" : "inherit"}
        width="8rem"
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};

export default TabButton;
