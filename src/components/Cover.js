import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingSmall,
  xMarginMobile
} from "../constants/variables";

const Contact = () => (
  <Wrapper>
    <Content>
      <Text>Frontend developer</Text>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  padding: ${paddingSmall} 0;
`;

const Content = styled.div`
  max-width: ${contentWidth};
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

export default Contact;
