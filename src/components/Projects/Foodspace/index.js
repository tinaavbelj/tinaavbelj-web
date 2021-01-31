import React from "react";
import styled from "styled-components";

import {
  device,
  paddingMedium,
  paddingSmallMedium,
  paddingSmall,
} from "../../../constants/variables";

import ImageShadow from "../../shared/ImageShadow";
import Title from "../../shared/Title";
import { TitleUppercase } from "../../shared/Title";
import TextBig from "../shared/TextBig";
import ProjectPanel from "../shared/ProjectPanel";

import uiSplashscreen from "../../../images/foodspace/foodspace-ui-splashscreen.png";
import uiDiscover from "../../../images/foodspace/foodspace-ui-discover.png";
import uiInvite from "../../../images/foodspace/foodspace-ui-invite.png";
import uiItem from "../../../images/foodspace/foodspace-ui-item.png";
import uiOrder from "../../../images/foodspace/foodspace-ui-order.png";
import uiOrders from "../../../images/foodspace/foodspace-ui-orders.png";
import uiCart from "../../../images/foodspace/foodspace-ui-cart.png";

const Foodspace = () => {
  return (
    <div>
      <ProjectPanel>
        <TextBig>
          UI for the Foodspace mobile app was created as a part of an
          exploration of a business idea. Foodspace app enables users to buy
          surplus food for discount prices and restaurants, grocery stores,
          bakeries and cafes to sell their surplus food. The results is less
          food waste.
        </TextBig>
      </ProjectPanel>
      <ProjectPanel>
        <Title marginSmall>Background</Title>
        The amount of food waste is huge. One third of all produced food is
        wasted. In Slovenia alone there is around 130 000 tons of food waste
        every year. 19% of all food waste in Slovenia comes from facilities that
        serve food like restaurants and almost 10% comes from grocery stores.
        38% of all the wasted food is still edible. This is the waste Foodspace
        is reducing.
      </ProjectPanel>
      <ProjectPanel>
        <Title marginSmall>How it works</Title>
        <ItemsWrapper>
          <Item>
            <Number>1.</Number>Business owners upload their surplus food
          </Item>
          <Item>
            <Number>2.</Number>Users buy food in the mobile app at a discount
            price
          </Item>
          <Item>
            <Number>3.</Number>Users pick up the food or eat there
          </Item>
        </ItemsWrapper>
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Mobile app</Title>
        <UiItem>
          <Image src={uiSplashscreen} />
          <TextRight>
            <TitleUppercase>Splashscreen</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextRight>
        </UiItem>
        <UiItemRight>
          <TextLeft>
            <TitleUppercase>Choose items</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextLeft>
          <Image src={uiDiscover} />
        </UiItemRight>
        <UiItem>
          <Image src={uiItem} />
          <TextRight>
            <TitleUppercase>Item details</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextRight>
        </UiItem>
        <UiItemRight>
          <TextLeft>
            <TitleUppercase>Cart</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextLeft>
          <Image src={uiCart} />
        </UiItemRight>
        <UiItem>
          <Image src={uiOrders} />
          <TextRight>
            <TitleUppercase>All orders</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextRight>
        </UiItem>
        <UiItemRight>
          <TextLeft>
            <TitleUppercase>Order</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextLeft>
          <Image src={uiOrder} />
        </UiItemRight>
        <UiItem>
          <Image src={uiInvite} />
          <TextRight>
            <TitleUppercase>Invite friends</TitleUppercase>
            <Text>
              This is the landing page for the customers (restaurants, grocery
              stores
            </Text>
          </TextRight>
        </UiItem>
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Landing page</Title>
        <div>
          This is the landing page for the customers (restaurants, grocery
          stores, bakeries and cafès) with a signup form for collecting contacts
          from interested bussineses.
        </div>
        <LandingPageImage src={uiDiscover} />
      </ProjectPanel>
    </div>
  );
};

const Image = styled(ImageShadow)`
  width: 100%;
  max-width: 300px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Item = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }

  @media ${device.laptop} {
    margin-top: 0;
    max-width: 280px;

    &:not(:first-child) {
      margin-top: 0;
    }
  }
`;

const Number = styled.div`
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 24px;
`;

const UiItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  &:not(:first-child) {
    margin-top: ${paddingMedium};
  }

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const UiItemRight = styled(UiItem)`
  justify-content: flex-end;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const TextRight = styled.div`
  width: 100%;
  margin-bottom: ${paddingSmallMedium};
  @media ${device.laptop} {
    width: 280px;
    margin-left: ${paddingSmallMedium};
    margin-bottom: 0;
  }
`;

const TextLeft = styled.div`
  width: 100%;
  margin-bottom: ${paddingSmallMedium};
  @media ${device.laptop} {
    width: 280px;
    margin-bottom: 0;
    margin-right: ${paddingSmallMedium};
  }
`;

const Text = styled.div`
  margin-top: ${paddingSmall};
`;

const LandingPageImage = styled(ImageShadow)`
  margin-top: ${paddingMedium};
  width: 100%;
`;

export default Foodspace;
