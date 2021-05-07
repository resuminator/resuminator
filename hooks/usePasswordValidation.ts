import { useEffect, useState } from "react";

export const usePasswordValidation = (
  password: string,
  confirmPassword: string,
  reqLength = 8
) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    setValidLength(password.length >= reqLength ? true : false);
    setUpperCase(password.toLowerCase() !== password);
    setLowerCase(password.toUpperCase() !== password);
    setHasNumber(/\d/.test(password));
    setMatch(password === confirmPassword);
  }, [password, confirmPassword, reqLength]);

  return [validLength, hasNumber, upperCase, lowerCase, match];
};
