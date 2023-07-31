import React from "react";
import NavBar from "../components/NavBar.js"; // Import the NavBar component
import Home from "../components/Home.js"; // Import the Home component
import About from "../components/About.js"; // Import the About component

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
