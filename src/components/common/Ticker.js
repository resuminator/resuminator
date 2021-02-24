import React from "react";
import { useToasts } from "react-toast-notifications";
import { tickerMessage } from "../../App/Messages";

const Ticker = () => {
  const { addToast } = useToasts();

  React.useEffect(() => {
    addToast(tickerMessage, { appearance: "info", autoDismiss: true });
  }, [addToast]);

  return <React.Fragment />;
};

export default Ticker;
