import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, device } from "../constants/variables";

const ProjectItem = ({ title, type, text, imageSource, link, className }) => {
  return (
    <BoxShadow className={className}>
      <Link to={link}>
        <ImageWrapper>
          <Image src={imageSource} alt="cover" />
        </ImageWrapper>
        <InformationWrapper>
          <div>
            <Title>{title}</Title>
            <Type>{type}</Type>
            <Text>{text}</Text>
          </div>
          <IconWrapper>
            <IconArrow src={require("../images/arrow-right.svg")} alt="arrow" />
          </IconWrapper>
        </InformationWrapper>
      </Link>
    </BoxShadow>
  );
};

const IconArrow = styled.img`
  transition: 0.2s ease-out;
`;

const BoxShadow = styled.div`
  width: 100%;
  height: 100%;
  max-width: 450px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 5px 5px 18px rgb(27, 5, 107, 0.1);
  transition: box-shadow 0.2s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 18px rgb(27, 5, 107, 0.18);

    ${IconArrow} {
      transform: translateX(6px);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    width: 450px;
  }
`;

const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  object-fit: cover;
`;

const InformationWrapper = styled.div`
  color: ${colors.text};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  min-height: 190px;
`;

const Title = styled.div`
  margin-bottom: 0.75rem;
  font-size: 24px;
  font-weight: 600;
`;

const Type = styled.div`
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 700;
`;

const Text = styled.div`
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  padding-right: 6px;
  display: flex;
  justify-content: flex-end;
`;

export default ProjectItem;
