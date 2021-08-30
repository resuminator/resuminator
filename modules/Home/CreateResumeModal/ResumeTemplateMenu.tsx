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

import {
  Button,
  ButtonProps,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ResumeMetadata, UserObject } from "../../User/types";

interface Props {
  data: UserObject;
  selectedHandlers: {
    value: ResumeMetadata;
    setValue: React.Dispatch<SetStateAction<ResumeMetadata>>;
  };
  method?: "EXISTING" | "SCRATCH" | null;
}

const ResumeTemplateDropdown: React.FC<Props> = ({
  data,
  selectedHandlers,
  method,
}) => {
  const { value, setValue } = selectedHandlers;

  const buttonLightModeProps: ButtonProps = {
    colorScheme: method === "EXISTING" ? "blue" : "blackAlpha",
  };

  const buttonDarkModeProps: ButtonProps = {
    colorScheme: method === "EXISTING" ? "blue" : "inherit",
  };

  const buttonProps = useColorModeValue(
    buttonLightModeProps,
    buttonDarkModeProps
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        isDisabled={!data.active.length}
        variant="outline"
        rightIcon={<FiChevronDown />}
        _focus={{ outline: "none" }}
        mb="2"
        {...buttonProps}
      >
        <HStack>
          <Text>{value.icon}</Text>
          <Text>{value.profileName}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {data.active.map((item) => (
          <MenuItem key={item._id} onClick={() => setValue(item)}>
            <HStack>
              <Text>{item.icon}</Text>
              <Text>{item.profileName}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ResumeTemplateDropdown;
