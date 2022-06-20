import logo from "./images/logo.svg";
import headerImg from "./images/desktop/image-hero.jpg";
import styled from "styled-components";

const StyledHeaderImg = styled.img`
  width: 100%;
`;

const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;
const StyledHeader = styled.div``;

const StyledLogo = styled.img``;

const StyledNav = styled.nav`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  background-color: green;
`;

const RightLinks = styled.ul`
  list-style: none;
  display: flex;
`;
const NavItems = styled.li`
  text-decoration: none;
  margin-left: 1rem;
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderImg src={headerImg} alt="Person playing with VR googles" />
      <StyledNav>
        <ContainerHeader>
          <a href="#Home">
            <StyledLogo src={logo} alt="loopstudios logo" />
          </a>

          <RightLinks>
            <NavItems>
              <a href="#About">About</a>
            </NavItems>
            <NavItems>
              <a href="#Careers">Careers</a>
            </NavItems>
            <NavItems>
              <a href="#Events">Events</a>
            </NavItems>
            <NavItems>
              <a href="#Products">Products</a>
            </NavItems>
            <NavItems>
              <a href="#Support">Support</a>
            </NavItems>
          </RightLinks>
        </ContainerHeader>
      </StyledNav>
    </StyledHeader>
  );
};
export default Header;
