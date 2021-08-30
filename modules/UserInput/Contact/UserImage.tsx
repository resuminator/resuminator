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

import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import patchContact from "../../../apis/patchContact";
import Section from "../../../components/layouts/Section";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePatchParams } from "../../../hooks/usePatchParams";
import firebaseSDK from "../../../services/firebase";
import mp from "../../../services/mixpanel";
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
  const setProperty = useContactStore((state) => state.setProperty);
  const setUserImage = (value: string) => setProperty("userImage", value);
  const { resumeId, setSaveStatus, setLastSavedAt, token } = usePatchParams();

  const saveToDb = async (url: string) => {
    const key = "userImage";

    setSaveStatus(Status.loading);
    return await patchContact(key)(token, resumeId, { [key]: url })
      .then(() => {
        setLastSavedAt(new Date());
        mp.track("Photo Uploaded", {
          target: `resume-${resumeId}`,
          status: "success",
        });
        createToast("Image uploaded successfully", "success");
        return setSaveStatus(Status.success);
      })
      .catch(() => {
        mp.track("Photo Uploaded", {
          target: `resume-${resumeId}`,
          status: "error",
          source: "Internal",
        });
        setSaveStatus(Status.error);
      });
  };

  const clearImage = async () => {
    setStatus(Status.loading);
    const storageRef = firebaseSDK.storage().ref();

    //Delete from Firebase Storage
    return await storageRef
      .child(auth.user.uid)
      .child(resumeId)
      .delete()
      .then(() => saveToDb(""))
      .then(() => {
        mp.track("Photo Delete", {
          target: `resume-${resumeId}`,
          status: "success",
        });
        setUserImage("");
        setStatus(Status.success);
        return createToast("Photo Removed", "success");
      })
      .catch(() => {
        setStatus(Status.error);
        mp.track("Photo Delete", {
          target: `resume-${resumeId}`,
          status: "error",
          source: "Firebase",
        });
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
