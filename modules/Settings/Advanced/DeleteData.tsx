import {
  Box,
  Button,
  Divider,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ActionModal from "../../../components/common/ActionModal";
import BoxHeader from "../../../components/common/BoxHeader";
import InputWithLabel from "../../../components/common/InputWithLabel";
import useUserStore from "../../User/store";

const DeleteData = () => {
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
    <GridItem rowSpan={1} colStart={2} colSpan={1} px="4">
      <Box mb="8">
        <BoxHeader
          title="Delete all data"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
          titleProps={{ color: "red" }}
        />
        <Text fontSize="sm" mb="4">
          Proceeding with this options will delete
          <Highlight> all your personal data</Highlight>,{" "}
          <Highlight>resumes</Highlight>, and
          <Highlight> metadata</Highlight>. It will reset your Resuminator
          account including the social profile and any shared resume links will
          be deleted too!
        </Text>
        <Button colorScheme="red" size="sm" mb="4" onClick={onOpen}>
          Delete Account Data
        </Button>
        <Text fontSize="sm" color="red.500" mb="2">
          This action is irreversible. Proceed with caution.
        </Text>
        <Divider />
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
          This action cannot be undone. This will permanently delete all the
          data associated with the account linked to {email} and reset the
          account including all the resume links and your social profile.
        </Text>
        <InputWithLabel
          label={`Please enter your email "${email}" below to confirm this action`}
          value={confirmInput}
          onChange={(e) => setConfirmInput(e.target.value)}
        />
      </ActionModal>
    </GridItem>
  );
};

export default DeleteData;
