import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingLarge,
  paddingMedium,
  xMarginMobile
} from "../constants/variables";

const Projects = () => (
  <Wrapper>
    <Content>
      <Title>Projects</Title>
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

const Title = styled.div`
  margin-bottom: ${paddingMedium};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 24px;
`;

export default Projects;
