import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text, TextProps } from "@chakra-ui/layout";
import Link from "next/link";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/react";

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
  const colorModeDefaultLogo = useColorModeValue(
    "/logos/text_dark.png",
    "/logos/text_light.png"
  );
  const src =
    variant === "light"
      ? "/logos/text_light.png"
      : variant === "dark"
      ? "/logos/text_dark.png"
      : colorModeDefaultLogo;

  return (
    <Box display="flex" flexDir="column" {...props}>
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
        <Text fontSize="sm" color="InactiveCaptionText">
          Build beautiful single-page resumes within minutes
        </Text>
      )}
    </Box>
  );
};

export default LogoWithText;
