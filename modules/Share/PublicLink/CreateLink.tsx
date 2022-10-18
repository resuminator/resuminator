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

import { Button, useDisclosure } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { FiLink } from "react-icons/fi";
import { FeatureFlags } from "../../Cohort/FeatureFlags";
import withCohortAccess from "../../Cohort/WithCohortAccess";
import CreateUsername from "./CreateUsername";
import SectionContent from "./SectionContent";

interface Props {}

const CreateLink = (props: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    setResumeUrl("https://resuminator.in/share/r/viveknigam3003-hfi3h4f");
  }, []);

  return (
    <Fragment>
      {resumeUrl ? (
        <SectionContent resumeUrl={resumeUrl} />
      ) : (
        <Button
          variant="solid"
          colorScheme="purple"
          rightIcon={<FiLink />}
          loadingText="Creating Link"
          onClick={onOpen}
        >
          Create shareable link
        </Button>
      )}
      <CreateUsername onClose={onClose} open={isOpen} />
    </Fragment>
  );
};

export default withCohortAccess(CreateLink, FeatureFlags.SHARE_LINKS);
