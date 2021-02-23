import React, { useContext } from "react";
import SnackContext from "./SnackContext"
import DrinkContext from "./DrinkContext"
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  const snacks = useContext(SnackContext)
  const drinks = useContext(DrinkContext)
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks <span className="tool-tip info">{snacks.length}</span></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks <span className="tool-tip info">{drinks.length}</span></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
