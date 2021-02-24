import { AlertDialog } from "../common/AlertDialog";
import CustomDialog from "../common/CustomDialog";

export const RenderSuccessDialog = ({open, callback}) => (
    <AlertDialog
      open={open}
      title="Wohoo! 🎉"
      message="Congratulations on your awesome new Resume!"
      buttonText="Close"
      onClick={callback}
    />
  ); 
  
export const RenderFailureDialog = ({open, setOpen, primaryCallback, secondaryCallback}) => (
    <CustomDialog
      title="Oops 🙁"
      content="Would you like a Resuminator expert to guide you with the application?"
      open={open}
      setOpen={setOpen}
      primaryAction={primaryCallback}
      secondaryAction={secondaryCallback}
      primaryText="Yes Please"
      secondaryText="I'll be fine"
    />
  );

export const RenderDialog = ({open, setOpen, primaryCallback, secondaryCallback}) => (
    <CustomDialog
      title="Quick question!"
      content="Were you able to print your resume as PDF successfully?"
      open={open}
      setOpen={setOpen}
      primaryAction={primaryCallback}
      secondaryAction={secondaryCallback}
      primaryText="Yes 🤩"
      secondaryText="Nope 🙁"
    />
  );