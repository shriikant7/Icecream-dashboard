import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import icecream from "../assets/img/ultimate-ice-cream.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={icecream} alt="" />
        Awesome icecream
      </h1>
      <nav>
        <ul>
          <NavLink to="/" exact>
            Home Menu
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
