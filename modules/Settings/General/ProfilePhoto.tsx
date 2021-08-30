/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Avatar, Button, Text, useDisclosure, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useCustomToast } from "../../../hooks/useCustomToast";
import mp from "../../../services/mixpanel";
import { useAuth } from "../../Auth/AuthContext";
const PhotoUploadModal = dynamic(() => import("../../Shared/PhotoUploadModal"));

const ProfilePhoto = () => {
  const auth = useAuth();
  const [avatar, setAvatar] = useState("");
  const { createToast } = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (auth.user) {
      setAvatar(auth.user.photoURL || "");
    }
  }, [auth]);

  const setUserPhotoUrl = (url: string) => {
    auth.user
      .updateProfile({ photoURL: url })
      .then(() => {
        mp.track("Photo Uploaded", {
          target: "user profile",
          status: "success",
        });
        return createToast("Image Uploaded Successfully", "success");
      })
      .catch(() => {
        mp.track("Photo Uploaded", {
          target: "user profile",
          status: "error",
          source: "Firebase",
        });
      });
  };

  return (
    <VStack>
      <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
        Profile Picture
      </Text>
      <Avatar size="2xl" src={avatar} />
      <Button
        leftIcon={<FiUpload />}
        colorScheme="purple"
        size="sm"
        variant="ghost"
        onClick={onOpen}
        isDisabled={!auth.user}
      >
        {avatar.length ? "Upload New" : "Upload"}
      </Button>
      <PhotoUploadModal
        isOpen={isOpen}
        onClose={onClose}
        auth={auth}
        setAvatarCallback={setAvatar}
        dbCallback={setUserPhotoUrl}
        fileName="profile"
      />
    </VStack>
  );
};

export default ProfilePhoto;
