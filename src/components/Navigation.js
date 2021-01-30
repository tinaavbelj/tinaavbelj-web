import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingSmall,
  xMarginMobile,
} from "../constants/variables";

const Navigation = () => (
  <Wrapper>
    <Content>
      <div>
        <Logo src={require("../images/tinaavbelj-logo-darkblue.svg")} />
        <Name></Name>
      </div>
      <Links>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </Links>
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
    flex-direction: row;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 50px;
  margin-bottom: 8px;

  @media ${device.laptop} {
    margin: auto;
    margin-bottom: 0;
    flex-direction: row;
  }
`;

const Name = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.div`
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

export default Navigation;
