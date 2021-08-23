import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BROADMAP_HOMEPAGE, BROADMAP_TWITTER } from "../../data/RefLinks";
import { Status } from "../../utils/constants";
import SectionLayout from "../common/SectionLayout";
import SubscribeForm from "./SubscribeForm";
import SubscribeSuccess from "./SubscribeSuccess";

const gradient =
  "linear-gradient(90deg, rgba(0,0,139,1) 0%, rgba(148,0,116,1) 21%, rgba(215,0,92,1) 41%, rgba(251,105,69,1) 61%, rgba(255,179,67,1) 82%, rgba(249,248,113,1) 100%)";

const Broadmap = () => {
  const [status, setStatus] = useState<Status>(Status.idle);

  return (
    <SectionLayout mx={{ xl: "20" }} mb="16">
      <Center p="4" bgGradient={gradient} borderRadius="xl">
        <Box
          bg={useColorModeValue("white", "blackAlpha.600")}
          borderRadius="xl"
          p="8"
          minH="100%"
          minW="100%"
          d={{ md: "flex" }}
          justifyContent="space-between"
        >
          <Box flexBasis={{ md: "50%", lg: "60%" }} pr={{ lg: "16" }}>
            <Heading
              mb="8"
              letterSpacing="tight"
              fontSize={{ base: "4xl", lg: "5xl" }}
            >
              Say hello to <s>roadmaps</s>{" "}
              <Text
                as="a"
                href={BROADMAP_TWITTER}
                target="_blank"
                color={useColorModeValue("pink.400", "pink")}
                _hover={{ textDecoration: "underline" }}
              >
                @broadmaps
              </Text>
            </Heading>
            <Text mb="8" fontSize={{ md: "lg", lg: "xl" }}>
              A broadmap like a <em>&ldquo;playlist&rdquo;</em> of resources
              curated from all over the internet, which we ship as a newsletter
              to your inbox every Monday morning.
            </Text>
            <Button
              as="a"
              href={BROADMAP_HOMEPAGE}
              target="_blank"
              variant="link"
              colorScheme="pink"
              rightIcon={<FiExternalLink />}
              pb="4"
            >
              Read previous Broadmaps
            </Button>
          </Box>
          {status === Status.success ? (
            <SubscribeSuccess />
          ) : (
            <SubscribeForm status={status} setStatus={setStatus} />
          )}
        </Box>
      </Center>
    </SectionLayout>
  );
};

export default Broadmap;
