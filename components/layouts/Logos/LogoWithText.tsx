import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text, TextProps } from "@chakra-ui/layout";
import Link from "next/link";
import Image from "next/image";

interface Props {
  hasTagline?: boolean;
  variant?: "light" | "dark";
}

const LogoWithText: React.FC<Props & BoxProps> = ({
  hasTagline = false,
  fontSize = "2xl",
  variant,
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
    <Box display="flex" flexDir="column" mb="8" {...props}>
      <Link href="/">
        <a>
          <Image
            layout="fixed"
            src={src}
            width="160px"
            height="32px"
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
