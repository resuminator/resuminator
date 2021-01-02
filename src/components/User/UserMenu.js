import {
  Avatar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
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
    height: "2rem"
  },
}));

const UserMenu = ({ handleClick, handleClose, anchorEl }) => {
  const classes = useStyles();
  const history = useHistory();
  const avatar = useSelector((state) => state.userInfo.avatar);

  const handleSignOut = () => {
    firebaseSDK
      .auth()
      .signOut()
      .then(() => localStorage.removeItem("loggedIn"))
      .then(() => history.push("/thankyou"));
  };

  const redirectToAccount = () => {
    history.push("/account");
  }

  return (
    <React.Fragment>
      <IconButton onClick={handleClick}>
        <Avatar alt="User" src={avatar} className={classes.avatar}/>
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
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
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
