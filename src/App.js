import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { colors } from "./constants/variables";

import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ProjectCover from "./components/Projects/ProjectCover";
import Skills from "./components/Skills";

import projectContent from "./content/projects";

function App() {
  return (
    <Wrapper>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/icons">
            <ProjectCover content={projectContent[0]} />
            <Contact />
          </Route>
          <Route path="/">
            <Cover />
            <Skills />
            <Projects />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;
  color: ${colors.text};
`;

export default App;
