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

import { IconButton } from "@chakra-ui/button";
import { InputRightElement } from "@chakra-ui/input";
import { useColorModeValue } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
interface RightIconProps {
  forPassword?: boolean;
  onClick?: () => void;
  options: { show: boolean; isValid: boolean };
}

const InputRightIcon: React.FC<RightIconProps> = ({
  forPassword,
  onClick,
  options,
}) => {
  const colorScheme = useColorModeValue("blackAlpha", "gray");

  if (forPassword) {
    return (
      <InputRightElement color="inherit">
        <Tooltip label={options.show ? "Hide Password" : "Show Password"}>
          <IconButton
            colorScheme={colorScheme}
            variant="ghost"
            onClick={onClick}
            aria-label="show-password"
            icon={options.show ? <AiFillEye /> : <AiFillEyeInvisible />}
          />
        </Tooltip>
      </InputRightElement>
    );
  }

  return (
    <InputRightElement color="green.400">
      {options.isValid && <FaCheckCircle />}
    </InputRightElement>
  );
};

export default InputRightIcon;
