import logo from "./images/logo.svg";
import headerImg from "./images/desktop/image-hero.jpg";
import styled from "styled-components";
import { useState } from "react";
import theme from "./themes/theme";

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

const MenuLabel = styled.label`
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) =>
    props.clicked ? "transparent" : "hsl(0, 0%, 100%)"};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: hsl(0, 0%, 100%);
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
// const RightLinks = styled.ul`
//   list-style: none;
//   display: flex;
// `;
// const NavItems = styled.li`
//   text-decoration: none;
//   margin-left: 1rem;
// `;
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <StyledHeader>
      <StyledHeaderImg src={headerImg} alt="Person playing with VR googles" />
      <StyledNav>
        <ContainerHeader>
          <a href="#Home">
            <StyledLogo src={logo} alt="loopstudios logo" />
          </a>
          <MenuLabel htmlfor="navi-toggle" onClick={handleClick}>
            <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
        </ContainerHeader>
      </StyledNav>
    </StyledHeader>
  );
};
export default Header;
{
  /* <RightLinks>
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
</RightLinks> */
}
