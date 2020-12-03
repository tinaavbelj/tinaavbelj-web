import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidthNarrow,
  paddingSmall,
  xMarginMobile,
} from "../constants/variables";

const Contact = () => (
  <Wrapper>
    <Content>
      <Text>Hi. I am Tina. I am a frontend developer based in Ljubljana.</Text>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  padding: ${paddingSmall} 0;
`;

const Content = styled.div`
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
    max-width: ${contentWidthNarrow};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.div`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
`;

export default Contact;
