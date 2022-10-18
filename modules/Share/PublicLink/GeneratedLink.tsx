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
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { FiClipboard } from "react-icons/fi";

interface Props {
  resumeUrl: string;
}

const GeneratedLink: React.FC<Props> = ({ resumeUrl }) => {
  return (
    <InputGroup alignItems={"center"}>
      <Input
        variant={"outline"}
        size="sm"
        readOnly
        value={resumeUrl}
        borderRadius="md"
        _focus={{ boxShadow: "none" }}
      />
      <InputRightElement height={"100%"}>
        <IconButton
          variant={"solid"}
          colorScheme="purple"
          aria-label="Copy Link"
          icon={<FiClipboard />}
          size="xs"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default GeneratedLink;
