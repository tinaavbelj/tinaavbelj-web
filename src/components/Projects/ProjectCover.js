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

const Content = styled.div`
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
    padding: 0 ${xMarginMobile};
    min-width: ${contentWidth};
    max-width: 1400px;
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
  padding: ${paddingSmall} 0;
  @media ${device.laptop} {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 50%;
    height: 100%;
    color: ${colors.white};
    padding: 0 ${paddingMedium};
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: left;
`;

const TextSmall = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  margin-top: 24px;
`;

export default ProjectCover;
