import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledTitle = styled.h3``;
const StyledList = styled.ul`
  list-style: none;
`;
const ItemLink = styled(NavLink)``;

const EarthLink = styled(ItemLink)`
  background-image: url(/images/desktop/image-deep-earth.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const ArcadeLink = styled(ItemLink)`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent),
    url("/images/mobile/image-night-arcade.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Creations = () => {
  return (
    <>
      <StyledTitle>OUR CREATIONS</StyledTitle>
      <StyledList>
        <li>
          <EarthLink to="/products/deep-earth">DEEP EARTH</EarthLink>
        </li>
        <li>
          <ArcadeLink to="/products/night-arcade">NIGHT ARCADE</ArcadeLink>
        </li>
        <li>
          <ItemLink to="/products/soccer-teamVR">SOCCER TEAM VR</ItemLink>
        </li>
        <li>
          <ItemLink to="/products/the-grid">THE GRID</ItemLink>
        </li>
        <li>
          <ItemLink to="/products/up-above">FROM UP ABOVE VR</ItemLink>
        </li>
        <li>
          <ItemLink to="/products/pocket-borealis">POCKET BOREALIS</ItemLink>
        </li>
        <li>
          <ItemLink to="/products/curiosity">THE CURIOSITY</ItemLink>
        </li>
        <li>
          <ItemLink to="/products/fisheye">MAKE IT FISHEYE</ItemLink>
        </li>
      </StyledList>
    </>
  );
};

export default Creations;
