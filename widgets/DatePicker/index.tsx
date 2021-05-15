import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  createTheme,
  makeStyles,
  TextField,
  ThemeProvider
} from "@material-ui/core";
import { DatePickerProps, MobileDatePicker } from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { add, sub } from "date-fns";
import * as React from "react";

interface Props {
  isDisabled?: boolean;
}

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
});

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));

const MUIDatePicker: React.FC<Props & DatePickerProps> = ({
  value,
  onChange,
  isDisabled = false,
  ...props
}) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          openTo="year"
          value={value}
          disabled={isDisabled}
          onChange={onChange}
          minDate={sub(new Date(), { years: 30 })}
          maxDate={add(new Date(), { years: 5 })}
          toolbarPlaceholder="mmmm yyyy"
          {...props}
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
            sx: {
              textAlign: "center",
              maxWidth: "12rem",
              outline: "0",
              border: "2px solid",
              borderColor: "transparent",
              borderRadius: "var(--chakra-radii-md)",
              color: "inherit",
              bgcolor: useColorModeValue(
                "var(--chakra-colors-gray-100)",
                "var(--chakra-colors-whiteAlpha-100)"
              ),
              transition: "all 0.2s",
              WebkitTransition: "all 0.2s",
              ":hover": {
                bgcolor: useColorModeValue(
                  "var(--chakra-colors-gray-200)",
                  "var(--chakra-colors-whiteAlpha-100)"
                ),
              },
            },
          }}
          DialogProps={{
            PaperProps: {
              sx: {
                color: "inherit",
                bgcolor: useColorModeValue(
                  "var(--chakra-colors-gray-50)",
                  "var(--chakra-colors-gray-800)"
                ),
              },
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MUIDatePicker;
export { TextField };

