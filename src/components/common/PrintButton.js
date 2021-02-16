/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import { FiPrinter } from "react-icons/fi";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { analyticsEvent } from "../../Services/Analytics";
import "../../styles/page.css";
import ActionButton from "./ActionButton";

const PrintButton = ({ element, openDialog }) => {
  const name = useSelector((state) => state.userInfo.name).replace(" ", "_");

  return (
    <ReactToPrint
      bodyClass={`page print`}
      trigger={() => (
        <ActionButton startIcon={<FiPrinter />} buttonText="Print Resume" />
      )}
      content={() => element.current}
      documentTitle={`${name}_Resume.pdf`}
      onBeforePrint={() => analyticsEvent("download_triggered")}
      onAfterPrint={() => openDialog(true)}
    />
  );
};

export default PrintButton;
