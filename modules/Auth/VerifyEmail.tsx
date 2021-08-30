/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Button, Center, Icon, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import BoxHeader from "../../components/common/BoxHeader";
import firebaseSDK from "../../services/firebase";
import { Status } from "../../utils/constants";

interface VerifyEmailProps {
  actionCode?: string;
  continueUrl?: string;
}

//This component renders if the email verification is successful
const VerifySuccess: React.FC<VerifyEmailProps> = ({ continueUrl }) => (
  <Fragment>
    <Center mb="4">
      <BoxHeader
        title="Email Verified"
        subtitle="Your email was verified successfully. Now you can login with your new account."
        alignItems="center"
      />
      <Icon as={FiCheckCircle} boxSize="4rem" m="4" color="green.500" />
    </Center>
    <Link href={continueUrl}>
      <Button
        fontWeight="medium"
        variant="solid"
        colorScheme="green"
        mt="2"
        rightIcon={<FiArrowRight />}
      >
        Proceed to Login
      </Button>
    </Link>
  </Fragment>
);

//This component renders if the email verification fails
const VerifyFailure: React.FC<VerifyEmailProps> = ({ continueUrl }) => (
  <Fragment>
    <Center mb="4">
      <BoxHeader
        title="Error while verifying email"
        subtitle="Your email could not be verified. This may happen if the link has expired or already been used. Request a new link if you think this was a mistake."
        mb="0"
      />
      <Icon as={FiAlertCircle} boxSize="4rem" m="4" color="red.500" />
    </Center>
    <Link href={continueUrl}>
      <Button
        fontWeight="medium"
        variant="solid"
        colorScheme="purple"
        mt="2"
        leftIcon={<FiArrowLeft />}
      >
        Go back to Login
      </Button>
    </Link>
  </Fragment>
);

//This component renders while verifying email
const Verifying: React.FC = () => (
  <Center>
    <BoxHeader
      title="Verifying email..."
      subtitle="Please wait while we verify your email."
      mb="0"
    />
    <Spinner size="xl" thickness="4px" m="4" colorScheme="blue" />
  </Center>
);

const VerifyEmail: React.FC<VerifyEmailProps> = ({
  actionCode,
  continueUrl,
}) => {
  const [status, setStatus] = useState<Status>(Status.idle);

  useEffect(() => {
    setStatus(Status.loading);
    firebaseSDK
      .auth()
      .applyActionCode(actionCode)
      .then(() => setStatus(Status.success))
      .catch(() => setStatus(Status.error));
  }, [actionCode]);

  switch (status) {
    case Status.success:
      return <VerifySuccess continueUrl={continueUrl} />;
    case Status.error:
      return <VerifyFailure continueUrl={continueUrl} />;
    case Status.loading:
      return <Verifying />;
    default:
      return <Verifying />;
  }
};

export default VerifyEmail;
