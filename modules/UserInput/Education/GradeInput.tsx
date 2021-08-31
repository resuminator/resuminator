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
        min={0}
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
