import { useEffect, useState } from "react";

export const useEmailValidation = (email: string) => {
  const [validEmail, setValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(email.toLowerCase());
    setValid(isValid);
    if (!isValid) setErrorMessage("Invalid Email. Please check again.");
  }, [email]);

  return [validEmail, errorMessage];
};
