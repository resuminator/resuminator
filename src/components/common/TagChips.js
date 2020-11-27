import { Box, Chip, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "0.2rem",
  },
}));

export const TagChips = ({ tags, variant, color, size, className }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyItems="space-between" pt={1}>
      {tags.map((item) => (
        <Chip
          key={item}
          variant={variant || "default"}
          color={color || "secondary"}
          label={item}
          size={size || "small"}
          className={className || classes.root}
        />
      ))}
    </Box>
  );
};
