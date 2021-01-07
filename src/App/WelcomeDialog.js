import React from "react";
import { AlertDialog } from "../components/common/AlertDialog";
import { welcomeMessage } from "./Messages";

const WelcomeDialog = ({ open, onClick, onClose }) => {
  const message = welcomeMessage;
  return (
    <AlertDialog
      title={message.title}
      message={message.message}
      open={open}
      onClick={onClick}
      onClose={onClose}
      buttonText={message.actionText}
    />
  );
};

export default WelcomeDialog;
