import {
    Box,
    HStack,
    IconButton,
    Input,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { FiSend } from "react-icons/fi";
import { ProductLinks, SupportLinks } from "../../data/FooterLinks";
import SocialLinks from "../../data/SocialLinks";
import LinkText from "../common/LinkText";
import TextLink from "../common/TextLink";
import Copyright from "../layouts/Footer/Copyright";
import SocialButtons from "../layouts/Footer/SocialButtons";
import { LogoWithText } from "../layouts/Logos";

const ListHeader: React.FC = ({ children }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={1} color="blue.100">
      {children}
    </Text>
  );
};

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
          <Stack spacing="4" alignItems="flex-start">
            <LogoWithText
              mb="0"
              LogoProps={{ fontSize: "xl", color: "blue.50" }}
            />
            <Copyright />
            <SocialButtons data={SocialLinks} />
          </Stack>
          <Stack>
            <ListHeader>Product</ListHeader>
            {ProductLinks.map((item) => (
              <LinkText
                key={item.text}
                href={item.link}
                color="blue.100"
                fontSize="sm"
              >
                {item.text}
              </LinkText>
            ))}
          </Stack>
          <Stack>
            <ListHeader>Support</ListHeader>
            {SupportLinks.map((item) => (
              <TextLink
                key={item.text}
                text={item.text}
                link={item.link}
                color="blue.100"
                fontSize="sm"
              />
            ))}
          </Stack>
          <Stack
            align="flex-start"
            gridColumnStart={{ base: "1", lg: "4" }}
            gridColumnEnd={{ base: "1", md: "3", lg: "5" }}
          >
            <ListHeader>Subscribe to Broadmap</ListHeader>
            <Text fontSize="sm" color="blue.100" mb="2">
              A broadmap is a collection of handpicked resources sent as a
              newsletter every Monday.{" "}
              <LinkText href="#" color="blue.400">
                Know More
              </LinkText>
            </Text>
            <HStack>
              <Input
                placeholder={"Your email address"}
                color="whiteAlpha.900"
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Subscribe"
                icon={<FiSend />}
              />
            </HStack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Footer;
