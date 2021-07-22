import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useCustomToast } from "../../../hooks/useCustomToast";
import firebaseSDK from "../../../services/firebase";
import { Status } from "../../../utils/constants";

const MAX_FILE_SIZE = 524288; //512KB

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  auth: { user: firebase.default.User };
  setAvatarCallback: (url: string) => void;
}

const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  auth,
  setAvatarCallback,
}) => {
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [progress, setProgress] = useState<number>(0);
  const [image, setImage] = useState<{ file: File; url: string }>({
    file: null,
    url: "",
  });

  const handleModalClose = () => {
    setImage({ ...image, file: null });
    onClose();
  };

  /**
   * Handles the image upload to browser and checks for limits
   */
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //File is selected from the system.
    const file = e.target.files[0];

    if (file) {
      //If file is successfully loaded but exceeds limit.
      if (file.size > MAX_FILE_SIZE) {
        //First set image as null, to prevent uploading the previous image (if any)
        setImage({ ...image, file: null });

        //Return a warning with message
        return createToast(
          "File too large",
          "warning",
          "Maximum file size allowed is 512KB"
        );
      }

      //If everything is file then set the image as file selected
      setImage({ ...image, file });
    } else {
      //Else if anything fails, reset the image file to null
      setImage({ ...image, file: null });
    }
  };

  /**
   * Handles the upload of image to Firebase Storage with Authentication
   * @param file File selected from the system.
   */
  const uploadToFirebase = async (file: File) => {
    //Start by setting the progress to 0, to reset any older state.
    setProgress(0);

    //If file is present and also the user is authenticated
    if (file && auth) {
      //Create a reference to root of the storage bucket.
      const storageRef = firebaseSDK.storage().ref();
      const uid = auth.user.uid || "";

      //Set File name to "profile" always.
      const fileName = `profile`;

      //Create an upload task and save the image to {uid}/profile
      //Only Auth user can write, any user can read.
      const uploadTask = storageRef
        .child(uid + "/" + fileName)
        .put(image.file, { contentType: file.type });

      //Handle the upload task.
      uploadTask.on(
        "state_change",
        (snapshot) => {
          //The snapshot here would upadte automatically on "state_change" of upload task.
          setStatus(Status.loading);
          setProgress(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        (err) => {
          createToast("Error", "error", err.message);
        },
        () => {
          //On Complete callback
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setStatus(Status.success);
            //The getDownloadURL function returns the URL which is set to image url.
            setImage({ file: null, url });

            //The callback below changes the image of the user for instant feedback.
            setAvatarCallback(url);

            //Finally set the url of the uploaded image as the photoUrl of auth user.
            auth.user.updateProfile({ photoURL: url }).then(() => {
              return createToast("Image Uploaded Successfully", "success");
            });

            onClose();
          });
        }
      );
    } else {
      createToast("Please select image first", "warning");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent minW="lg">
        <ModalCloseButton />
        <ModalHeader>
          <Text>Upload New Photo</Text>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray", "whiteAlpha")}
            fontWeight="normal"
          >
            Choose a file to upload
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray", "whiteAlpha.600")}
          >
            Supported Format: PNG/JPEG. Max file size = 512KB
          </Text>
          <Input
            type="file"
            accept="image/x-png, image/jpeg"
            onChange={handleImageChange}
            pt="1"
            variant="filled"
            my="4"
          />
          <Progress
            value={progress}
            size="sm"
            display={status === Status.loading ? "block" : "none"}
          />
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button
              rightIcon={<FiUpload />}
              colorScheme="purple"
              size="sm"
              variant="solid"
              onClick={() => uploadToFirebase(image.file)}
              isLoading={status === Status.loading}
              loadingText="Uploading"
              isDisabled={!image.file}
            >
              Upload
            </Button>
            <Button
              colorScheme="gray"
              size="sm"
              variant="ghost"
              onClick={handleModalClose}
              isDisabled={status === Status.loading}
            >
              Cancel
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhotoUploadModal;
