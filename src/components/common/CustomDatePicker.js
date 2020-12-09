/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { DatePicker } from "@material-ui/pickers";
import React from "react";

const CustomDatePicker = ({ value, label, name, views, onChange, disabled, className }) => {
  return (
    <DatePicker
      variant="inline"
      openTo="year"
      name={name}
      views={views}
      label={label}
      value={value}
      inputVariant="outlined"
      minDate={new Date("1980-01-01")}
      maxDate={new Date("2100-01-01")}
      key={name}
      disabled={disabled}
      onChange={onChange}
      className={className}
    />
  );
};

export default CustomDatePicker;
