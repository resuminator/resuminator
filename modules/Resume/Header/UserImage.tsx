import { Avatar } from "@chakra-ui/avatar";
import { Center } from "@chakra-ui/layout";
import React from "react";
import useResumeStore from "../../../store/resume.store";
import useContactStore from "../../UserInput/Contact/store";

const UserImageLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const userImage = useContactStore((state) => state.userImage);
  const spacing = useResumeStore((state) => state.spacing);

  return (
    <Center px={spacing * 8} py={spacing * 4}>
      <Avatar size="lg" name={fullName} src={userImage} />
    </Center>
  );
};

export default UserImageLayout;
