import React from "react";
import { Link } from "react-router-dom";

import "../../../Styling/homeContent.scss";
import HomeContentImg from "../../../assets/HomeContentImg.jpg";

const HomeContent = (props) => {
  return (
    <div className="HomeContentWrapper">
      <h1>Let's get started!</h1>
      <div className="HomeContent">
        <p>
          Mountain Mobile helps you make money off of your vehicles when you're
          not using them. List, rent, and enjoy the extra cash.
          <br></br>
          <br></br>
          <Link to="/about">Learn More</Link>
          <Link to="/about">Sign Up</Link>
        </p>
        <img src={HomeContentImg} alt="dirtbikes"></img>
      </div>
    </div>
  );
};

export default HomeContent;
