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

import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import nookies from "nookies";
import React, { Fragment, useEffect, useState } from "react";
import { deleteAccountRequest } from "../../../apis/settings";
import BoxHeader from "../../../components/common/BoxHeader";
import InputWithLabel from "../../../components/common/InputWithLabel";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePatchParams } from "../../../hooks/usePatchParams";
import firebaseSDK from "../../../services/firebase";
import mp from "../../../services/mixpanel";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";
const ActionModal = dynamic(
  () => import("../../../components/common/ActionModal")
);

const DeleteAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [confirmInput, setConfirmInput] = useState("");
  const { token } = usePatchParams();
  const router = useRouter();
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);

  const Highlight: React.FC = ({ children }) => (
    <Text as="span" color="red.500">
      {children}
    </Text>
  );

  useEffect(() => {
    if (auth.user) {
      setEmail(auth.user.email);
    }
  }, [auth.user]);

  const handleLogout = () => {
    firebaseSDK
      .auth()
      .signOut()
      .then(() => nookies.destroy(undefined, "token", { path: "/" }))
      .then(() => router.push("/login"))
      .then(() => {
        mp.track("Log Out", {
          status: "success",
          source: "Account Deleted"
        });
        return createToast("You have been successfully logged out", "success");
      })
      .catch(() => {
        mp.track("Log Out", {
          status: "error",
          source: "Internal"
        });
      });
  };

  const handleAccountDelete = async () => {
    setStatus(Status.loading);
    return await deleteAccountRequest(token)
      .then(() => {
        onClose();
      })
      .then(() => {
        setStatus(Status.success);
        return handleLogout();
      })
      .catch(() => {
        setStatus(Status.error);
        createToast(
          "Some unexpected error occured!",
          "error",
          "Could not delete your account please try again or contact us if the error persists."
        );
      })
      .finally(() => setStatus(Status.idle));
  };

  return (
    <Fragment>
      <Box mb="8">
        <BoxHeader
          title="Delete account"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
          titleProps={{ color: "red" }}
        />
        <Text fontSize="sm" mb="4">
          Proceeding with this options will delete your Resuminator account
          linked to <strong>{email} </strong>
          along with
          <Highlight> all your personal data</Highlight>,{" "}
          <Highlight>resumes</Highlight>,{" "}
          <Highlight>shared resume links</Highlight>, and
          <Highlight> metadata</Highlight>. This action is irreversible. Proceed
          with caution.
        </Text>
        <Button colorScheme="red" size="sm" mb="4" onClick={onOpen}>
          Delete My Account
        </Button>
      </Box>
      <ActionModal
        title="Are you absolutely sure?"
        buttonText="Confirm Delete"
        isOpen={isOpen}
        onClick={() => {
          handleAccountDelete();
        }}
        onClose={onClose}
        actionButtonProps={{
          isDisabled: confirmInput !== email,
          isLoading: status === Status.loading,
          loadingText: "Deleting Account"
        }}
      >
        <Text fontWeight="medium" color="red.500" mb="2">
          Read the text below with caution!
        </Text>
        <Text fontSize="sm" mb="4">
          This action cannot be undone. This will PERMANENTLY delete your
          account linked to {email} including all data and shareable resume
          links associated with this account.
        </Text>
        <InputWithLabel
          label={`Please enter your email "${email}" below to confirm this action`}
          value={confirmInput}
          onChange={(e) => setConfirmInput(e.target.value)}
        />
      </ActionModal>
    </Fragment>
  );
};

export default DeleteAccount;
