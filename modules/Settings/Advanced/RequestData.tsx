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

import { Box, Button, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { placeAccountDataRequest } from "../../../apis/settings";
import BoxHeader from "../../../components/common/BoxHeader";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";
import { AccountSettings } from "../types";
import DataRequestStatus from "./DataRequestStatus";

interface RequestDataProps {
  data: AccountSettings;
}

const RequestData: React.FC<RequestDataProps> = ({ data }) => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const token = Cookies.get("token");
  const { createToast } = useCustomToast();
  const [status, setStatus] = useState<Status>(Status.idle);

  //Constants
  const NOW = new Date().getTime();
  const DUE_BY = new Date(data.completedBy).getTime();

  //For first time users, data.isCompleted is null, so isDisabled should be false.
  //User cannot place request if either the buffer has not ended
  //or the previous request is incomplete
  const isDisabled =
    data.isCompleted !== null && (!data.isCompleted || DUE_BY > NOW);

  useEffect(() => {
    if (auth.user) {
      setEmail(auth.user.email);
    }
  }, [auth.user]);

  const handleRequest = async () => {
    setStatus(Status.loading);
    return placeAccountDataRequest(token)
      .then(() => {
        setStatus(Status.success);
        createToast(
          "Account data request placed",
          "success",
          "We shall contact you over your primary email. It takes upto 14 days to process the request."
        );
      })
      .catch(() => {
        setStatus(Status.error);
        createToast(
          "Couldn't place account data request",
          "error",
          "This service might be temporarily down, or your previous request has not been completed. For any queries, contact us on our email."
        );
      });
  };

  return (
    <Box mb="8">
      <BoxHeader
        title="Request Data"
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <Text fontSize="sm" mb="4">
        You can request a copy of all the data you have ever stored in
        Resuminator including your personal information, data entered in any
        resume, and all metadata for your account linked to
        <strong> {email} </strong> by raising a request.
      </Text>
      <Button
        colorScheme="purple"
        size="sm"
        mb="4"
        isLoading={status === Status.loading}
        loadingText="Requesting Account Data"
        onClick={handleRequest}
        isDisabled={isDisabled}
      >
        Request Account Data
      </Button>
      <DataRequestStatus data={data} email={email} />
    </Box>
  );
};

export default RequestData;
