import {
  Button,
  ButtonProps,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { resumeMetaPlaceholder } from "../../../data/placeholderData";
import { ResumeMetadata, UserObject } from "../../User/types";

interface Props {
  data: UserObject;
  method?: "EXISTING" | "SCRATCH" | null;
}

const ResumeTemplateDropdown: React.FC<Props> = React.memo(
  ({ data, method }) => {
    const [selectedResume, setSelectedResume] = useState<ResumeMetadata>(() =>
      data.active.length ? data.active[0] : resumeMetaPlaceholder
    );
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
            <Text>{selectedResume.icon}</Text>
            <Text>{selectedResume.profileName}</Text>
          </HStack>
        </MenuButton>
        <MenuList>
          {data.active.map((item) => (
            <MenuItem key={item.id} onClick={() => setSelectedResume(item)}>
              <HStack>
                <Text>{item.icon}</Text>
                <Text>{item.profileName}</Text>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
);

ResumeTemplateDropdown.displayName = "ResumeTemplateDropdown";
export default ResumeTemplateDropdown;
