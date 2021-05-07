import Icon, { IconProps } from "@chakra-ui/icon";
import { Box, BoxProps, Text } from "@chakra-ui/layout";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

export interface AuthProviderProps {
  client: "Google" | "GitHub" | "Twitter" | "Email";
}

const AuthProviderCard: React.FC<AuthProviderProps & BoxProps> = ({
  client,
  ...rest
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="solid"
      borderWidth="1px"
      borderRadius="10px"
      p="2"
      m="2"
      color={getColor(client)}
      transition="color 0.15s ease, background-color 0.15s ease"
      _hover={{ bg: getColor(client), color: "white" }}
      cursor="pointer"
      {...rest}
    >
      <ClientIcon client={client} m="2" />
      <Text fontSize="sm" fontWeight="medium">
        Continue with {client}
      </Text>
    </Box>
  );
};

const ClientIcon: React.FC<AuthProviderProps & IconProps> = ({
  client,
  ...rest
}) => {
  switch (client) {
    case "Google":
      return <Icon as={AiOutlineGoogle} {...rest} />;
    case "Twitter":
      return <Icon as={AiOutlineTwitter} {...rest} />;
    case "GitHub":
      return <Icon as={AiOutlineGithub} {...rest} />;
    case "Email":
      return <Icon as={AiOutlineMail} {...rest} />;
  }
};

const getColor = (client) => {
  switch (client) {
    case "Google":
      return "blue.500";
    case "Twitter":
      return "cyan.500";
    case "GitHub":
      return "black";
    case "Email":
      return "gray.800";
  }
};

export default AuthProviderCard;
