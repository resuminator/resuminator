import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import getNewResume from "../../../apis/getNewResume";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { Status } from "../../../utils/constants";
import useUserStore from "../../User/store";
import { UserObject } from "../../User/types";
import CreateResumeBody from "./CreateResumeBody";
import CreateResumeFooter from "./CreateResumeFooter";

interface CreateResumeModalProps {
  data: UserObject;
  options: { isOpen: boolean; onClose: () => void };
}

export type Method = "EXISTING" | "SCRATCH" | null;

const CreateResumeModal: React.FC<CreateResumeModalProps> = ({
  data,
  options,
}) => {
  const [method, setMethod] = useState<Method>(null);
  const [status, setStatus] = useState<Status>(Status.idle);
  const { isOpen, onClose } = options;
  const { createToast } = useCustomToast();
  const { setProperty } = useUserStore();
  const token = Cookies.get("token");

  const createFromScratch = async (token: string) => {
    setStatus(Status.loading);
    return await getNewResume(token)
      .then((res) => {
        setStatus(Status.success);
        setProperty("active", res.active);
        createToast(
          "New resume created!",
          "success",
          "Click on the resume card to start editing"
        );
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
    console.log(method);
    switch (method) {
      case "SCRATCH":
        return await createFromScratch(token).then(() => onClose());
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
        <CreateResumeBody data={data} method={method} callback={setMethod} />
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
