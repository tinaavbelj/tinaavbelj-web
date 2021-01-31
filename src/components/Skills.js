import React from "react";
import styled from "styled-components";

import {
  device,
  contentWidth,
  paddingLarge,
  paddingMedium,
  xMarginMobile,
} from "../constants/variables";

import Title from "./shared/Title";

const Skills = () => (
  <section id="what-i-do">
    <Wrapper>
      <Content>
        <Title>What I do</Title>
        <Items>
          <Item>
            <ItemIcon
              src={require("../images/tinaavbelj-icon-react-01.svg")}
            ></ItemIcon>
            <Text>React</Text>
          </Item>
          <Item>
            <ItemIcon
              src={require("../images/tinaavbelj-icon-react-native-01.svg")}
            ></ItemIcon>
            <Text>React Native</Text>
          </Item>
          <Item>
            <ItemIcon
              src={require("../images/tinaavbelj-icon-design-01.svg")}
            ></ItemIcon>
            <Text>UI Design</Text>
          </Item>
        </Items>
      </Content>
    </Wrapper>
  </section>
);

const Wrapper = styled.div`
  width: 100%;
  padding: ${paddingMedium} 0 ${paddingLarge} 0;
`;

const Content = styled.div`
  max-width: ${contentWidth};
  margin: 0 ${xMarginMobile};
  @media ${device.laptop} {
    margin: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 70px;

    @media ${device.laptop} {
      margin-bottom: 0;
    }
  }
`;

const ItemIcon = styled.img`
  width: 120px;
`;

const Text = styled.div`
  margin-top: 16px;
  font-weight: 500;
  text-align: center;
`;

export default Skills;
