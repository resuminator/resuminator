import { Avatar } from "@chakra-ui/avatar";
import React from "react";
import useContactStore from "../../UserInput/Contact/store";

const UserImageLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const userImage = useContactStore((state) => state.userImage);
  return <Avatar size="md" name={fullName} src={userImage} />;
};

export default UserImageLayout;
