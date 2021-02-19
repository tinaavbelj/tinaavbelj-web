import React, { useEffect } from "react";
import styled from "styled-components";

import { device, paddingMedium } from "../../../constants/variables";

import ImageShadow from "../../shared/ImageShadow";
import Title from "../../shared/Title";
import TextBig from "../shared/TextBig";
import ProjectPanel from "../shared/ProjectPanel";

import uiHome from "../../../images/shelters/shelters_home.png";
import uiDonations from "../../../images/shelters/shelters_donations.png";
import mobileUi1 from "../../../images/shelters/shelters_portfolio_mobile-1.png";
import mobileUi2 from "../../../images/shelters/shelters_portfolio_mobile-2.png";
import mobileUi3 from "../../../images/shelters/shelters_portfolio_mobile-3.png";
import mobileUi4 from "../../../images/shelters/shelters_portfolio_mobile-4.png";
import mobileUi5 from "../../../images/shelters/shelters_portfolio_mobile-5.png";
import mobileUi6 from "../../../images/shelters/shelters_portfolio_mobile-6.png";

const Shelters = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    html.scrollTop = 0;
  });

  return (
    <div>
      <ProjectPanel>
        <TextBig>
          This is a concept for a platform that contains information form all
          animal shelters in Slovenia. It has a database of all lost and found
          animals and an option to find animals available for adoption and
          filter them based on various criteria. There is an option to make
          donations.
        </TextBig>
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Background</Title>
        Searching for animals to adopt can be a difficult task. First, you have
        to find all animal shelters. Some are easy to find, but many aren't.
        Some places where you can adopt animals from are also not called
        "shelters" so it is even more difficult to find them. For example, if
        you want to find a female puppy that will eventually grow into a
        large-sized dog, you have to find all the shelters and look for adoption
        pages on each site. They mostly don't have an option to filter the
        animals, so you have to click on each dog to see the details about it.
        This is a problem this platform is solving. Besides, it also enables
        reporting a lost pet into a country-wide database and has instructions
        for what to do in case of finding a lost animal. The platform also
        enables users to make monthly or one time donations.
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Things you can do on the platform</Title>
        <ItemsWrapper>
          <Item>
            <Number>1.</Number>Find your future pet that is available for
            adoption
          </Item>
          <Item>
            <Number>2.</Number>Report a lost or found pet and browse a database
            of lost and found pets
          </Item>
          <Item>
            <Number>3.</Number>Make monthly or one time donations
          </Item>
        </ItemsWrapper>
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Home</Title>
        <div>
          The home page contains the latest from all sections of the page.
        </div>
        <PageUIImage src={uiHome} />
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Donations</Title>
        <div>
          An important part of the platform is donations. Users can make monthly
          donations or make a one time donation. They can choose to donate to a
          shelter or for a specific animal. If they want they can also get email
          updates on how their donation has helped.
        </div>
        <PageUIImage src={uiDonations} />
      </ProjectPanel>

      <ProjectPanel>
        <Title marginSmall>Mobile UI</Title>
        <div>Some screens from the mobile version of the platform.</div>
        <MobileUiItems>
          <Image src={mobileUi1} />
          <Image src={mobileUi2} />
          <Image src={mobileUi3} />
          <Image src={mobileUi4} />
          <Image src={mobileUi5} />
          <Image src={mobileUi6} />
        </MobileUiItems>
      </ProjectPanel>
    </div>
  );
};

const Image = styled(ImageShadow)`
  width: 100%;
  max-width: 300px;
  height: 100%;
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

const MobileUiItems = styled.div`
  margin-top: 72px;

  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const PageUIImage = styled(ImageShadow)`
  margin-top: ${paddingMedium};
  width: 100%;
`;

export default Shelters;
