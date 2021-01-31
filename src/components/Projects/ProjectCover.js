import React from "react";
import styled from "styled-components";
import { useMediaLayout } from "use-media";

import {
  device,
  contentWidth,
  paddingMedium,
  paddingSmall,
  xMarginMobile,
  colors,
} from "../../constants/variables";

const ProjectCover = ({ content }) => {
  const isMobile = useMediaLayout({ maxWidth: "1024px" });

  return (
    <Wrapper>
      <Content>
        <Image src={isMobile ? content.imageMobile : content.image} />
        <TextWrapper>
          <Text>{content.text.title}</Text>
          <TextSmall>{content.text.type}</TextSmall>
          <TextSmall>{content.text.description}</TextSmall>
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

//padding: 0 ${xMarginMobile};

const Content = styled.div`
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;

    min-width: ${contentWidth};
    max-width: ${contentWidth};
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  padding: ${paddingSmall};
  position: absolute;
  left: 0;
  top: 0;
  color: ${colors.white};
  @media ${device.laptop} {
    max-width: 50%;
    height: 100%;
    padding: 0 ${paddingMedium};
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: left;

  @media ${device.laptop} {
    font-size: 40px;
  }
`;

const TextSmall = styled.div`
  text-align: left;
  margin-top: 20px;

  &:not(:last-child) {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    opacity: 0.7;
    font-weight: 600;
  }
`;

export default ProjectCover;
