import React from "react";
import { Box } from "@material-ui/core";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import ExperienceInfo from "./ExperienceInfo";

function ResumeForm() {
  const [social, setSocial] = React.useState("None");
  const [present, setPresent] = React.useState(false);

  return (
    <Box display="flex" flexDirection="column" id="main-form">
      <BasicInfo />
      <ContactInfo social={social} setSocial={setSocial} />
      <ExperienceInfo present={present} setPresent={setPresent} />
    </Box>
  );
}

export default ResumeForm;
