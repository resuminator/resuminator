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

import { Button, HStack, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Status } from "../../../utils/constants";
import { Method } from "../CreateResumeModal";

interface Props {
  method: Method;
  actionCallback: (method: Method) => Promise<void>;
  onCloseCallback: () => void;
  status?: Status;
}

const CreateResumeFooter: React.FC<Props> = ({
  method,
  onCloseCallback,
  actionCallback,
  status
}) => {
  return (
    <ModalFooter display="flex" justifyContent="flex-end">
      {/* Available when template gallery implemented */}
      {/* <Button
        variant="link"
        rightIcon={<FiExternalLink />}
        _focus={{ outline: "none" }}
        fontWeight="normal"
        size="sm"
      >
        Browse template gallery for more
      </Button> */}
      <HStack>
        <Button
          colorScheme="purple"
          rightIcon={<FiArrowRight />}
          isDisabled={method === null}
          isLoading={status === Status.loading}
          loadingText="Creating new resume"
          onClick={() => actionCallback(method)}
        >
          Get Started
        </Button>
        <Button onClick={onCloseCallback} variant="ghost">
          Cancel
        </Button>
      </HStack>
    </ModalFooter>
  );
};

export default CreateResumeFooter;
