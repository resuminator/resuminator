import { Button, ButtonProps } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";

interface TabButtonProps {
  isSelected?: boolean;
  href: string;
}

const TabButton: React.FC<ButtonProps & TabButtonProps> = ({
  children,
  isSelected,
  href,
}) => {
  return (
    <Link href={href}>
      <Box>
        <Button
          fontWeight={isSelected ? "semibold" : "medium"}
          variant="ghost"
          color={isSelected ? "blue.500" : "inherit"}
          width="8rem"
        >
          {children}
        </Button>
      </Box>
    </Link>
  );
};

export default TabButton;
