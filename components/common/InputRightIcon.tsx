import { IconButton } from "@chakra-ui/button";
import { InputRightElement } from "@chakra-ui/input";
import { Tooltip } from "@chakra-ui/tooltip";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";


type ErrorProps = {
  message: string;
};

interface RightIconProps {
  forPassword?: boolean;
  onClick?: () => void;
  options: { show: boolean; error: ErrorProps; valid: boolean };
}

const InputRightIcon: React.FC<RightIconProps> = ({
  forPassword,
  onClick,
  options,
}) => {
  if (forPassword) {
    return (
      <InputRightElement color="inherit">
        <Tooltip label={options.show ? "Hide Password" : "Show Password"}>
          <IconButton
            colorScheme="blackAlpha"
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
    !options.error && (
      <InputRightElement color="green.400">
        {options.valid && <FaCheckCircle />}
      </InputRightElement>
    )
  );
};

export default InputRightIcon;
