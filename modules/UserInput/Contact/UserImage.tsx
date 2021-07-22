import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import Section from "../../../components/layouts/Section";
import { useCustomToast } from "../../../hooks/useCustomToast";
import firebaseSDK from "../../../services/firebase";
import useResumeStore from "../../../store/resume.store";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";
import useContactStore from "./store";
const PhotoUploadModal = dynamic(() => import("../../Shared/PhotoUploadModal"));

const UserImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);
  const userImage = useContactStore((state) => state.userImage);
  const setUserImage = useContactStore((state) => state.setUserImage);
  const resumeId = useResumeStore((state) => state._id);

  const saveToDb = (url: string) => {
    //Make a POST request to Server
    return createToast("Photo Uploaded Successfully", "success");
  };

  const clearImage = async () => {
    setStatus(Status.loading);
    const storageRef = firebaseSDK.storage().ref();

    //Delete from Firebase Storage
    return await storageRef
      .child(auth.user.uid)
      .child(resumeId)
      .delete()
      .then(() => {
        setUserImage("");
        setStatus(Status.success);
        return createToast("Photo Removed", "success");
      })
      .catch(() => {
        setStatus(Status.error);
        return createToast(
          "Couldn't remove image",
          "error",
          "This could be either because the image has already been deleted, or due to some internal issue."
        );
      });
  };

  return (
    <Section
      header={{
        title: "Resume Photo",
        subtitle: "Click on the button below to upload your photo",
        mb: "2",
      }}
    >
      <ButtonGroup my="4">
        <Button
          leftIcon={<FiUpload />}
          colorScheme="blue"
          size="sm"
          variant="solid"
          onClick={onOpen}
          isDisabled={status === Status.loading}
        >
          {userImage.length ? "Select New" : "Upload"}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={clearImage}
          isLoading={status === Status.loading}
          loadingText="Removing Image"
          isDisabled={!userImage}
        >
          Remove Image
        </Button>
      </ButtonGroup>
      <PhotoUploadModal
        isOpen={isOpen}
        onClose={onClose}
        auth={auth}
        setAvatarCallback={setUserImage}
        dbCallback={saveToDb}
        fileName={resumeId}
      />
    </Section>
  );
};

export default UserImage;
