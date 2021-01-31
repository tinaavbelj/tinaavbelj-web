import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  device,
  contentWidth,
  paddingSmall,
  xMarginMobile,
  colors,
} from "../constants/variables";

const Navigation = () => (
  <Wrapper>
    <Content>
      <div>
        <Link to="/">
          <Logo src={require("../images/tinaavbelj-logo-darkblue.svg")} />
        </Link>
      </div>
      <Links>
        <StyledLink smooth to="/#what-i-do">
          What I do
        </StyledLink>
        <StyledLink smooth to="/#projects">
          Projects
        </StyledLink>
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

const Links = styled.div`
  display: flex;
`;

const StyledLink = styled(HashLink)`
  cursor: pointer;
  color: ${colors.text};
  font-weight: 500;

  &:hover {
    color: ${colors.primary};
  }

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

export default Navigation;
