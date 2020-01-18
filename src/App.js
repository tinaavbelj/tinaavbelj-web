import React from "react";
import "./App.css";

import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Cover></Cover>
      <Contact></Contact>
    </div>
  );
}

export default App;
