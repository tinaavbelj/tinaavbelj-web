import React from "react";
import styled from "styled-components";

import { colors } from "../constants/variables";

const ProjectItem = ({ title, text, imageSource, link }) => (
  <BoxShadow onClick={() => window.open(link, "_blank")}>
    <ImageWrapper>
      <img src={imageSource} />
    </ImageWrapper>
    <InformationWrapper>
      <div>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </div>
      <IconWrapper>
        <IconArrow src={require("../images/arrow-right.svg")} />
      </IconWrapper>
    </InformationWrapper>
  </BoxShadow>
);

const IconArrow = styled.img`
  transition: 0.2s ease-out;
`;

const BoxShadow = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${colors.backgroundLight};
  border-radius: 10px;
  box-shadow: 5px 5px 18px rgb(27, 5, 107, 0.1);
  transition: box-shadow 0.2s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 18px rgb(27, 5, 107, 0.18);

    ${IconArrow} {
      transform: translateX(6px);
    }
  }
`;

const ImageWrapper = styled.div`
  background-color: ${colors.text};
  border-radius: 10px 10px 0 0;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformationWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Text = styled.div`
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  padding-right: 6px;
  text-align: right;
`;

export default ProjectItem;
