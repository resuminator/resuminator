import React from "react";
import { FiPrinter } from "react-icons/fi";
import ReactToPrint from "react-to-print";
import ActionButton from "./ActionButton";
import { useSelector } from "react-redux";
import "../../styles/page.css";

const PrintButton = ({ element }) => {
  const name = useSelector((state) => state.userInfo.name).replace(" ", "_");

  return (
    <ReactToPrint
      bodyClass={`page print`}
      trigger={() => (
        <ActionButton startIcon={<FiPrinter />} buttonText="Print Resume" />
      )}
      content={() => element.current}
      documentTitle={`${name}_Resume.pdf`}
    />
  );
};

export default PrintButton;
