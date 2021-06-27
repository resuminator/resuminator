import { Divider, DividerProps } from "@chakra-ui/react";
import React from "react";

const ColoredDivider: React.FC<DividerProps> = ({ color, ...rest }) => {
  const hrProps: DividerProps = {
    display: "block",
    height: "0",
    border: "none",
    borderTop: "1px solid",
    borderTopColor: color,
    padding: 0,
  };

  return <Divider {...hrProps} {...rest}/>;
};

export default ColoredDivider;
