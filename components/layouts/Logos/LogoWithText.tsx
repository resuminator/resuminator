import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text, TextProps } from "@chakra-ui/layout";

interface Props {
  hasTagline?: boolean;
  LogoProps?: TextProps;
}

const LogoWithText: React.FC<Props & BoxProps> = ({
  hasTagline = false,
  LogoProps,
  ...props
}) => {
  return (
    <Box display="flex" flexDir="column" mb="8" {...props}>
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        color={useColorModeValue("brand.600", "brand.400")}
        {...LogoProps}
      >
        Resuminator
      </Text>
      {hasTagline && (
        <Text fontSize="sm" color="InactiveCaptionText">
          Build beautiful single-page resumes within minutes
        </Text>
      )}
    </Box>
  );
};

export default LogoWithText;
