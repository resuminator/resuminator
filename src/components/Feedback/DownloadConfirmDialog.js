/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import confetti from "canvas-confetti";
import React, { Fragment, useContext, useState } from "react";
import { analyticsEvent, logKPI } from "../../Services/Analytics";
import { AuthContext } from "../Auth/AuthContext";
import { AlertDialog } from "../common/AlertDialog";
import CustomDialog from "../common/CustomDialog";

const DownloadConfirmDialog = ({ open, setOpen }) => {
  const [success, setSuccess] = useState(false);
  const auth = useContext(AuthContext);

  const successAction = () => {
    setSuccess(true);
    confetti({
      zIndex: 1500,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const performAfterActions = () => {
    setOpen(false);
    analyticsEvent("download_complete");
    logKPI({ uid: auth.uid, status: true }).then((res) =>
      res === 200 ? successAction() : null
    );
  };

  const renderSuccessDialog = () => (
    <AlertDialog
      open={success}
      title="Wohoo! 🎉"
      message="Congratulations on your awesome new Resume!"
      buttonText="Close"
      onClick={() => setSuccess(false)}
    />
  );

  const renderDialog = () => (
    <CustomDialog
      title="Quick question!"
      content="Were you able to print your resume as PDF successfully?"
      open={open}
      setOpen={setOpen}
      primaryAction={() => performAfterActions()}
      secondaryAction={() => {
        setOpen(false);
        setSuccess(false);
      }}
      primaryText="Yes 🤩"
      secondaryText="Nope 🙁"
    />
  );

  return (
    <Fragment>
      {renderDialog()}
      {success ? renderSuccessDialog() : null}
    </Fragment>
  );
};

export default DownloadConfirmDialog;
