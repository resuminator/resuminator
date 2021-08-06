import { Button, useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { deleteResume } from "../../apis/resume";
import ActionModal from "../../components/common/ActionModal";
import { useCustomToast } from "../../hooks/useCustomToast";
import { Status } from "../../utils/constants";
import useUserStore from "../User/store";
import { ResumeMetadata } from "../User/types";

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
