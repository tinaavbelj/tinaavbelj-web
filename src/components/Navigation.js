import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingSmall,
  xMarginMobile
} from "../constants/variables";

const Navigation = () => (
  <Wrapper>
    <Content>
      <Logo src={require("../images/tinaavbelj-logo.svg")} />
      <Name>Tina Avbelj</Name>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: ${xMarginMobile} 0;

  @media ${device.laptop} {
    padding: ${paddingSmall} 0;
  }
`;

const Content = styled.div`
  max-width: ${contentWidth};
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
  }
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  width: 50px;
  margin-right: ${paddingSmall};
`;

const Name = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export default Navigation;
