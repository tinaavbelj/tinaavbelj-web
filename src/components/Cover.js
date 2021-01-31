import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingSmall,
  xMarginMobile,
  colors,
} from "../constants/variables";

const Contact = () => (
  <Wrapper>
    <Content>
      <Text>Hi. I am Tina. I am a frontend developer based in Ljubljana.</Text>
      <TextSmall>
        You can find my programming related stuff on{" "}
        <a
          href="https://github.com/tinaavbelj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkText>GITHUB</LinkText>
        </a>{" "}
        and design related stuff on{" "}
        <a
          href="https://dribbble.com/tinaavbelj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkText>DRIBBBLE</LinkText>
        </a>{" "}
        and{" "}
        <a
          href="https://www.behance.net/tinaavbelj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkText>BEHANCE</LinkText>
        </a>
        .
      </TextSmall>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: ${paddingSmall} 0;
`;

const Content = styled.div`
  margin: 0 ${xMarginMobile};
  min-height: 60vh;
  @media ${device.laptop} {
    margin: auto;
    max-width: ${contentWidth};
    min-height: 45vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: left;

  @media ${device.laptop} {
    font-size: 40px;
  }
`;

const TextSmall = styled.div`
  margin-top: 32px;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;

const LinkText = styled.span`
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    font-size: 19px;
  }
`;

export default Contact;
