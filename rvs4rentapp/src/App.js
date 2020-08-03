import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/marketingPage/Home";
import About from "./components/marketingPage/About";
import ContactUs from "./components/marketingPage/ContactUs";

// This is the App component. It holds and renders all other components in the app, like each page on the website.
function App() {
  return (
    <Switch>
      <div className="App">
        <NavBar /> {/*These are rendering the components by name on the app */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
      </div>
    </Switch>
  );
}

export default App;
