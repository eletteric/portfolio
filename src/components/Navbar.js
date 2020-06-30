import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink, withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";

import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles({
   list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

const Navbar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div className="navWrapper">
      <IconButton
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
        aria-label="menu"
        size="small"
        style={{ margin: "5px 20px 5px 15px" }}
      >
        <MenuIcon style={{ fontSize: "1.8em" }} />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <MenuList
          autoFocusItem={open}
          id="menu-list-grow"
        >

            <MenuItem onClick={toggleDrawer(false)} dense>
              <NavLink exact activeClassName="activeItem" to="/">
                Home
              </NavLink>
            </MenuItem>

            <MenuItem onClick={toggleDrawer(false)} dense>
              <NavLink exact activeClassName="activeItem" to="/projects">
                Projects
              </NavLink>
            </MenuItem>

            <MenuItem onClick={toggleDrawer(false)} dense>
              <NavLink exact activeClassName="activeItem" to="/about">
                About
              </NavLink>
            </MenuItem>
        </MenuList>
      </SwipeableDrawer>
    </div>
  );
};

export default withRouter(Navbar);
