import React from 'react'
import { AlertDialog } from '../components/common/AlertDialog';

const WelcomeDialog = ({open,
    onClick,
    onClose}) => {
    const message = {
        title: "Welcome to Resuminator! 👋🏻",
        message: `Thanks for joining Resuminator Early Access Programme! 
        Currently, Resuminator is in Beta stage - 
        this means that you may play around the app and we would love to know your feedback to improve!`,
        actionText: "Got it! 👍🏻",
      };

    return (
        <AlertDialog
        title={message.title}
        message={message.message}
        open={open}
        onClick={onClick}
        onClose={onClose}
        buttonText={message.actionText}
      />
    )
}

export default WelcomeDialog
