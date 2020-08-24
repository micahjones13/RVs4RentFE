import React from "react";
import "../../Styling/aboutPage.scss";
const About = (props) => {
  return (
    <div className="AboutPageWrapper">
      <h1>
        Rent high-end, low-price vehicles, or list your vehicles and watch the
        cash roll in.
      </h1>
      <hr></hr>
      <h1>Learn more about our services:</h1>
      <div className="AboutContent">
        <div className="AboutDiv">
          <h1>Rental</h1>
          <p>
            Check out the listings and rent a vehicle for a low price near you
          </p>
        </div>
        <div className="AboutDiv">
          <h1>List Your Vehicle</h1>
          <p>
            Not using your vehicle, and want to make some money off them? List
            them here, rent them out and watch the money roll in.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
