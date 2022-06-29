import styled from "styled-components";
import Navbar from "./components/Navbar";
import heroImg from "./images/mobile/image-hero.jpg";
import desktopImg from "./images/desktop/image-hero.jpg";

import { useState } from "react";

const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 2rem;

  @media (min-width: 1000px) {
    align-items: normal;
  }
`;
const StyledHeader = styled.header`
  height: 100vh;
  width: auto;
  background-image: linear-gradient(rgba(0, 0, 0, -0.6), rgba(0, 0, 0, -0.6)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  background-position: top center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    height: 60vh;
    background-image: linear-gradient(rgba(0, 0, 0, -0.6), rgba(0, 0, 0, -0.6)),
      url(${desktopImg});
  }
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 2rem;
  z-index: 1000;
  @media (min-width: 1000px) {
    left: 9%;
    width: 84%;
  }
`;
const MobileNav = styled.div`
  background-color: black;
  height: 100vh;
`;
const HeaderTitle = styled.h1`
  position: absolute;
  top: 11rem;
  color: ${(props) => props.theme.colors.white};
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  border: 2px solid ${(props) => props.theme.colors.white};
  max-width: 80%;
  padding: 0.9rem;
  margin: 0 auto;
  word-spacing: 44rem;
  @media (min-width: 600px) {
    width: 480px;
  }

  @media (min-width: 1000px) {
    left: 9%;
    font-size: 4rem;
    padding: 2.1rem 1rem 2rem 1.5rem;
    word-spacing: 0;
    width: 50%;
    top: 12rem;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      {!click ? (
        <StyledHeader>
          <StyledNav>
            <ContainerHeader>
              <Navbar click={click} handleClick={handleClick} />
            </ContainerHeader>
          </StyledNav>
          <HeaderTitle>
            IMMERSIVE EXPERIENCES <span>THAT</span> DELIVER
          </HeaderTitle>
        </StyledHeader>
      ) : (
        <MobileNav>
          <StyledNav>
            <ContainerHeader>
              <Navbar click={click} handleClick={handleClick} />
            </ContainerHeader>
          </StyledNav>
        </MobileNav>
      )}
    </>
  );
};
export default Header;
