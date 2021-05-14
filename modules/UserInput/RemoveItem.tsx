import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ActionModal from "../../components/common/ActionModal";
import TooltipIconButton from "../../components/common/TooltipIconButton";

interface Props {
  itemType?: string;
  handleDelete: () => void;
}

const RemoveItemButton: React.FC<Props> = ({
  itemType = "item",
  handleDelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <TooltipIconButton
        label="Remove Item"
        colorScheme="red"
        aria-label="Remove-Item-From-Resume"
        icon={<RiDeleteBin6Line />}
        onClick={onOpen}
      />
      <ActionModal
        title="Confirm delete"
        buttonText="Delete"
        isOpen={isOpen}
        onClick={() => {
          handleDelete();
          onClose();
        }}
        onClose={onClose}
      >
        Are you sure you want to delete this {itemType} from your resume? This
        action is irreversible. <br />
        <br />
        <Text fontSize="sm" color="GrayText">
          If you wished to just hide it from your resume but still keep the data
          you can do it by using the eye icon (
          <Icon as={FiEye} m="1" color="blue.500" />) button on the item.
        </Text>
      </ActionModal>
    </Fragment>
  );
};

export default RemoveItemButton;
