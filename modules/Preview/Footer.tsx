import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FooterLinks } from "../../data/PreviewFooterLinks";

interface Props {}

const PreviewFooter = (props: Props) => {
  const fontColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      w="100%"
    >
      <HStack fontSize={"sm"} color={fontColor} justify="center" spacing={"4"}>
        {FooterLinks.map((link) => (
          <Link href={link.link} key={link.id}>
            <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
              {link.title}
            </Text>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default PreviewFooter;
