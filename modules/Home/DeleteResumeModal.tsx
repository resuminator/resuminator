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

import { Button, useDisclosure } from "@chakra-ui/react";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { deleteResume } from "../../apis/resume";
import { useCustomToast } from "../../hooks/useCustomToast";
import { Status } from "../../utils/constants";
import useUserStore from "../User/store";
import { ResumeMetadata } from "../User/types";
const ActionModal = dynamic(
  () => import("../../components/common/ActionModal")
);

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
          loadingText: "Deleting"
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
