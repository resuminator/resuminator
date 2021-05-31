import { IconButtonProps } from "@chakra-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import React from "react";
import { HexColorPicker } from "react-colorful";
import { MdColorLens } from "react-icons/md";
import InputWithLabel from "../common/InputWithLabel";
import TooltipIconButton from "../common/TooltipIconButton";

interface ColorPickerProps extends Omit<IconButtonProps, "aria-label"> {
  value: string;
  handler: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  handler,
  ...rest
}) => {
  return (
    <Popover matchWidth placement="bottom-end">
      <PopoverTrigger>
        <TooltipIconButton
          label="Custom Color"
          icon={<MdColorLens />}
          aria-label={`color-custom`}
          isRound
          size="md"
          {...rest}
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
