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

import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getCloneResume, getNewResume } from "../../../apis/resume";
import { resumeMetaPlaceholder } from "../../../data/placeholderData";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { Status } from "../../../utils/constants";
import useUserStore from "../../User/store";
import { ResumeMetadata, UserObject } from "../../User/types";
import CreateResumeBody from "./CreateResumeBody";
import CreateResumeFooter from "./CreateResumeFooter";

interface CreateResumeModalProps {
  data: UserObject;
  options: { isOpen: boolean; onClose: () => void };
}

export type Method = "EXISTING" | "SCRATCH" | null;

const CreateResumeModal: React.FC<CreateResumeModalProps> = ({
  data,
  options
}) => {
  const router = useRouter();

  const [method, setMethod] = useState<Method>(null);
  const [status, setStatus] = useState<Status>(Status.idle);
  const { isOpen, onClose } = options;
  const { createToast } = useCustomToast();
  const { setProperty } = useUserStore();
  const token = Cookies.get("token");

  const [selectedResume, setSelectedResume] = useState<ResumeMetadata>(() =>
    data.active.length ? data.active[0] : resumeMetaPlaceholder
  );

  const createResume = async (
    apiCallback: (...params: any) => Promise<any>,
    token = null
  ) => {
    setStatus(Status.loading);
    return await apiCallback(token)
      .then((res) => {
        setStatus(Status.success);
        setProperty("active", res.active);
        createToast(
          "New resume created!",
          "success",
          "You can now start editing your resume"
        );
        router.push(`/create/${res._id}`);
      })
      .catch((err) => {
        setStatus(Status.error);
        //If the resume limit has been hit, return a different toast.
        if (err.response.status === 409) {
          return createToast(
            "Couldn't create new resume",
            "error",
            "You already have the maximum resumes which can be created on this plan."
          );
        }
        return createToast(
          "Couldn't create new resume",
          "error",
          "Some unexpected error occured while creating your resume. Try again, and if this persists, please contact us over email"
        );
      });
  };

  const createNewResume = async (method: Method) => {
    switch (method) {
      case "SCRATCH":
        return await createResume(getNewResume, token).then(() => onClose());
      case "EXISTING":
        return await createResume(
          getCloneResume(selectedResume._id),
          token
        ).then(() => onClose());
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="2xl">
        <ModalCloseButton />
        <ModalHeader>
          <Text>Create new resume</Text>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray", "whiteAlpha")}
            fontWeight="normal"
          >
            Select one to get started
          </Text>
        </ModalHeader>
        <CreateResumeBody
          data={data}
          method={method}
          callback={setMethod}
          selectedHandlers={{
            value: selectedResume,
            setValue: setSelectedResume
          }}
        />
        <CreateResumeFooter
          method={method}
          onCloseCallback={onClose}
          actionCallback={createNewResume}
          status={status}
        />
      </ModalContent>
    </Modal>
  );
};

export default CreateResumeModal;
