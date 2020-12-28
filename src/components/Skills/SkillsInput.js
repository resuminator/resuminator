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
import { updateSkillInfoState, switchDisplayType } from "./skills.actions";
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
  const app = useSelector((state) => state.app);
  const loading = useSelector((state) => state.skillInfo.loading);
  const storeState = useSelector((state) => state.skillInfo.skills);
  const [state, setState] = useState(storeState);
  const skillData = SkillClassification;
  const displayType = useSelector((state) => state.skillInfo.display_type);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const fetchSkillInData = (skill) => {
    const result = skillData.find(
      (item) => item.name.toLowerCase() === skill.toLowerCase()
    );
    if (result) return result;

    //Add new Skill to SkillSet DB
    //and then add it to Skills and fetch state again.
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
    dispatch(switchDisplayType(e.target.value));
  };

  const handleInput = (e) => {
    if (["Enter", ","].includes(e.key)) {
      e.preventDefault();
      const [value] = e.target.value.split(",").slice(-1);
      const response = fetchSkillInData(value.trim());

      if (duplicateEntry(state, response)) {
        e.target.value = "";
        return;
      }
      skillData.push(response);
      setState([...state, response]);
      e.target.value = "";
    }
  };

  const handleDelete = (item) => {
    setState((newState) =>
      newState.filter((skill) => skill.name !== item.name)
    );
  };

  React.useEffect(() => {
    dispatch(updateSkillInfoState(state));
  }, [dispatch, state]);

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
        {state.map((item) => (
          <Chip
            key={item._id}
            variant="default"
            color="primary"
            label={item.name}
            size="small"
            className={classes.tags}
            deleteIcon={<TiDelete />}
            onDelete={() => handleDelete(item)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SkillsInput;
