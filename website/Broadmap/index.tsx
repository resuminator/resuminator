import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiExternalLink, FiMail } from "react-icons/fi";
import { addSubscriber } from "../../apis/broadmap";
import InputField from "../../components/common/InputField";
import { BROADMAP_HOMEPAGE, BROADMAP_TWITTER } from "../../data/RefLinks";
import { useCustomToast } from "../../hooks/useCustomToast";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { Status } from "../../utils/constants";
import SectionLayout from "../common/SectionLayout";
import RevuePolicy from "./RevuePolicy";

const gradient =
  "linear-gradient(90deg, rgba(0,0,139,1) 0%, rgba(148,0,116,1) 21%, rgba(215,0,92,1) 41%, rgba(251,105,69,1) 61%, rgba(255,179,67,1) 82%, rgba(249,248,113,1) 100%)";

const Broadmap = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail] = useEmailValidation(email);
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.length)
      return createToast(
        "Please enter an email to subscribe",
        "error",
        "This will be your primary email where we will send you the newsletter."
      );

    if (!isValidEmail)
      return createToast(
        "This email seems invalid",
        "error",
        "Please check the email and try again."
      );

    setStatus(Status.loading);
    return await addSubscriber({ email })
      .then(() => {
        setStatus(Status.success);
        createToast(
          "Successully subscribed you to Broadmap",
          "success",
          "Enjoy handpicked resouces every Monday right from your inbox!"
        );
      })
      .catch(() => {
        setStatus(Status.error);
        createToast(
          "Could not subscribe you to Broadmap",
          "warning",
          "This error can mean that either you're already subscribed or you have not confirmed your Broadmap subscription."
        );
      });
  };

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
          <Box
            as="form"
            flexBasis={{ md: "50%", lg: "40%" }}
            alignSelf="center"
          >
            <InputField
              label="Subscribe to Broadmap"
              placeholder="Your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isValid={isValidEmail}
              variant="filled"
              labelProps={{
                color: useColorModeValue("blackAlpha.700", "whiteAlpha.600"),
              }}
            />
            <Button
              type="submit"
              rightIcon={<FiMail />}
              isFullWidth
              colorScheme="pink"
              loadingText="Subscribing"
              isLoading={status === Status.loading}
              onClick={handleSubscribe}
            >
              Sign me up
            </Button>
            <RevuePolicy />
          </Box>
        </Box>
      </Center>
    </SectionLayout>
  );
};

export default Broadmap;
