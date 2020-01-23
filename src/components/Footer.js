import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingMedium,
  xMarginMobile
} from "../constants/variables";

const Footer = () => (
  <Wrapper>
    <Content>
      <a href="mailto:tina.avbelj@gmail.com" target="_top">
        <IconBackground>
          <Icon src={require("../images/mail.svg")} />
        </IconBackground>
      </a>
      <IconBackground
        onClick={() =>
          window.open("https://www.linkedin.com/in/tina-avbelj/", "_blank")
        }
      >
        <Icon src={require("../images/linkedin-in-brands.svg")} />
      </IconBackground>
      <IconBackground
        onClick={() =>
          window.open("https://www.dribbble.com/tinaavbelj/", "_blank")
        }
      >
        <Icon src={require("../images/dribbble-brands.svg")} />
      </IconBackground>
      <IconBackground
        onClick={() =>
          window.open("https://www.behance.net/tinaavbelj", "_blank")
        }
      >
        <Icon src={require("../images/behance-brands.svg")} />
      </IconBackground>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: ${paddingMedium} 0;
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
    transform: scale(1.2);
  }
`;

export default Footer;
