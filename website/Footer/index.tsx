import { Box, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import Branding from "./Branding";
import Product from "./Product";
import Support from "./Support";

const Footer = () => {
  return (
    <Box
      px={{ base: "1rem", md: "4rem", lg: "7rem" }}
      backgroundColor={useColorModeValue("darkblue", "gray.900")}
    >
      <Stack maxW="6xl" py="10">
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
            lg: "4fr 1fr 1fr",
          }}
          spacing={8}
        >
          <Branding />
          <Product />
          <Support />
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Footer;
