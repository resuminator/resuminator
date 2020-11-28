import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { InputHeader } from "../common/InputHeader";
import { addSkill, deleteSkillById, setDisplayType } from "./skillActions";
import { SkillClassification } from "./SkillClassification";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    width: theme.spacing(50),
    borderColor: theme.palette.contrast.light,
  },
  tags: {
    marginRight: "0.2rem",
    marginBottom: "0.2rem",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
  FormControl: {
    paddingTop: "1rem",
  },
}));

function SkillsInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(null);
  const skills = useSelector((state) => state.skillInfo);
  const skillData = SkillClassification;
  const displayType = useSelector(state => state.properties.skill_display_type);

  const findSkillInData = (skill) => {
    const result = skillData.find(
      (item) => item.name.toLowerCase() === skill.toLowerCase()
    );
    if (result) return result;

    return {
      id: skillData[skillData.length - 1].id + 1 || 0,
      name: skill,
      category: "Miscellaneous",
    };
  };

  const duplicateEntry = (array, object) => {
    return array.find(
      (item) => item.name.toLowerCase() === object.name.toLowerCase()
    );
  };

  const handleToggle = (e) => {
    dispatch(setDisplayType(e.target.value));
  };

  const handleInput = (e) => {
    if (["Enter", ","].includes(e.key)) {
      e.preventDefault();
      const [value] = e.target.value.split(",").slice(-1);
      const skillObj = findSkillInData(value.trim());

      if (!duplicateEntry(skillData, skillObj)) skillData.push(skillObj);
      setPayload(skillObj);
      e.target.value = "";
    }
  };

  React.useEffect(() => {
    dispatch(addSkill(payload));
  }, [dispatch, payload]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Want to show-off some skills?"
        subtitle="Enter skills you remember (sparated by commas). We'll categorise them on your resume"
      />
      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.FormControl}>
          Display Type
        </FormLabel>
        <RadioGroup
          className={classes.radioGroup}
          name="skill-display"
          value={displayType}
          onChange={handleToggle}
        >
          <FormControlLabel
            value="categories"
            control={<Radio />}
            label="Categories"
          />
          <FormControlLabel value="tags" control={<Radio />} label="Tags" />
        </RadioGroup>
      </FormControl>
      <TextField
        InputProps={{ classes: { input: classes.desc }, rowsMax: 5 }}
        variant="outlined"
        color="secondary"
        label="Add Skill"
        name="skills"
        placeholder="Separate skills by commas or press enter"
        required
        className={classes.TextField}
        onKeyDown={handleInput}
      />
      <Box
        display="flex"
        justifyItems="space-between"
        pt={1}
        maxWidth="30rem"
        flexWrap="wrap"
      >
        {payload !== null
          ? skills.map((item) => (
              <Chip
                key={item.id}
                variant="default"
                color="primary"
                label={item.name}
                size="small"
                className={classes.tags}
                deleteIcon={<TiDelete />}
                onDelete={() => dispatch(deleteSkillById(item.id))}
              />
            ))
          : null}
      </Box>
    </Box>
  );
}

export default SkillsInput;
