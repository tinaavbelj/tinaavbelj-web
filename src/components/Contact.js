import React from "react";
import styled from "styled-components";

import {
  colors,
  device,
  contentWidth,
  paddingSmall,
  xMarginMobile
} from "../constants/variables";

const Contact = () => (
  <Wrapper>
    <Content>
      <IconBackground
        onClick={() =>
          window.open("https://www.linkedin.com/in/tina-avbelj/", "_blank")
        }
      >
        <Icon src={require("../images/linkedin.svg")} />
      </IconBackground>
      <IconBackground>
        <Icon src={require("../images/mail.svg")} />
      </IconBackground>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
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

const Icon = styled.img`
  width: 30px;
`;

const IconBackground = styled.div`
  background-color: ${colors.tertiary};
  width: 56px;
  height: 56px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:not(:first-child) {
    margin-left: 24px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export default Contact;
