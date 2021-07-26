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
      return <AllChangesSaved />;
    case Status.loading:
      return <SavingChanges />;
    case Status.error:
      return <Error timeDiff={text} />;
    case Status.success:
      return <LastSaved timeDiff={text} />;
  }
};

export default AutoSaveStatus;
