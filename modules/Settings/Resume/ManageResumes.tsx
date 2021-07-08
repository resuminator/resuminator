import {
  Box,
  HStack,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Icon,
  Image,
  VStack,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import useUserStore from "../../User/store";

const ManageResumes = () => {
  const { active, updateActive } = useUserStore();

  return (
    <Box mb="8">
      <BoxHeader
        title="Manage Resumes"
        subtitle="Click on the icon or resume name to edit"
        size={{ title: "lg", subtitle: "sm" }}
      />
      <Box>
        <VStack alignItems="flex-start">
          {active.map((item) => (
            <HStack key={item.id}>
              <Button>{item.icon}</Button>
              <Editable
                value={item.profileName}
                onChange={(nextValue) =>
                  updateActive(item.id, "profileName", nextValue)
                }
              >
                <EditablePreview p="2" />
                <EditableInput p="2" />
              </Editable>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ManageResumes;
