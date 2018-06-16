import React, {Fragment} from 'react';
import {MenuItem, Nav, NavDropdown} from "react-bootstrap";

const UserMenu = ({user, logout}) => {
  const navTitle = (
    <Fragment>
      Hello, <b>{user.username}</b>!
    </Fragment>
  );

  return (
    <Nav pullRight>
      <NavDropdown title={navTitle} id="user-menu">
        <MenuItem onClick={logout}>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  )
};

export default UserMenu;