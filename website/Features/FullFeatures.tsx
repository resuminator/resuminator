import { Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import { LongFeatureDetails } from "./features.data";

const FullFeatures = () => {
  return (
    <SectionLayout aria-label="Full-Features">
      <HeadingBox
        title="For people who care about their time!"
        subtitle="A tool built for productivity"
        titleProps={{ color: "purple.500" }}
      />
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gridGap="4"
        mb="16"
        mx={{ xl: "20" }}
      >
        {LongFeatureDetails.map((feat, index) => (
          <Stack
            key={feat.title + index}
            minWidth="100%"
            minH="16"
            borderRadius="10px"
            shadow="md"
            p="8"
            spacing={{ base: 4, sm: 6 }}
          >
            <Icon
              as={feat.icon}
              w={{ base: 6, sm: 8, lg: 10 }}
              h={{ base: 6, sm: 8, lg: 10 }}
            />
            <Heading
              fontWeight="semibold"
              fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
              letterSpacing="tigher"
            >
              {feat.title}
            </Heading>
            <Text
              fontWeight="normal"
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              letterSpacing={{ md: "tight" }}
            >
              {feat.details}
            </Text>
          </Stack>
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default FullFeatures;
