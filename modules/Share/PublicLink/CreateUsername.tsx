/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { Status } from "../../../utils/constants";
import CohortBadge from "../../Cohort/CohortBadge";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreateUsername: React.FC<Props> = ({ open, onClose }) => {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [status, setStatus] = useState<Status>(Status.idle);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername({ value, error: "" });
  };

  const validateUsername = (): boolean => {
    // Should be present
    if (!username.value) {
      setUsername({ ...username, error: "Username is required" });
      return false;
    }

    // Should be less than 15 characters
    if (username.value.length > 15) {
      setUsername({
        ...username,
        error: "Username should be less than 15 characters"
      });
      return false;
    }

    // Should be alphanumeric and only contain underscores
    const regex = /^[a-zA-Z0-9_]*$/;
    if (!regex.test(username.value)) {
      setUsername({
        ...username,
        error: "Username should be alphanumeric and only contain underscores"
      });
      return false;
    }

    // Else valid
    setUsername({ ...username, error: "" });
    return true;
  };

  const confirmUsername = () => {
    const isUsernameValid = validateUsername();
    if (!isUsernameValid) {
      return;
    }

    setStatus(Status.loading);
    // TODO: Perform profanity check
    const isUsernameProfane = true;
    if (isUsernameProfane) {
      setUsername({
        ...username,
        error: "Username goes against safe-usage guidelines"
      });
      setStatus(Status.error);
      return;
    }

    // TODO: Check if username is available
    const isUsernameAvailable = true;
    if (!isUsernameAvailable) {
      setUsername({ ...username, error: "Username is not available" });
      setStatus(Status.error);
      return;
    }

    setStatus(Status.success);
    // TODO: Create username using api
    onClose();
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW={"2xl"}>
        <ModalBody p="0">
          <HStack align={"start"}>
            <Box p="8">
              <VStack spacing={"2"} align="start" mb="4">
                <HStack>
                  <Heading size={"md"} letterSpacing={"tight"}>
                    Create your username
                  </Heading>
                  <CohortBadge />
                </HStack>
              </VStack>
              <VStack mt="8">
                <Text fontSize={"sm"} color={"gray.700"} lineHeight="1.5rem">
                  Before creating a link you need to choose a unique username
                  which will be used to create a link to your resume.
                </Text>
              </VStack>
              <VStack my="4" align={"start"}>
                <InputGroup>
                  <Input
                    placeholder="Enter username"
                    value={username.value}
                    onChange={handleInputChange}
                    isInvalid={Boolean(username.error)}
                    focusBorderColor="purple.500"
                    errorBorderColor="yellow.500"
                    isRequired
                  />

                  {username.error && (
                    <InputRightElement>
                      <Icon as={FiAlertTriangle} color="yellow.500" />
                    </InputRightElement>
                  )}
                </InputGroup>
                {username.error && (
                  <Text color="yellow.800" fontSize={"xs"}>
                    {username.error}
                  </Text>
                )}
              </VStack>
              <Button
                isFullWidth
                size={"sm"}
                colorScheme="purple"
                onClick={confirmUsername}
                isLoading={status === Status.loading}
                loadingText="Creating username"
              >
                Confirm username
              </Button>
              <Text
                fontSize={"xs"}
                color={"gray.500"}
                lineHeight="1.25rem"
                mt="2"
                w={"100%"}
              >
                You can change your username anytime from account settings.
              </Text>
            </Box>
            <Image
              src="/identity.png"
              width={"300px"}
              borderRadius="0 8px 8px 0"
            />
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateUsername;
