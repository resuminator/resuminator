import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import firebaseSDK from "../../Services/firebaseSDK";

const useStyles = makeStyles((theme) => ({
  menuIcons: {
    padding: "0.5rem",
  },
  avatar: {
    borderStyle: "solid",
    padding: "0.2rem",
    borderWidth: 2,
    borderColor: theme.palette.primary.light,
    width: "2rem",
    height: "2rem",
  },
}));

const UserMenu = ({ handleClick, handleClose, anchorEl }) => {
  const classes = useStyles();
  const history = useHistory();
  const avatar = useSelector((state) => state.userInfo.avatar);
  const email = useSelector((state) => state.userInfo.email);

  const handleSignOut = () => {
    firebaseSDK
      .auth()
      .signOut()
      .then(() => localStorage.removeItem("loggedIn"))
      .then(() => history.push("/thankyou"));
  };

  const redirectToAccount = () => {
    history.push("/account");
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClick}>
        <Avatar alt="User" src={avatar} className={classes.avatar} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={2} pt={1}>
          <Typography variant="subtitle1">Logged in as:</Typography>
          <Typography variant="subtitle2" color="primary">
            {email}
          </Typography>
        </Box>
        <MenuItem onClick={redirectToAccount}>
          <FiUser className={classes.menuIcons} />
          My account
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <FiLogOut className={classes.menuIcons} />
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserMenu;
