import React, { useEffect } from "react";
import styled from "styled-components";

import { device } from "../../../constants/variables";

import Button from "../../shared/Button";
import TextBig from "../shared/TextBig";
import image from "../../../images/icons-ui-04.png";
import ProjectPanel from "../shared/ProjectPanel";

const Icons = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    html.scrollTop = 0;
  });

  return (
    <div>
      <ProjectPanel>
        <TextBig>
          This is my personal project created just for fun. It's a website where
          I keep different objects I create in the form of icons, so I can later
          reuse them. I update my collection regularly. You can see the full
          collection on the website or view the project repository on Github.
        </TextBig>
      </ProjectPanel>
      <ProjectPanel>
        <LinksWrapper>
          <Link href="https://icons.lepus-arcticus.com/" target="_blank">
            <StyledButton>Website</StyledButton>
          </Link>
          <a
            href="https://github.com/tinaavbelj/lepus-arcticus-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>Github repository</StyledButton>
          </a>
        </LinksWrapper>
      </ProjectPanel>
      <ProjectPanel>Here are a few icons and the website preview.</ProjectPanel>
      <ProjectPanel>
        <Image src={image} />
      </ProjectPanel>
    </div>
  );
};

const Image = styled.img`
  width: 100%;
  -webkit-filter: drop-shadow(7px 7px 20px #d8d8d8);
  -webkit-filter: drop-shadow(7px 7px 20px #d8d8d8);
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Link = styled.a`
  margin-bottom: 20px;
  @media ${device.laptop} {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  @media ${device.laptop} {
    width: 200px;
  }
`;

export default Icons;
