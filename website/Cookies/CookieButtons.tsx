import { Button } from "@chakra-ui/react";
import nookies from "nookies";
import React, { Fragment } from "react";

interface Props {
  close: () => void;
}

const CookieButtons: React.FC<Props> = ({ close }) => {
  const handleAccept = () => {
    nookies.set(undefined, "user-accepted-cookies", "true", { path: "/" });
    close();
  };

  return (
    <Fragment>
      <Button size="sm" colorScheme="purple" onClick={handleAccept}>
        Accept All
      </Button>
      <Button size="sm" variant="ghost">
        Manage
      </Button>
    </Fragment>
  );
};

export default CookieButtons;
