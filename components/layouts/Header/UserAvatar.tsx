import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import React from "react";

const UserAvatar: React.FC<AvatarProps> = ({ ...props }) => {
  return (
    <Avatar
      borderWidth="2px"
      borderColor={useColorModeValue("gray.100", "whiteAlpha.100")}
      transition="all 0.2s"
      _hover={{ borderColor: "blue.500" }}
      size="md"
      {...props}
    />
  );
};

export default UserAvatar;
