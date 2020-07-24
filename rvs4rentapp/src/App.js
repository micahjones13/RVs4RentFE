import React from "react";
//libraires
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//local imports
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/marketingPage/Home";
import About from "./components/marketingPage/About";
import ContactUs from "./components/marketingPage/ContactUs";

// This is the App component. It holds and renders all other components in the app, like each page on the website.
function App() {
  return (
    <div className="App">
      <NavBar /> {/*These are rendering the components by name on the app */}
      <Route path="/" component={Home} />{" "}
      {/* A route is what it sounds like. When the url is rvs4rent.com/ then the rendered component will be home. */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactUs} />
    </div>
  );
}

export default App;
