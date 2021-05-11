import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";

interface Props {
  label?: string;
}

const TooltipIconButton: React.FC<Props & IconButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <Tooltip label={label}>
      <IconButton
        size="sm"
        variant="ghost"
        {...props}
      />
    </Tooltip>
  );
};

export default TooltipIconButton;
