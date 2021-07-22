import { Avatar, Button, Text, useDisclosure, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
import { useAuth } from "../../Auth/AuthContext";
const PhotoUploadModal = dynamic(() => import("./PhotoUploadModal"));

const ProfilePhoto = () => {
  const auth = useAuth();
  const [avatar, setAvatar] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (auth.user) {
      setAvatar(auth.user.photoURL);
    }
  }, [auth]);

  return (
    <VStack>
      <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
        Profile Picture
      </Text>
      <Avatar size="2xl" src={avatar} />
      <Button
        leftIcon={<FiImage />}
        colorScheme="purple"
        size="sm"
        variant="ghost"
        onClick={onOpen}
        isDisabled={!auth.user}
      >
        Select New
      </Button>
      <PhotoUploadModal
        isOpen={isOpen}
        onClose={onClose}
        auth={auth}
        setAvatarCallback={setAvatar}
      />
    </VStack>
  );
};

export default ProfilePhoto;
