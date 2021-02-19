import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingLarge,
  xMarginMobile,
  paddingMedium,
} from "../constants/variables";

import ProjectItem from "./ProjectItem";
import Title from "./shared/Title";

import iconsImage from "../images/icons/icons-preview.png";
import foodspaceImage from "../images/foodspace/foodspace-preview.png";
import sheltersImage from "../images/shelters/shelters-preview.png";

const Projects = () => (
  <section id="projects">
    <Wrapper>
      <Content>
        <Title>Projects</Title>
        <ItemsWrapper>
          <ProjectItem
            title="Foodspace"
            type="UI design"
            text="A mobile app that enables businesses to sell surplus food"
            imageSource={foodspaceImage}
            link="/foodspace"
            github="https://github.com/tinaavbelj/avatar-maker"
          ></ProjectItem>
          <ProjectItem
            title="Icons"
            type="UI design | Website"
            text="A collection of editable svg icons that can be downloaded from the website"
            imageSource={iconsImage}
            link="/icons"
            github="https://github.com/tinaavbelj/lepus-arcticus-icons"
          ></ProjectItem>
          <ProjectItem
            title="Animal Shelters Platform"
            type="UI design"
            text="A platform that contains information from all animal shelters"
            imageSource={sheltersImage}
            link="/shelters"
            github="https://github.com/tinaavbelj/avatar-maker"
          ></ProjectItem>
          <StyledProjectItem
            title="Avatars"
            type="UI design"
            text="An avatar maker for svg avatars with different shapes and colors."
            imageSource={iconsImage}
            link="https://avatars.lepus-arcticus.com"
            github="https://github.com/tinaavbelj/avatar-maker"
          ></StyledProjectItem>
        </ItemsWrapper>
      </Content>
    </Wrapper>
  </section>
);

const Wrapper = styled.div`
  width: 100%;
  padding: ${paddingLarge} 0;
`;

const Content = styled.div`
  max-width: ${contentWidth};
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const StyledProjectItem = styled(ProjectItem)`
  display: none;
  @media ${device.laptop} {
    margin-top: calc(${paddingMedium} - 10px) !important;
  }
`;

export default Projects;
