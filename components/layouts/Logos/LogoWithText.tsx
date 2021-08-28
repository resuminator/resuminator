import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hasTagline?: boolean;
  width?: string;
  height?: string;
  variant?: "light" | "dark";
}

const LogoWithText: React.FC<Props & BoxProps> = ({
  hasTagline = false,
  variant,
  width = "160px",
  height = "32px",
  ...props
}) => {
  const taglineColor = useColorModeValue("gray.500", "whiteAlpha.700");
  const colorModeDefaultLogo = useColorModeValue(
    "/logos/text_dark.svg",
    "/logos/text_light.svg"
  );
  const src =
    variant === "light"
      ? "/logos/text_light.svg"
      : variant === "dark"
      ? "/logos/text_dark.svg"
      : colorModeDefaultLogo;

  return (
    <Box display="flex" flexDir="column" w="fit-content" {...props}>
      <Link href="/" scroll={false}>
        <a>
          <Image
            layout="fixed"
            src={src}
            width={width}
            height={height}
            placeholder="blur"
          />
        </a>
      </Link>
      {hasTagline && (
        <Text fontSize="sm" fontWeight="medium" color={taglineColor}>
          Build beautiful single-page resumes within minutes
        </Text>
      )}
    </Box>
  );
};

export default LogoWithText;
