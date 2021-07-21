import { Avatar, Button, Input, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useCustomToast } from "../../../hooks/useCustomToast";
import firebaseSDK from "../../../services/firebase";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";

const ProfilePhoto = () => {
  const auth = useAuth();
  const [avatar, setAvatar] = useState("");
  const fileInputRef = useRef(null);
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [image, setImage] = useState<{ file: File; url: string }>({
    file: null,
    url: "",
  });

  useEffect(() => {
    if (auth.user) {
      setAvatar(auth.user.photoURL);
    }
  }, [auth]);

  /* 
  1. Initialize Firebase Storage ✅
  2. Upload Image to Firebase from user ✅
  3. Get temporary link for firebase stored image ✅
  */

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (file) {
      setImage({ ...image, file });
    } else {
      setImage({ ...image, file: null });
    }
  };

  const uploadToFirebase = async (file: File) => {
    if (file && auth) {
      const storageRef = firebaseSDK.storage().ref();
      const uid = auth.user.uid || "";
      const fileName = `profile`;

      const uploadTask = storageRef
        .child(uid + "/" + fileName)
        .put(image.file, { contentType: file.type });
      uploadTask.on(
        "state_change",
        (snapshot) => {
          setStatus(Status.loading);
          // createToast("Image Upload Started", "info");
        },
        (err) => {
          createToast("Error", "error", err.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setStatus(Status.success);
            setImage({ file: null, url });
            auth.user.updateProfile({ photoURL: url }).then(() => {
              return createToast("Image Uploaded Successfully", "success");
            });
          });
        }
      );
    } else {
      createToast("Please select image first", "warning");
    }
  };

  return (
    <VStack>
      <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
        Profile Picture
      </Text>
      <Avatar size="2xl" src={avatar} />
      <Input
        type="file"
        accept="image/x-png, image/jpeg"
        ref={fileInputRef}
        onChange={handleImageChange}
        pt="1"
        variant="filled"
      />
      <Button
        rightIcon={<FiUpload />}
        colorScheme="purple"
        size="sm"
        variant="ghost"
        onClick={() => uploadToFirebase(image.file)}
        loadingText="Uploading"
        isDisabled={!image.file}
        isLoading={status === Status.loading}
      >
        Upload
      </Button>
    </VStack>
  );
};

export default ProfilePhoto;
