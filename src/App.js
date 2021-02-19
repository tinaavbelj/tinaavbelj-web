import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { colors } from "./constants/variables";

import Cover from "./components/Cover";
import Foodspace from "./components/Projects/Foodspace";
import Footer from "./components/Footer";
import Icons from "./components/Projects/Icons";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ProjectCover from "./components/Projects/ProjectCover";
import Shelters from "./components/Projects/Shelters";
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
            <Icons />
          </Route>
          <Route path="/foodspace">
            <ProjectCover content={projectContent[1]} />
            <Foodspace />
          </Route>
          <Route path="/shelters">
            <ProjectCover content={projectContent[2]} />
            <Shelters />
          </Route>
          <Route path="/">
            <Cover />
            <Skills />
            <Projects />
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
