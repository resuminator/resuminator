import { Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import { LongFeatureDetails } from "./features.data";

const FullFeatures = () => {
  return (
    <SectionLayout>
      <HeadingBox
        title="For people who care about their time!"
        subtitle="A tool built for productivity"
        titleProps={{ color: "purple.500" }}
      />
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gridGap="4"
        mb="16"
      >
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
    </SectionLayout>
  );
};

export default FullFeatures;
