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

import { List, ListIcon, ListItem } from "@chakra-ui/layout";
import React from "react";
import { BsCheck, BsX } from "react-icons/bs";
import MotionBox from "../../components/layouts/MotionBox";

const getColor = (validator) => (validator ? "green.500" : "red.500");

interface Props {
  validators?: {
    validLength: boolean;
    hasNumber: boolean;
    upperCase: boolean;
    lowerCase: boolean;
  };
  hints?: Array<{ message: string; validator: boolean }>;
}

const DefaultHints = ({ validLength, hasNumber, upperCase, lowerCase }) => [
  {
    message: "Minimum 8 Characters",
    validator: validLength,
  },
  {
    message: "At least one number 0-9",
    validator: hasNumber,
  },
  {
    message: "1 uppercase and 1 lowercase character",
    validator: upperCase && lowerCase,
  },
];

const PasswordHints: React.FC<Props> = ({ validators, hints }) => {
  const arr = hints ? hints : DefaultHints(validators);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      as={List}
      listStyleType="none"
      mb="2"
    >
      {arr.map((hint) => (
        <ListItem key={hint.message} as="li" color={getColor(hint.validator)}>
          <ListIcon as={hint.validator ? BsCheck : BsX} />
          {hint.message}
        </ListItem>
      ))}
    </MotionBox>
  );
};

export default PasswordHints;
