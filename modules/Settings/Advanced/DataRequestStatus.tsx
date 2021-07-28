import { Text } from "@chakra-ui/react";
import { AccountSettings } from "../types";

/**
 * Message for fresh user when no data request has ever been placed.
 */
const PreRequestText: React.FC<{ email: string }> = ({ email }) => (
  <Text fontSize="sm" color="gray" mb="2">
    Your data will be sent to you via your primary email {`(${email})`} within
    14 business days of request.
  </Text>
);

/**
 * Message for when the data request is under process.
 */
const RequestUnderProcess: React.FC<{
  email: string;
  completedBy: Date;
}> = ({ email, completedBy }) => (
  <Text fontSize="sm" color="gray" mb="2">
    Data request for your account with email {email} is under process and is
    expected to be completed by {new Date(completedBy).toLocaleDateString()}.
  </Text>
);

/**
 * Message for when the data request is has completed.
 */
const RequestCompleted: React.FC<{
  completedOn: Date;
}> = ({ completedOn }) => (
  <Text fontSize="sm" color="gray" mb="2">
    Last account data request was completed on{" "}
    {new Date(completedOn).toLocaleDateString()}. You can place another request
    for your data which shall take upto 14 business days to process.
  </Text>
);

/**
 * Message for when the data request is completed but the 14 day buffer has not ended.
 */
const RequestCompletedWithBuffer: React.FC<{
  completedOn: Date;
  completedBy: Date;
}> = ({ completedOn, completedBy }) => (
  <Text fontSize="sm" color="gray" mb="2">
    Last account data request was completed on{" "}
    {new Date(completedOn).toLocaleDateString()}. You can place another request
    after {new Date(completedBy).toLocaleDateString()} for your data which shall
    take upto 14 business days to process.
  </Text>
);

interface DataRequestStatusProps {
  data: AccountSettings;
  email: string;
}

const DataRequestStatus: React.FC<DataRequestStatusProps> = ({
  email,
  data,
}) => {
  const NOW = new Date().getTime();
  const DUE_BY = new Date(data.completedBy).getTime();
  //When the user has never placed any data request
  if (data.isCompleted === null) return <PreRequestText email={email} />;

  //If the user has placed the request any time in the past.
  if (data.isCompleted) {
    //If the request is completed and it has been 14 business days since last request.
    if (DUE_BY < NOW)
      return <RequestCompleted completedOn={data.completedOn} />;
    //The request is completed, but the buffer of 14 days is still on.
    else
      return (
        <RequestCompletedWithBuffer
          completedOn={data.completedOn}
          completedBy={data.completedBy}
        />
      );
  }
  //The request in still in progress.
  else
    return <RequestUnderProcess email={email} completedBy={data.completedBy} />;
};

export default DataRequestStatus;
