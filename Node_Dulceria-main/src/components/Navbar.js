import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="FiAlignJustify">
            <Link
              to={"#"}
              className="nav-link"
              data-widget="pushmenu"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to={"/"} className="nav-link">
              Salir
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"#"} className="nav-link" data-widget="navbar-search" role="button" ><i className="fas fa-search" /></Link>
          </li>
        </ul>
      </nav>
    );
  }
export default navbar;