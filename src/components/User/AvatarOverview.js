import { Avatar, Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const AvatarOverview = ({ user }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={8}>
      <Avatar className={classes.avatar} src={user.avatar} />
    </Box>
  );
};

export default AvatarOverview;
