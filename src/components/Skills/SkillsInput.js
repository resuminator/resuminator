import { Box, Chip, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { SKILL_INFO } from "../../redux/actionTypes";
import { InputHeader } from "../common/InputHeader";
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
}));

function SkillsInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(null);
  const skills = useSelector((state) => state.skillInfo);
  const skillData = SkillClassification;

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
    dispatch({
      type: SKILL_INFO.ADD,
      payload,
    });
  }, [dispatch, payload]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Want to show-off some skills?"
        subtitle="Enter skills you remember (sparated by commas). We'll categorise them on your resume"
      />
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
                onDelete={() =>
                  dispatch({ type: SKILL_INFO.DELETE, id: item.id })
                }
              />
            ))
          : null}
      </Box>
    </Box>
  );
}

export default SkillsInput;
