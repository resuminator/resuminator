import React, { useState } from "react";
import { AlertDialog } from "../components/common/AlertDialog";
import { welcomeMessage } from "./Messages";

const WelcomeDialog = () => {
  const message = welcomeMessage;
  const [openAlert, setOpenAlert] = useState(
    JSON.parse(localStorage.getItem("firstTime")) || false
  );

  const handleClose = () => {
    setOpenAlert(false);
    localStorage.removeItem("firstTime");
  };
  
  return (
    <AlertDialog
      title={message.title}
      message={message.message}
      open={openAlert}
      onClick={handleClose}
      onClose={handleClose}
      buttonText={message.actionText}
    />
  );
};

export default WelcomeDialog;
