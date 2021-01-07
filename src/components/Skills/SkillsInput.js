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
import React, { useContext, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Auth/AuthContext";
import { InputHeader } from "../common/InputHeader";
import Loader from "../common/Loader";
import ViewToggle from "../common/ViewToggle";
import {
  updateSkillInfoState,
  switchDisplayType,
  fetchInDatabase,
  addUserSkill,
  deleteUserSkill,
  addSkillToDatabase,
} from "./skills.actions";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    width: theme.spacing(50),
    borderColor: theme.palette.contrast.light,
  },
  tags: {
    marginRight: "0.2rem",
    marginBottom: "0.2rem",
    maxWidth: "10rem",
    wordBreak: "break-word",
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
  const uid = useContext(AuthContext).uid;
  const loading = useSelector((state) => state.skillInfo.loading);
  const storeState = useSelector((state) => state.skillInfo.skills);
  const [state, setState] = useState(storeState);
  const displayType = useSelector((state) => state.skillInfo.display_type);
  const modules = useSelector((state) => state.settings.modules);
  const combinedList = modules.left.concat(modules.right);
  const [show, setShow] = useState(combinedList.includes("certs"));

  React.useEffect(() => {
    if (!app.init) {
      setState(storeState);
      setShow(combinedList.includes("certs"));
    }
  }, [app, storeState, combinedList]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const duplicateEntry = (value) => {
    return state.find(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
  };

  const handleToggle = (e) => {
    dispatch(switchDisplayType(e.target.value));
  };

  const handleInput = (e) => {
    if (["Enter", ","].includes(e.key)) {
      e.preventDefault();
      const [rawValue] = e.target.value.split(",").slice(-1);
      const value = rawValue.trim();

      if (duplicateEntry(value)) {
        e.target.value = "";
        return;
      }

      fetchInDatabase(value).then((response) => {
        if (response.length !== 0) {
          setState([...state, response[0]]);
          e.target.value = "";
          addUserSkill(uid, response[0]._id).then(console.log("added"));
        } else
          addSkillToDatabase(value, "Miscellaneous").then(() =>
            fetchInDatabase(value).then((newSkill) => {
              setState([...state, newSkill[0]]);
              e.target.value = "";
              addUserSkill(uid, newSkill[0]._id);
            })
          );
      });
    }
  };

  const handleDelete = (item) => {
    deleteUserSkill(uid, item._id).then(() =>
      setState((newState) =>
        newState.filter((skill) => skill.name !== item.name)
      )
    );
  };

  const truncateName = (name) => {
    return name.length >= 20 ? name.substring(0, 20) + "..." : name;
  }

  React.useEffect(() => {
    dispatch(updateSkillInfoState(state));
  }, [dispatch, state]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Want to show-off some skills?"
        subtitle="Enter skills you remember (sparated by commas). We'll categorise them on your resume"
      />
      <ViewToggle name="skill" show={show} setShow={setShow} />
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
        {loading ? (
          <Loader />
        ) : (
          state.map((item) => (
            <Chip
              key={item._id}
              variant="default"
              color="primary"
              label={truncateName(item.name)}
              size="small"
              className={classes.tags}
              deleteIcon={<TiDelete />}
              onDelete={() => handleDelete(item)}
            />
          ))
        )}
      </Box>
    </Box>
  );
}

export default SkillsInput;
