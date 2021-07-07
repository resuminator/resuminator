import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import React from "react";

const UserAvatar: React.FC<AvatarProps> = ({ ...props }) => {
  return (
    <Avatar
      cursor="pointer"
      size="md"
      {...props}
    />
  );
};

export default UserAvatar;
