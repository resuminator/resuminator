/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AlertDialog } from "../components/common/AlertDialog";
import PrintButton from "../components/common/PrintButton";
import DownloadConfirmDialog from "../components/Feedback/DownloadConfirmDialog";
import Resume from "../components/ResumePaper/Resume";
import InputLayout from "../components/UserInput/InputLayout";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MobileView from "../layout/MobileView";

function Content() {
  const { width } = useWindowDimensions();
  const resume = useRef();
  const verified = useSelector((state) => state.userInfo.verified);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

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
            <AlertDialog
              title="Verify your email"
              message="We need to verify the user email to enable the account for any user. Without verifying you may not be able to use your Resuminator account."
              buttonText="Verify Email"
              open={!verified}
              onClick={() => (window.location.href = "/verify")}
            />
            <InputLayout />
            <Resume element={resume} />
            <DownloadConfirmDialog
              open={openConfirmDialog}
              setOpen={setOpenConfirmDialog}
            />
          </Box>
          <Box justifyItems="center" m={5} p={2} pt={0}>
            <PrintButton openDialog={setOpenConfirmDialog} element={resume} />
          </Box>
        </Box>
      ) : (
        <MobileView />
      )}
    </React.Fragment>
  );
}

export default Content;
