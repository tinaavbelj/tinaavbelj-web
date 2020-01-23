import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingMedium,
  paddingLarge,
  xMarginMobile
} from "../constants/variables";

const Contact = () => (
  <Wrapper>
    <Content>
      <Title>Contact</Title>
      <Email>tina.avbelj@gmail.com</Email>
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
  justify-content: center;
  height: 100%;
`;

const Title = styled.div`
  margin-bottom: ${paddingMedium};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;

const Email = styled.div``;

export default Contact;
