import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/marketingPage/Home";

// This is the App component. It holds and renders all other components in the app, like each page on the website.
function App() {
  return (
    <div className="App">
      <NavBar /> {/*These are rendering the components by name on the app */}
      <Home />
    </div>
  );
}

export default App;
