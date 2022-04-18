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
  selectedHandlers
}) => {
  const { value, setValue } = selectedHandlers;
  const titleLightModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.500" : "inherit"
  });

  const titleDarkModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.100" : "inherit"
  });

  const subtitleLightModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.500" : "inherit"
  });

  const subtitleDarkModeProps = (id: Method): TextProps => ({
    color: "whiteAlpha.800"
  });

  const titleProps = useColorModeValue(
    titleLightModeProps("EXISTING"),
    titleDarkModeProps("EXISTING")
  );

  const subtitleProps = useColorModeValue(
    subtitleLightModeProps("EXISTING"),
    subtitleDarkModeProps("EXISTING")
  );

  const textColor = useColorModeValue("gray", "whiteAlpha.800");

  return (
    <ModalBody display="flex" flexWrap={{ base: "wrap", md: "nowrap" }}>
      {data.active.length ? (
        <ToggleCard id="EXISTING" method={method} callback={callback}>
          <BoxHeader
            title="Start with existing resume"
            subtitle="Duplicate an existing resume to get started quickly than ever."
            size={{ title: "md", subtitle: "sm" }}
            titleProps={titleProps}
            subtitleProps={subtitleProps}
          />
          <Text color={textColor} fontSize="sm" mb="2">
            Select a resume to use as template
          </Text>
          <ResumeTemplateDropdown
            data={data}
            method={method}
            selectedHandlers={{ value, setValue }}
          />
        </ToggleCard>
      ) : null}
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
