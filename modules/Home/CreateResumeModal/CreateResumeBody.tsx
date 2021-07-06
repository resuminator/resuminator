import { ModalBody, Text } from "@chakra-ui/react";
import BoxHeader from "../../../components/common/BoxHeader";
import { UserObject } from "../../User/types";
import { Method } from "./index";
import ResumeTemplateDropdown from "./ResumeTemplateMenu";
import ToggleCard from "./ToggleCard";

interface CreateResumeBodyProps {
  data: UserObject;
  method: Method;
  callback: (value: Method) => void;
}

const CreateResumeBody: React.FC<CreateResumeBodyProps> = ({
  data,
  method,
  callback,
}) => {
  return (
    <ModalBody display="flex" flexWrap={{ base: "wrap", md: "nowrap" }}>
      <ToggleCard id="EXISTING" method={method} callback={callback}>
        <BoxHeader
          title="Start with existing resume"
          subtitle="Duplicate an existing resume to get started quickly than ever."
          size={{ title: "md", subtitle: "sm" }}
          titleProps={{
            color: method === "EXISTING" ? "blue.500" : "inherit",
          }}
        />
        <Text color="gray" fontSize="sm" mb="2">
          Select a resume to use as template
        </Text>
        <ResumeTemplateDropdown data={data} method={method} />
      </ToggleCard>
      <ToggleCard id="SCRATCH" method={method} callback={callback}>
        <BoxHeader
          title="Start from scratch"
          subtitle="Start with a fresh blank paper. Customize as you like."
          size={{ title: "md", subtitle: "sm" }}
          titleProps={{
            color: method === "SCRATCH" ? "blue.500" : "inherit",
          }}
        />
      </ToggleCard>
    </ModalBody>
  );
};

export default CreateResumeBody;
