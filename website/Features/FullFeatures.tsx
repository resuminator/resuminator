import { Box, Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { LongFeatureDetails } from "./features.data";

const FullFeatures = () => {
  return (
    <Box px="8" py="16">
      <Box>
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing={-2}
          mb="2"
          lineHeight="short"
          color="purple.500"
        >
          For people who care about their time!
        </Text>
        <Text fontWeight="medium" fontSize="2xl" letterSpacing="tight">
          A tool built for productivity
        </Text>
      </Box>
      <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        {LongFeatureDetails.map((feat, index) => (
          <Stack
            key={feat.title + index}
            minWidth="100%"
            minH="16"
            borderRadius="10px"
            shadow="md"
            p="8"
          >
            <Icon as={feat.icon} w={6} h={6} />
            <Heading fontWeight="semibold" fontSize="lg" letterSpacing="tigher">
              {feat.title}
            </Heading>
            <Text fontWeight="normal" fontSize="sm">
              {feat.details}
            </Text>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
};

export default FullFeatures;
