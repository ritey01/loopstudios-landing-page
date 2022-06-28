import styled from "styled-components";
import { NavLink } from "react-router-dom";
import earth from "../images/mobile/image-deep-earth.jpg";
import arcade from "../images/mobile/image-night-arcade.jpg";
import soccer from "../images/mobile/image-soccer-team.jpg";
import grid from "../images/mobile/image-grid.jpg";
import above from "../images/mobile/image-from-above.jpg";
import pocket from "../images/mobile/image-pocket-borealis.jpg";
import curiosity from "../images/mobile/image-curiosity.jpg";
import fisheye from "../images/mobile/image-fisheye.jpg";
import theme from "../themes/theme";

const StyledTitle = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  margin: 3rem auto 2rem auto;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

const Item = styled.li`
  height: 6.7rem;
  width: 85%;
  margin: 0 auto 2rem auto;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const EarthLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${earth});
`;

const ArcadeLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${arcade});
`;
const SoccerLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${soccer});
`;

const GridLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${grid});
  word-spacing: 2rem;
`;

const AboveLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${above});
`;

const PocketLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${pocket});
`;

const CuriosityLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${curiosity});
`;

const FisheyeLink = styled(Item)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url(${fisheye});
`;

const BottomLink = styled(NavLink)`
  border: solid 2px black;
  text-decoration: none;
  color: black;
  padding: 1rem 2.2rem;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;
`;
const Creations = () => {
  return (
    <>
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
            <ItemLink to="/products/pocket-borealis">POCKET BOREALIS</ItemLink>
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
    </>
  );
};

export default Creations;
