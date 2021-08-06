import { IconButtonProps } from "@chakra-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger
} from "@chakra-ui/popover";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { FaCheck } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import InputWithLabel from "../common/InputWithLabel";
import TooltipIconButton from "../common/TooltipIconButton";

interface ColorPickerProps extends Omit<IconButtonProps, "aria-label"> {
  value: string;
  handler: (value: string) => void;
  handleSubmit: () => Promise<string | number>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  handler,
  handleSubmit,
  isActive,
  ...props
}) => {
  const [hovering, setHovering] = useState(false);

  const restConditionalProps = () => {
    if (isActive)
      return {
        icon: hovering ? <MdColorLens /> : <FaCheck />,
        color: !hovering && value,
        colorScheme: hovering && "gray",
      };
    return {
      icon: <MdColorLens />,
      colorScheme: "gray",
    };
  };

  return (
    <Popover matchWidth placement="bottom-end" onClose={handleSubmit}>
      <PopoverTrigger>
        <TooltipIconButton
          label="Custom Color"
          aria-label={`color-custom`}
          isRound
          size="md"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          boxShadow={isActive && `0 0 0 4px ${value}`}
          variant={isActive ? "solid" : "outline"}
          onClick={() => {
            !isActive && handler("#");
          }}
          {...restConditionalProps()}
          {...props}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Select Custom Color</PopoverHeader>
        <PopoverBody
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <HexColorPicker color={value} onChange={handler} />
        </PopoverBody>
        <PopoverFooter>
          <InputWithLabel
            label="HEX Code"
            value={value}
            onChange={(e) => handler(e.target.value)}
          />
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
