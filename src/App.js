import React from "react";
import "./App.css";
import styled from "styled-components";

import { colors } from "./constants/variables";

import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Cover />
      <Skills />
      <Contact />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;
  color: ${colors.text};
`;

export default App;
