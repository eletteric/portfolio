import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink, withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';

import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


const useStyles = makeStyles({
 /* list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    textAlign: "center",
  },*/
});

const Navbar = (props) => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




  return (
    <div className="navWrapper">
      <IconButton
         ref={anchorRef}
         aria-controls={open ? 'menu-list-grow' : undefined}
         aria-haspopup="true"
         onClick={handleToggle}
         color="inherit"
        aria-label="menu"
        size="small"
        style={{margin: '5px 20px 5px 15px'}}
      >
        <MenuIcon style={{ fontSize: "1.8em" }} />
      </IconButton>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement="left-end">
          {({ TransitionProps, placement }) => (

              <div>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                  <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              timeout={{
                enter: 600,
              }}
            >
                    <MenuItem onClick={handleClose} dense><NavLink exact activeClassName="activeItem" to="/">
                Home
              </NavLink></MenuItem>
              </Grow>
              <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              timeout={{
                enter: 400,
              }}
            >
                    <MenuItem onClick={handleClose} dense>
                    <NavLink exact activeClassName="activeItem" to="/projects">
                Projects
              </NavLink>
                    </MenuItem>
                    </Grow>
                    <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              timeout={{
                enter: 200,
              }}
            >
                    <MenuItem onClick={handleClose} dense>
              <NavLink exact activeClassName="activeItem" to="/about">
                About
              </NavLink>
                    </MenuItem>
                    </Grow>
                  </MenuList>
                </ClickAwayListener>
              </div>
          )}
        </Popper>

    </div>
  );
};

export default withRouter(Navbar);