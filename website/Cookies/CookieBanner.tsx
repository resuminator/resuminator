import {
  Box,
  Button,
  HStack,
  Icon,
  Slide,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { FaCookieBite } from "react-icons/fa";
import LinkText from "../../components/common/LinkText";

const CookieBanner = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const handleAccept = () => {
    Cookies.set("user-accepted-cookies", "true", { path: "/" });
    onClose();
  };

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }} unmountOnExit>
      <Box
        p={{ base: "1rem", xl: "1rem 10rem" }}
        bg={useColorModeValue("purple.100", "purple.900")}
      >
        <HStack pb={{ base: "4", md: "0" }}>
          <Icon
            as={FaCookieBite}
            color={useColorModeValue("gray.800", "whiteAlpha.800")}
            fontSize={{ base: "xl", md: "2xl" }}
            mx={{ md: "4" }}
          />
          <Text
            fontSize={{ base: "xs", sm: "sm", lg: "sm" }}
            color={useColorModeValue("purple.900", "purple.50")}
          >
            Resuminator by default uses cookies to enhance your user experience
            and measure usage and performance. To learn more about cookies and
            how your data is saved, read our{" "}
            <LinkText
              color="inherit"
              textDecoration="underline"
              href="/cookie-policy"
            >
              cookie
            </LinkText>{" "}
            and{" "}
            <LinkText
              color="inherit"
              textDecoration="underline"
              href="/privacy-policy"
            >
              privacy
            </LinkText>{" "}
            policy.
          </Text>
          <Stack display={{ base: "none", md: "flex" }}>
            <Button size="sm" colorScheme="purple" onClick={handleAccept}>
              Accept All
            </Button>
            <Button size="sm" variant="ghost">
              Manage
            </Button>
          </Stack>
        </HStack>
        <Stack
          isInline
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
        >
          <Button size="sm" colorScheme="purple" onClick={handleAccept}>
            Accept All
          </Button>
          <Button size="sm" variant="ghost">
            Manage
          </Button>
        </Stack>
      </Box>
    </Slide>
  );
};

export default CookieBanner;
