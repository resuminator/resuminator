import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import ActionModal from "../../../../components/common/ActionModal";
import BoxHeader from "../../../../components/common/BoxHeader";
import { Status } from "../../../../utils/constants";

interface Props {}

const ResumeLinksData = [
  {
    id: "dhajwf",
    resume: "Software Engineer",
    link: "https://resuminator.in/r/viveknigam-3fjas3j"
  },
  {
    id: "dajt93n",
    resume: "Frontend Engineer",
    link: "https://resuminator.in/r/viveknigam-dajt93n"
  },
  {
    id: "ahs92hf",
    resume: "Untitled Resume",
    link: "https://resuminator.in/r/viveknigam-ahs92hf"
  }
];

const LinkRow = ({ resume, link, onClick }: any) => {
  return (
    <Flex justify={"space-between"} align="center" mb="4">
      <Box w={"25%"}>
        <Text fontSize={"sm"}>{resume}</Text>
      </Box>
      <Box flexBasis={"60%"} mr="auto">
        <Input size={"sm"} value={link} readOnly borderRadius={"md"} />
      </Box>
      <Box>
        <Button colorScheme={"red"} size="sm" onClick={onClick}>
          Delete
        </Button>
      </Box>
    </Flex>
  );
};

const ResumeLinkSettings = (props: Props) => {
  const [resumeLinks, setResumeLinks] = React.useState(ResumeLinksData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentLink, setCurrentLink] = React.useState<string>("");
  const [status, setStatus] = React.useState<Status>(Status.idle);

  const [confirmationUsername, setConfirmationUsername] =
    React.useState<string>("");

  // This is hardcoded for now, will be fetched from the API
  const username = "viveknigam3003";

  const cleanUp = () => {
    setStatus(Status.idle);
    setConfirmationUsername("");
    setCurrentLink("");
  };

  const handleDeleteLink = () => {
    // Delete Link
    console.log("Delete Link " + currentLink);
    cleanUp();
    onClose();
  };

  const openDeleteModal = (linkId: string) => {
    onOpen();
    const link = resumeLinks.find((link) => link.id === linkId);
    if (link) setCurrentLink(link.link);
  };

  return (
    <Box>
      <BoxHeader
        title="Resume Links"
        subtitle="Manage resume links connected to your account. Delete links that you no longer need."
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <Box>
        {resumeLinks.map((link) => (
          <LinkRow
            key={link.id}
            {...link}
            onClick={() => openDeleteModal(link.id)}
          />
        ))}
      </Box>
      <Divider />
      <ActionModal
        title="Confirm Delete"
        buttonText="Delete Link"
        isOpen={isOpen}
        onClose={() => {
          onClose();
          cleanUp();
        }}
        onClick={handleDeleteLink}
        actionButtonProps={{
          isLoading: status === Status.loading,
          loadingText: "Deleting",
          disabled: confirmationUsername !== username
        }}
      >
        <Text mb="4">
          Are you sure you want to delete the shared resume link?
          <strong>{currentLink}</strong>. This will make the resume inaccessible
          to anyone who has the link.
        </Text>

        <Text mb="2">Type in your username to confirm the deletion.</Text>
        <Input
          placeholder={username}
          value={confirmationUsername}
          onChange={(e) => setConfirmationUsername(e.target.value)}
        />
      </ActionModal>
    </Box>
  );
};

export default ResumeLinkSettings;
