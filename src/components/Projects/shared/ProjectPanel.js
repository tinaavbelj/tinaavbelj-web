import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingLarge,
  xMarginMobile,
} from "../../../constants/variables";

const ProjectPanel = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-weight: 400;
  width: 100%;
  margin: ${paddingLarge} 0;
`;

const Content = styled.div`
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
    max-width: ${contentWidth};
  }
`;

export default ProjectPanel;
