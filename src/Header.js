import styled from "styled-components";
import Navbar from "./components/Navbar";
import heroImg from "./images/mobile/image-hero.jpg";
import theme from "./themes/theme";
import { useState } from "react";

const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 2rem;
`;
const StyledHeader = styled.header`
  height: 32.2rem;
  background-image: linear-gradient(rgba(0, 0, 0, -0.6), rgba(0, 0, 0, -0.6)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 2rem;
  z-index: 1000;
`;
const MobileNav = styled.div`
  background-color: black;
  height: 100vh;
`;
const HeaderTitle = styled.h1`
  position: absolute;
  top: 20%;
  color: ${(props) => theme.colors.white};
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  border: 2px solid ${(props) => theme.colors.white};
  width: 90%;
  padding: 0.9rem;
  margin: 0 auto;
  word-spacing: 44rem;
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
    //
    //   <StyledNav>
    //     <ContainerHeader>
    //       <Navbar click={click} handleClick={handleClick} />
    //     </ContainerHeader>
    //   </StyledNav>
    //   {!click && (
    //     <HeaderTitle>
    //       IMMERSIVE EXPERIENCES <span>THAT</span> DELIVER
    //     </HeaderTitle>
    //   )}
    // </StyledHeader>
  );
};
export default Header;
