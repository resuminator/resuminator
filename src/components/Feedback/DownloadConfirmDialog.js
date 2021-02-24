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
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { analyticsEvent, logKPI } from "../../Services/Analytics";
import { AuthContext } from "../Auth/AuthContext";
import { triggerAssist } from "./AssistAction";
import {
  RenderDialog,
  RenderFailureDialog,
  RenderSuccessDialog,
} from "./Dialogs";

const DownloadConfirmDialog = ({ open, setOpen }) => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const auth = useContext(AuthContext);
  const user = useSelector((state) => state.userInfo);
  const { addToast } = useToasts();

  const successAction = () => {
    setSuccess(true);
    confetti({
      zIndex: 1500,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const failedAction = () => {
    setFailure(true);
  };

  const performAfterActions = () => {
    setOpen(false);
    analyticsEvent("download_complete");
    logKPI({ uid: auth.uid, event: true }).then((res) => {
      return res === 200 ? successAction() : null;
    });
  };

  const performFailureActions = () => {
    setOpen(false);
    setSuccess(false);
    logKPI({ uid: auth.uid, event: false }).then((res) =>
      res === 200 ? failedAction() : null
    );
  };

  const assistFired = async () => {
    setFailure(false);
    return await triggerAssist({ name: user.name, email: user.email })
      .then((res) =>
        res === 200
          ? addToast(
              "Your support request has been recorded successfully! We shall get back to you over your email soon!",
              { appearance: "success" }
            )
          : addToast(
              "Some unexpected error occured while logging your response.",
              { appearance: "error", autoDismiss: true }
            )
      )
      .catch(() =>
        addToast(
          "Looks like something did not go well :( We will look into this issue!",
          { appearance: "error", autoDismiss: true }
        )
      );
  };

  return (
    <Fragment>
      <RenderDialog
        open={open}
        setOpen={setOpen}
        primaryCallback={() => performAfterActions()}
        secondaryCallback={() => performFailureActions()}
      />
      {success && (
        <RenderSuccessDialog
          open={success}
          callback={() => setSuccess(false)}
        />
      )}
      {failure && (
        <RenderFailureDialog
          open={failure}
          setOpen={setFailure}
          primaryCallback={() => assistFired()}
          secondaryCallback={() => setFailure(false)}
        />
      )}
    </Fragment>
  );
};

export default DownloadConfirmDialog;
