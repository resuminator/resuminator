import { Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { CustomSectionObject } from "../../../store/types";

interface Props {
  section: CustomSectionObject;
}

const ModalStep2: React.FC<Props> = ({ section }) => {
  const { inputFields, hasTitleRow } = section;
  return (
    <Fragment>
      <Text fontSize="sm" mb="4">
        Arrange the layout of the selected inputs on your resume. Drag the items
        to rearrange the layout.
      </Text>
      
    </Fragment>
  );
};

export default ModalStep2;
