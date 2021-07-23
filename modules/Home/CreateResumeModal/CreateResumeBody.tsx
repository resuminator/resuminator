import {
  ModalBody,
  Text,
  TextProps,
  useColorModeValue
} from "@chakra-ui/react";
import { SetStateAction } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import { ResumeMetadata, UserObject } from "../../User/types";
import { Method } from "./index";
import ResumeTemplateDropdown from "./ResumeTemplateMenu";
import ToggleCard from "./ToggleCard";

interface CreateResumeBodyProps {
  data: UserObject;
  method: Method;
  callback: (value: Method) => void;
  selectedHandlers: {
    value: ResumeMetadata;
    setValue: React.Dispatch<SetStateAction<ResumeMetadata>>;
  };
}

const CreateResumeBody: React.FC<CreateResumeBodyProps> = ({
  data,
  method,
  callback,
  selectedHandlers,
}) => {
  const { value, setValue } = selectedHandlers;
  const titleLightModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.500" : "inherit",
  });

  const titleDarkModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.100" : "inherit",
  });

  const subtitleLightModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.500" : "inherit",
  });

  const subtitleDarkModeProps = (id: Method): TextProps => ({
    color: "whiteAlpha.800",
  });

  return (
    <ModalBody display="flex" flexWrap={{ base: "wrap", md: "nowrap" }}>
      <ToggleCard id="EXISTING" method={method} callback={callback}>
        <BoxHeader
          title="Start with existing resume"
          subtitle="Duplicate an existing resume to get started quickly than ever."
          size={{ title: "md", subtitle: "sm" }}
          titleProps={useColorModeValue(
            titleLightModeProps("EXISTING"),
            titleDarkModeProps("EXISTING")
          )}
          subtitleProps={useColorModeValue(
            subtitleLightModeProps("EXISTING"),
            subtitleDarkModeProps("EXISTING")
          )}
        />
        <Text
          color={useColorModeValue("gray", "whiteAlpha.800")}
          fontSize="sm"
          mb="2"
        >
          Select a resume to use as template
        </Text>
        <ResumeTemplateDropdown
          data={data}
          method={method}
          selectedHandlers={{ value, setValue }}
        />
      </ToggleCard>
      <ToggleCard id="SCRATCH" method={method} callback={callback}>
        <BoxHeader
          title="Start from scratch"
          subtitle="Start with a fresh blank paper. Customize as you like."
          size={{ title: "md", subtitle: "sm" }}
          titleProps={useColorModeValue(
            titleLightModeProps("SCRATCH"),
            titleDarkModeProps("SCRATCH")
          )}
          subtitleProps={useColorModeValue(
            subtitleLightModeProps("SCRATCH"),
            subtitleDarkModeProps("SCRATCH")
          )}
        />
      </ToggleCard>
    </ModalBody>
  );
};

export default CreateResumeBody;
