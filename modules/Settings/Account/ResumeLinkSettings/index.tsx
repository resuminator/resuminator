import {
  Box,
  Button,
  Divider,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../../../components/common/BoxHeader";

interface Props {}

const ResumeLinksData = [
  {
    id: "dhajwf",
    resume: "Software Engineer",
    link: "https://resuminator.in/share/r/viveknigam-3fjas3j"
  },
  {
    id: "dajt93n",
    resume: "Frontend Engineer",
    link: "https://resuminator.in/share/r/viveknigam-dajt93n"
  },
  {
    id: "ahs92hf",
    resume: "Untitled Resume",
    link: "https://resuminator.in/share/r/viveknigam-ahs92hf"
  }
];

const ResumeLinkSettings = (props: Props) => {
  const [resumeLinks, setResumeLinks] = React.useState(ResumeLinksData);

  return (
    <Box>
      <BoxHeader
        title="Resume Links"
        subtitle="Manage resume links connected to your account. Delete links that you no longer need."
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <TableContainer>
        <Table variant={"unstyled"}>
          <Tbody>
            {resumeLinks.map((item) => (
              <Tr key={item.id}>
                <Td width={"5%"} textAlign="left">
                  <Text fontSize={"sm"}>{item.resume}</Text>
                </Td>
                <Td width={"70%"}>
                  <Input
                    size={"sm"}
                    value={item.link}
                    readOnly
                    borderRadius={"md"}
                  />
                </Td>
                <Td width={"15%"}>
                  <Button colorScheme={"red"} size="sm">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider />
    </Box>
  );
};

export default ResumeLinkSettings;
