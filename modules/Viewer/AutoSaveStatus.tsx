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

import { HStack, Spinner, Text, TextProps } from "@chakra-ui/react";
import TimeDiff from "js-time-diff";
import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import useGlobalStore from "../../store/global.store";
import { Status } from "../../utils/constants";

interface Props {}

const Message: React.FC<TextProps & { message: string }> = ({
  message = "",
  ...rest
}) => (
  <Text fontSize="sm" color="gray" {...rest}>
    {message}
  </Text>
);

const UnsavedChanges = () => (
  <HStack>
    <FaAsterisk color="gray" />
    <Message message="Unsaved Changes" />
  </HStack>
);

const SavingChanges = () => (
  <HStack>
    <Spinner size="xs" color="gray" />
    <Message message="Saving Changes" fontStyle="italic" />
  </HStack>
);

const Error = ({ timeDiff }) => {
  return (
    <HStack>
      <FiAlertTriangle color="gray" />
      <Message message={`Couldn't save last changes. Last saved ${timeDiff}`} />
    </HStack>
  );
};

const LastSaved = ({ timeDiff }) => {
  return (
    <HStack>
      <FiCheck color="gray" />
      <Message message={`Changes saved ${timeDiff}`} />
    </HStack>
  );
};

const AutoSaveStatus = (props: Props) => {
  const saveStatus = useGlobalStore((state) => state.saveStatus);
  const { lastSavedAt } = useGlobalStore();
  const diff = TimeDiff(lastSavedAt);

  const JUST_NOW = 10;

  const text = parseInt(diff.split(" ")[0]) <= JUST_NOW ? "just now" : diff;

  switch (saveStatus) {
    case Status.idle:
      return <UnsavedChanges />;
    case Status.loading:
      return <SavingChanges />;
    case Status.error:
      return <Error timeDiff={text} />;
    case Status.success:
      return <LastSaved timeDiff={text} />;
  }
};

export default AutoSaveStatus;
