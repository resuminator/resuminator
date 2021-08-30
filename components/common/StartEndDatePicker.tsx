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

import { Checkbox } from "@chakra-ui/checkbox";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { DatePickerView } from "@material-ui/lab/DatePicker/shared";
import { add, sub } from "date-fns";
import MUIDatePicker, { TextField } from "../../widgets/DatePicker";

interface Props {
  labels?: { started: string; ended: string; checkbox: string };
  values: { start: Date; end: Date };
  onChangeHandler: (key: string) => (date: Date) => void;
  checkboxHandler?: (e) => void;
  views?: Array<DatePickerView>;
}

const StartEndDatePicker: React.FC<Props> = ({
  labels = { started: "Started", ended: "Ended", checkbox: "Present" },
  values,
  onChangeHandler,
  checkboxHandler,
  views = ["year", "month"],
}) => {
  return (
    <>
      <HStack mb="2">
        <Box>
          <Text fontSize="md" pb="2" color="gray.500">
            {labels.started}
          </Text>
          <MUIDatePicker
            renderInput={({ helperText, label, ...params }) => (
              <TextField label={null} {...params} />
            )}
            label={labels.started}
            value={values.start}
            onChange={onChangeHandler("start")}
            views={views}
            minDate={sub(new Date(), { years: 30 })}
            maxDate={add(new Date(), { years: 5 })}
          />
        </Box>
        <Box>
          <Text fontSize="md" pb="2" color="gray.500">
            {labels.ended}
          </Text>
          <MUIDatePicker
            renderInput={({ helperText, label, ...params }) => (
              <TextField label={null} {...params} />
            )}
            label={labels.ended}
            value={values.end}
            onChange={onChangeHandler("end")}
            views={views}
            minDate={values.start}
            maxDate={add(new Date(), { years: 5 })}
            clearable
          />
        </Box>
      </HStack>
      <Checkbox
        mb="4"
        size="sm"
        name="end"
        onChange={checkboxHandler}
        isChecked={!values.end}
      >
        {labels.checkbox}
      </Checkbox>
    </>
  );
};

export default StartEndDatePicker;
