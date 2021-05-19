import { HStack } from "@chakra-ui/layout";
import React from "react";
import NumberInputWithLabel from "../../../components/common/NumberInputWithLabel";

interface Props {
  gradeObtained: number;
  gradeMax: number;
  onChangeHandler?: (key: string, value: number) => void;
}

const GradeInput: React.FC<Props> = ({
  gradeObtained,
  gradeMax,
  onChangeHandler,
}) => {
  const getRestrictedStep = () => {
    if (gradeMax >= 3 && gradeMax < 5) return 0.1;
    if (gradeMax >= 5 && gradeMax < 10) return 1;
    if (gradeMax >= 10 && gradeMax <= 100) return 10;
  };

  return (
    <HStack mb="2">
      <NumberInputWithLabel
        value={gradeObtained}
        placeholder="9.5"
        min={1}
        step={0.1}
        max={gradeMax}
        name="gradeObtained"
        inputLabel="Grade Obtained"
        clampValueOnBlur={false}
        onChange={(s, value) => onChangeHandler("gradeObtained", value)}
      />
      <NumberInputWithLabel
        step={getRestrictedStep()}
        min={3}
        max={100}
        precision={2}
        value={gradeMax}
        placeholder="10"
        name="gradeMax"
        inputLabel="Max Grade"
        onChange={(s, value) => onChangeHandler("gradeMax", value)}
      />
    </HStack>
  );
};

export default GradeInput;
