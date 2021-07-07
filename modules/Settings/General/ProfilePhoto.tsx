import {
  Avatar,
  Button,
  GridItem,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiUpload } from "react-icons/fi";
import useUserStore from "../../User/store";

const ProfilePhoto = () => {
  const { avatar } = useUserStore();
  const toast = useToast();

  const uploadPhoto = () => {
    toast({
      title: "Profile Photo Changed",
      duration: 3000,
      status: "success",
      variant: "subtle",
    });
  };

  return (
    <VStack>
      <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
        Profile Picture
      </Text>
      <Avatar size="2xl" src={avatar} />
      <Button
        rightIcon={<FiUpload />}
        colorScheme="purple"
        size="sm"
        variant="ghost"
        onClick={uploadPhoto}
      >
        {avatar.length ? "Upload New" : "Upload"}
      </Button>
    </VStack>
  );
};

export default ProfilePhoto;
