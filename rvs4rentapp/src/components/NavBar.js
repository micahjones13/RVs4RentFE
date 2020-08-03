import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import "../Styling/navbar.css";

const NavWrapper = styled.div``;
//Need a logo
const NavBar = (props) => {
  return (
    <nav>
      <ul class="menu">
        <li class="logo">
          <Link to="/">Mountain Mobile</Link>
        </li>
        <li class="item">
          <Link to="/">Home</Link>
        </li>
        <li class="item">
          <Link to="/about">About</Link>
        </li>

        <li class="item">
          <Link to="/contact">Contact</Link>
        </li>
        <li class="item button">
          <a href="#">Log In</a>
        </li>
        <li class="item button secondary">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

/*


       <nav>
      <ul className="menu">
        <li className="logo">
          <Link to="/">Mountain Mobile</Link>
        </li>
        <li className="item">
          <Link to="/about">About Us</Link>
        </li>
       
        <li className="item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
*/
