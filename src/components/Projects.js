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

import iconsImage from "../images/project-preview-icons.png";
import iconsFoodspace from "../images/project-preview-foodspace.png";

const Projects = () => (
  <Wrapper>
    <Content>
      <Title>My Projects</Title>
      <ItemsWrapper>
        <ProjectItem
          title="Foodspace"
          text="A mobile app that enables businesses to sell surplus food"
          imageSource={iconsFoodspace}
          link="/foodspace"
          github="https://github.com/tinaavbelj/avatar-maker"
        ></ProjectItem>
        <ProjectItem
          title="Icons"
          text="A collection of editable svg icons that can be downloaded from the website"
          imageSource={iconsImage}
          link="/icons"
          github="https://github.com/tinaavbelj/lepus-arcticus-icons"
        ></ProjectItem>
        <StyledProjectItem
          title="Avatars"
          text="An avatar maker for svg avatars with different shapes and colors."
          imageSource={iconsImage}
          link="https://avatars.lepus-arcticus.com"
          github="https://github.com/tinaavbelj/avatar-maker"
        ></StyledProjectItem>
      </ItemsWrapper>
    </Content>
  </Wrapper>
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const StyledProjectItem = styled(ProjectItem)`
  @media ${device.laptop} {
    margin-top: calc(${paddingMedium} - 10px) !important;
  }
`;

export default Projects;
