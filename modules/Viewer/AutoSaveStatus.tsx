import { HStack, Spinner, Text, TextProps } from "@chakra-ui/react";
import TimeDiff from "js-time-diff";
import React from "react";
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

const AllChangesSaved = () => (
  <HStack>
    <FiCheck color="gray" />
    <Message message="All Changes Saved" />
  </HStack>
);

const SavingChanges = () => (
  <HStack>
    <Spinner size="xs" color="gray" />
    <Message message="Saving Changes" fontStyle="italic" />
  </HStack>
);

const Error = () => {
  const { lastSavedAt } = useGlobalStore();
  const diff = TimeDiff(lastSavedAt);

  const text = parseInt(diff.split(" ")[0]) <= 0 ? "just now" : diff;
  return (
    <HStack>
      <FiAlertTriangle color="gray" />
      <Message message={`Couldn't save last changes. Last saved ${text}`} />
    </HStack>
  );
};

const LastSaved = () => {
  const { lastSavedAt } = useGlobalStore();
  const diff = TimeDiff(lastSavedAt);

  const text = parseInt(diff.split(" ")[0]) <= 0 ? "just now" : diff;
  return (
    <HStack>
      <FiCheck color="gray" />
      <Message message={`Changes saved ${text}`} />
    </HStack>
  );
};

const AutoSaveStatus = (props: Props) => {
  const saveStatus = useGlobalStore((state) => state.saveStatus);

  switch (saveStatus) {
    case Status.idle:
      return <AllChangesSaved />;
    case Status.loading:
      return <SavingChanges />;
    case Status.error:
      return <Error />;
    case Status.success:
      return <LastSaved />;
  }
};

export default AutoSaveStatus;
