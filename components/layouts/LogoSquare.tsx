import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text } from "@chakra-ui/layout";

const LogoSquare: React.FC<BoxProps> = ({...props}) => {
  return (
    <Box
      w="2.5rem"
      h="2.5rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="5px"
      bgColor={useColorModeValue("brand.600", "blue.500")}
      {...props}
    >
      <Text fontSize="xl" fontWeight="semibold" color="white">
        Re
      </Text>
    </Box>
  );
};

export default LogoSquare;
