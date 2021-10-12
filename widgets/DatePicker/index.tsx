/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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

interface Props {
  isDisabled?: boolean;
}

const theme = createTheme({
  typography: {
    fontFamily: "Inter"
  },
  palette: {
    primary: {
      light: "#4299e1",
      main: "#3182ce",
      dark: "#2b6cb0"
    }
  }
});

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none"
  }
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
          {...props}
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
            sx: {
              textAlign: "center",
              flexBasis: "50%",
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
                )
              }
            }
          }}
          DialogProps={{
            PaperProps: {
              sx: {
                "& .MuiTypography-overline": {
                  fontWeight: "600",
                  fontSize: "14px",
                  color: useColorModeValue(
                    "var(--chakra-colors-gray-500)",
                    "var(--chakra-colors-whiteAlpha-500)"
                  )
                },
                "& .MuiIconButton-label": {
                  color: useColorModeValue(
                    "var(--chakra-colors-gray-500)",
                    "var(--chakra-colors-whiteAlpha-500)"
                  )
                },
                "& .MuiCalendarPicker-root": {
                  maxHeight: "16rem"
                },
                borderRadius: "var(--chakra-radii-lg)",
                color: "inherit",
                bgcolor: useColorModeValue(
                  "var(--chakra-colors-gray-50)",
                  "var(--chakra-colors-gray-800)"
                )
              }
            }
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default MUIDatePicker;
export { TextField };
