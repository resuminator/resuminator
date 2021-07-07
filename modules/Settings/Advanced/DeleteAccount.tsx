import {
  Box,
  Button,
  Divider,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useState } from "react";
import ActionModal from "../../../components/common/ActionModal";
import BoxHeader from "../../../components/common/BoxHeader";
import InputWithLabel from "../../../components/common/InputWithLabel";
import useUserStore from "../../User/store";

const DeleteAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { email } = useUserStore();
  const [confirmInput, setConfirmInput] = useState("");
  const Highlight: React.FC = ({ children }) => (
    <Text as="span" color="red.500">
      {children}
    </Text>
  );

  const handleAccountDelete = () => {
    console.log("Request Sent");
    onClose();
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
        actionButtonProps={{ isDisabled: confirmInput !== email }}
      >
        <Text fontWeight="medium" color="red.500" mb="2">
          Read the text below with caution!
        </Text>
        <Text fontSize="sm" mb="4">
          This action cannot be undone. This will PERMANENTLY delete your
          account linked to {email} including all data and sharable resume links
          associated with this account.
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
