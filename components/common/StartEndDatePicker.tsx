import { Box, HStack, Text } from "@chakra-ui/layout";
import { DatePickerView } from "@material-ui/lab/DatePicker/shared";
import MUIDatePicker, { TextField } from "../../widgets/DatePicker";
import { add, sub } from "date-fns";

interface Props {
  labels?: { started: string; ended: string };
  values: { start: Date; end: Date };
  onChangeHandler: (key: string) => (date: Date) => void;
  views?: Array<DatePickerView>;
}

const StartEndDatePicker: React.FC<Props> = ({
  labels = { started: "Started", ended: "Ended" },
  values,
  onChangeHandler,
  views = ["year", "month"],
}) => {
  return (
    <HStack mb="2">
      <Box>
        <Text fontSize="md" pb="2" color="gray.500">
          {labels.started}
        </Text>
        <MUIDatePicker
          renderInput={({ helperText, label, ...params }) => (
            <TextField label={null} {...params} />
          )}
          label="Started"
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
          label="End"
          value={values.end}
          onChange={onChangeHandler("end")}
          views={views}
          minDate={values.start}
          maxDate={add(new Date(), { years: 5 })}
        />
      </Box>
    </HStack>
  );
};

export default StartEndDatePicker;
