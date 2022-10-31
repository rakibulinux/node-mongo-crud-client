import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="list-item">
      <li>
        <NavLink to="/add/user">Add</NavLink>
      </li>
      <li>
        <NavLink to="/">Read</NavLink>
      </li>
      <li>
        <NavLink to="/">Update</NavLink>
      </li>
      <li>
        <NavLink to="/">Delete</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
