import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink, withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    textAlign: "center",
  }
});

const Navbar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, open });
  };

  const menuItems = () => {
    return (
      <div
        className="fullList"
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div>
          <List>
            <ListItem button>
              <NavLink exact activeClassName="activeItem" to="/">Home</NavLink>
            </ListItem>
            <ListItem button>
              <NavLink exact activeClassName="activeItem" to="/work">Work</NavLink>
            </ListItem>
            <ListItem button>
              <NavLink exact activeClassName="activeItem" to="/about">About</NavLink>
            </ListItem>
          </List>
        </div>
      </div>
    );
  };

  return (
    <div className="navWrapper">
      <IconButton
        onClick={toggleDrawer(true)}
        color="inherit"
        aria-label="menu"
        size="medium"
      >
        <MenuIcon style={{ fontSize: "2em" }} />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={state.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {menuItems()}
      </SwipeableDrawer>
    </div>
  );
};

export default withRouter(Navbar);
