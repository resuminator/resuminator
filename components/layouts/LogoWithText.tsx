import { Box, BoxProps, Text } from "@chakra-ui/layout";

interface Props {
  hasTagline?: boolean
}

const LogoWithText: React.FC<Props & BoxProps> = ({ hasTagline = false, ...props }) => {
  return (
    <Box display="flex" flexDir="column" mb="8" {...props}>
      <Text fontSize="2xl" fontWeight="semibold" color="blue.800">
        Resuminator
      </Text>
     {hasTagline && <Text fontSize="sm" color="blue.500">
        Build beautiful single-page resumes within minutes
      </Text>}
    </Box>
  );
};

export default LogoWithText;
