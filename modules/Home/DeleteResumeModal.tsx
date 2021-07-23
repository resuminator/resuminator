import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import deleteResume from "../../apis/deleteResume";
import ActionModal from "../../components/common/ActionModal";
import { Status } from "../../utils/constants";
import { ResumeMetadata } from "../User/types";
import Cookies from "js-cookie";
import useUserStore from "../User/store";
import { useCustomToast } from "../../hooks/useCustomToast";

interface Props {
  resumeObject: ResumeMetadata;
}

const DeleteResumeModal: React.FC<Props> = ({ resumeObject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState<Status>(Status.idle);
  const { setProperty } = useUserStore();
  const { createToast } = useCustomToast();
  const token = Cookies.get("token");

  const handleDeleteResume = async () => {
    setStatus(Status.loading);
    return await deleteResume(token, resumeObject._id)
      .then((res) => {
        setStatus(Status.success);
        setProperty("active", res.active);
        return createToast("Resume deleted successfully", "success");
      })
      .catch((err) => {
        setStatus(Status.error);
        return createToast("Could not delete resume", "error");
      });
  };

  return (
    <>
      <Button colorScheme="red" variant="ghost" size="sm" onClick={onOpen}>
        Delete
      </Button>
      <ActionModal
        title="Confirm Resume Delete"
        buttonText="Delete"
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleDeleteResume}
        actionButtonProps={{
          isLoading: status === Status.loading,
          loadingText: "Deleting",
        }}
      >
        Are you sure you want to delete this{" "}
        <strong>{resumeObject.profileName}</strong> resume? This action is
        irreversible.
      </ActionModal>
    </>
  );
};

export default DeleteResumeModal;
