import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidthNarrow,
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Text = styled.div`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
`;

const TextSmall = styled.div`
  margin-top: ${paddingSmall};
  font-size: 24px;
  font-weight: 500;
  text-align: center;
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
