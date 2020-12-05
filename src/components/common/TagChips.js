import { Box, Chip, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    marginRight: "0.3rem",
    minWidth: "2.5rem",
  },
});

export const TagChips = ({ tags, variant, color, size, className }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyItems="space-between" mb={2}>
      {tags.map((item) => (
        <Chip
          key={item}
          variant={variant || "default"}
          color={color || "primary"}
          label={item}
          size={size || "small"}
          className={className || classes.root}
        />
      ))}
    </Box>
  );
};
