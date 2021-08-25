import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import mp from "../../services/mixpanel";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import { LongFeatureDetails } from "./features.data";
import { FeatureCardProps } from "./types";

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  details,
  external,
}) => {
  const [hovering, setHovering] = useState(false);
  const textColors = useColorModeValue("purple.900", "purple.100");
  const buttonSizes = useBreakpointValue({ base: "sm", md: "md" });

  const trackMetric = () => {
    mp.track("External Link Trigger", { from: title, to: external });
  };

  return (
    <Box
      minWidth="100%"
      minH="16"
      borderRadius="10px"
      shadow="md"
      p="8"
      transition="0.2s all"
      _hover={{
        bg: useColorModeValue("purple.200", "purple.800"),
        color: textColors,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      justifyContent="space-between"
    >
      <Stack spacing={{ base: 4, sm: 6 }} pb={{ base: "4" }}>
        <Icon
          as={icon}
          w={{ base: 6, sm: 8, lg: 10 }}
          h={{ base: 6, sm: 8, lg: 10 }}
        />
        <Heading
          fontWeight="semibold"
          fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          letterSpacing="tigher"
        >
          {title}
        </Heading>
        <Text
          fontWeight="normal"
          fontSize={{ base: "sm", sm: "md", lg: "lg" }}
          letterSpacing={{ md: "tight" }}
          lineHeight="tall"
        >
          {details}
        </Text>
      </Stack>
      {hovering && (
        <Button
          as="a"
          href={external}
          variant="link"
          target="_blank"
          color={textColors}
          rightIcon={<FiExternalLink />}
          size={buttonSizes}
          onClick={trackMetric}
        >
          Learn More
        </Button>
      )}
    </Box>
  );
};

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
      >
        {LongFeatureDetails.map((feat, index) => (
          <FeatureCard key={feat.title + index} {...feat} />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default FullFeatures;
