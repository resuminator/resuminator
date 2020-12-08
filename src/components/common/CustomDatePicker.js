import { DatePicker } from "@material-ui/pickers";
import React from "react";

const CustomDatePicker = ({ value, label, name, onChange, className }) => {
  return (
    <DatePicker
      variant="inline"
      openTo="year"
      name={name}
      views={["year", "month"]}
      label={label}
      value={value}
      inputVariant="outlined"
      minDate={new Date("1980-01-01")}
      maxDate={new Date("2100-01-01")}
      key={name}
      onChange={onChange}
      className={className}
    />
  );
};

export default CustomDatePicker;
