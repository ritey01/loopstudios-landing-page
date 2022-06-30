import styled from "styled-components";
import { NavLink } from "react-router-dom";
import earth from "../images/mobile/image-deep-earth.jpg";
import earthDesk from "../images/desktop/image-deep-earth.jpg";
import arcade from "../images/mobile/image-night-arcade.jpg";
import arcadeDesk from "../images/desktop/image-night-arcade.jpg";
import soccer from "../images/mobile/image-soccer-team.jpg";
import soccerDesk from "../images/desktop/image-soccer-team.jpg";
import grid from "../images/mobile/image-grid.jpg";
import gridDesk from "../images/desktop/image-grid.jpg";
import above from "../images/mobile/image-from-above.jpg";
import aboveDesk from "../images/desktop/image-from-above.jpg";
import pocket from "../images/mobile/image-pocket-borealis.jpg";
import pocketDesk from "../images/desktop/image-pocket-borealis.jpg";
import curiosity from "../images/mobile/image-curiosity.jpg";
import curiosityDesk from "../images/desktop/image-curiosity.jpg";
import fisheye from "../images/mobile/image-fisheye.jpg";
import fisheyeDesk from "../images/desktop/image-fisheye.jpg";

const StyledCreations = styled.div`
  position: relative;
  margin-top: 8rem;
  @media (min-width: 1400px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;
const StyledTitle = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  margin: 3rem auto 2rem auto;
  font-size: 1.5rem;
  font-weight: 300;
  @media (min-width: 1400px) {
    font-size: 2rem;
    text-align: start;
    margin-left: 6rem;
    position: relative;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto 5rem;
  }
`;

const ItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 15%;
  left: 5%;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;
  max-width: 49%;
  @media (min-width: 1400px) {
    left: 2rem;
    bottom: 2rem;
  }
`;

const Item = styled.li`
  height: 7rem;
  width: 85%;
  margin: 0 auto 2rem auto;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  max-width: 670px;
  @media (min-width: 1400px) {
    height: 25rem;

    &:hover::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(255, 255, 255, 0.25);
    }
    &:hover {
      a {
        color: black;
      }
    }
  }
`;

const EarthLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${earth});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${earthDesk});
  }
`;

const ArcadeLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${arcade});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${arcadeDesk});
  }
`;
const SoccerLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${soccer});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${soccerDesk});
  }
`;

const GridLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${grid});
  word-spacing: 8rem;
  @media (min-width: 600px) {
    word-spacing: 0.3rem;
  }
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${gridDesk});
    word-spacing: 8rem;
  }
`;

const AboveLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${above});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${aboveDesk});
  }
`;

const PocketLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${pocket});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${pocketDesk});
  }
`;

const CuriosityLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${curiosity});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${curiosityDesk});
  }
`;

const FisheyeLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${fisheye});
  @media (min-width: 1400px) {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
      url(${fisheyeDesk});
  }
`;

const BottomLink = styled(NavLink)`
  border: solid 2px black;
  text-decoration: none;
  color: black;
  padding: 0.6rem 2.2rem;
  letter-spacing: 0.3rem;
  margin: 0 auto 4rem auto;
  font-weight: 400;
  font-family: "Alata", sans-serif;

  &:hover {
    background-color: black;
    color: white;
  }
  @media (min-width: 1400px) {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 6rem;
    padding: 0.3rem 2rem;
  }
`;
const Creations = () => {
  return (
    <>
      <StyledCreations>
        <StyledTitle>OUR CREATIONS</StyledTitle>
        <StyledList>
          <StyledCards>
            <EarthLink>
              <ItemLink to="/products/deep-earth">DEEP EARTH</ItemLink>
            </EarthLink>
            <ArcadeLink>
              <ItemLink to="/products/night-arcade">NIGHT ARCADE</ItemLink>
            </ArcadeLink>
            <SoccerLink>
              <ItemLink to="/products/soccer-teamVR">SOCCER TEAM VR</ItemLink>
            </SoccerLink>
            <GridLink>
              <ItemLink to="/products/the-grid">THE GRID</ItemLink>
            </GridLink>
            <AboveLink>
              <ItemLink to="/products/up-above">FROM UP ABOVE VR</ItemLink>
            </AboveLink>
            <PocketLink>
              <ItemLink to="/products/pocket-borealis">
                POCKET BOREALIS
              </ItemLink>
            </PocketLink>
            <CuriosityLink>
              <ItemLink to="/products/curiosity">THE CURIOSITY</ItemLink>
            </CuriosityLink>
            <FisheyeLink>
              <ItemLink to="/products/fisheye">MAKE IT FISHEYE</ItemLink>
            </FisheyeLink>
            <BottomLink to="/products">SEE ALL</BottomLink>
          </StyledCards>
        </StyledList>
      </StyledCreations>
    </>
  );
};

export default Creations;
