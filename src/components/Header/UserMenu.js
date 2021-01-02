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
    height: "auto"
  },
}));

const UserMenu = ({ handleClick, handleClose, anchorEl, handleSignOut }) => {
  const classes = useStyles();
  const avatar = useSelector((state) => state.userInfo.avatar);
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
        <MenuItem onClick={handleClose}>
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
