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
