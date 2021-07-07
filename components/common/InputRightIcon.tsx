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
