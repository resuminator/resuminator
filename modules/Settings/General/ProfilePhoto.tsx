import {
  Avatar,
  Button,
  Input,
  Text,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { useCustomToast } from "../../../hooks/useCustomToast";
import firebaseSDK from "../../../services/firebase";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";
import useUserStore from "../../User/store";

const ProfilePhoto = () => {
  const { avatar } = useUserStore();
  const fileInputRef = useRef(null);
  const auth = useAuth();
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [image, setImage] = useState({ file: null, url: "" });

  useEffect(() => console.log(auth.user), [auth]);

  /*TODO: 
  1. Initialize Firebase Storage ✅
  2. Upload Image to Firebase from user
  3. Get temporary link for firebase stored image
  4. Crop Image using TPL (Third Party Library)
  5. Upload Final Image
  6. Profit
  */

  const getExtension = (filename: string) =>
    filename.substr(filename.lastIndexOf(".") + 1);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onload = async () => {
        if (reader.readyState === 2) {
          setImage({ ...image, file });
          console.log(file);
          await uploadToFirebase(file);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage({ ...image, file: null });
    }
  };

  const uploadToFirebase = async (file: File) => {
    if (file && auth) {
      const uid = auth.user.uid || "";
      const fileName = `profile.${getExtension(file.name)}`;
      const imageRef = firebaseSDK.storage().ref(uid).child(fileName);

      const uploadTask = imageRef.put(image.file, { contentType: file.type });
      uploadTask.on(
        "state_change",
        (snapshot) => {
          console.log(snapshot);
          createToast("Image Upload Started", "info");
        },
        (err) => {
          createToast("Error", "error", err.message);
        },
        () => {
          firebaseSDK
            .storage()
            .ref(`${uid}`)
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              setImage({ ...image, url });
              createToast("Image Uploaded Successfully", "success");
            });
        }
      );
    } else {
      createToast("Please select image first", "warning");
    }
  };

  const triggerFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <VStack>
      <Text fontSize="sm" fontWeight="semibold" colorScheme="gray" mb="2">
        Profile Picture
      </Text>
      <Avatar size="2xl" src={avatar} />
      <VisuallyHidden>
        <Input
          type="file"
          accept="image/x-png, image/jpeg"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </VisuallyHidden>
      <Button
        rightIcon={<FiUpload />}
        colorScheme="purple"
        size="sm"
        variant="ghost"
        onClick={triggerFileDialog}
        isLoading={status === Status.loading}
      >
        {avatar.length ? "Upload New" : "Upload"}
      </Button>
    </VStack>
  );
};

export default ProfilePhoto;
