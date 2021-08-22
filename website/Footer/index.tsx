import { Box, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import Branding from "./Branding";
import Newsletter from "./Newsletter";
import Product from "./Product";

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
            lg: "2fr 1fr 1fr 2fr",
          }}
          spacing={8}
        >
          <Branding />
          <Product />
          <Newsletter />
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Footer;
