import React from "react";
import { makeStyles } from "@material-ui/core";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import ExperienceInfo from "./ExperienceInfo";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
});

function ResumeForm(props) {
  const classes = useStyles();
  const [social, setSocial] = React.useState("None");
  const [present, setPresent] = React.useState(false);

  return (
    <div id="main-form" className={classes.root}>
      <BasicInfo />
      <ContactInfo social={social} setSocial={setSocial} />
      <ExperienceInfo present={present} setPresent={setPresent} />
    </div>
  );
}

export default ResumeForm;
