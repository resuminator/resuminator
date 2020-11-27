import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

export const CustomCheckbox = ({
  checked,
  onChange,
  id,
  label,
  name,
  color,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color={color || "primary"}
          id={id}
        />
      }
      label={label}
    />
  );
};
