import React from "react";
import { Link } from "react-router-dom";

const Nav = props =>
  <ul className="nav nav-tabs">
    <li onClick={() => props.handlePageChange("Home")}>
      <Link to="/">Home</Link>
    </li>
    <li onClick={() => props.handlePageChange("About")}>
      <Link to="/about">About</Link>
    </li>
    <li onClick={() => props.handlePageChange("Discover")}>
      <Link to="/discover">Discover</Link>
    </li>
    <li onClick={() => props.handlePageChange("Search")}>
      <Link to="/search">Search</Link>
    </li>
  </ul>;

export default Nav;