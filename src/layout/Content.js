/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React, { useRef } from "react";
import Resume from "../components/ResumePaper/Resume";
import { Box } from "@material-ui/core";
import InputLayout from "../components/UserInput/InputLayout";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MobileView from "../layout/MobileView";
import ActionButton from "../components/common/ActionButton";
import { FiPrinter } from "react-icons/fi";
import ReactToPrint from "react-to-print";

function Content() {
  const { width } = useWindowDimensions();
  const resume = useRef();

  return (
    <React.Fragment>
      {width >= 1280 ? (
        <Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            id="main"
            m={5}
          >
            <InputLayout />
            <Resume element={resume} />
          </Box>
          <Box justifyItems="center" m={5} p={2} pt={0}>
            <ReactToPrint
              trigger={() => (
                <ActionButton
                  startIcon={<FiPrinter />}
                  buttonText="Print Resume"
                />
              )}
              pageStyle="A4"
              content={() => resume.current}
            />
          </Box>
        </Box>
      ) : (
        <MobileView />
      )}
    </React.Fragment>
  );
}

export default Content;
