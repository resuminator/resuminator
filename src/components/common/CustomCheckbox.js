/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

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
