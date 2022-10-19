/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import { Box, Button, Divider, VStack } from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";
import SubSection from "../../../components/layouts/SubSection";
import GeneratedLink from "./GeneratedLink";
import LinkVisibility from "./LinkVisibility";
import ShareOnSocialMedia from "./ShareOnSocialMedia";

interface Props {}

interface Props {
  resumeUrl: string;
}

const SectionContent: React.FC<Props> = ({ resumeUrl }) => {
  return (
    <Box>
      <GeneratedLink resumeUrl={resumeUrl} />
      <Divider my="4" />
      <VStack>
        <Button
          isFullWidth
          colorScheme={"purple"}
          size="sm"
          rightIcon={<FiUploadCloud />}
        >
          Publish changes
        </Button>
        <SubSection
          subtitle=" Any new changes to your resume will be reflected in the link only after
        you publish it."
        />
      </VStack>
      <Divider my="4" />
      <LinkVisibility />
      <Divider my="4" />
      <ShareOnSocialMedia />
    </Box>
  );
};

export default SectionContent;
