import logo from "./images/logo.svg";
import headerImg from "./images/desktop/image-hero.jpg";
import styled from "styled-components";

const StyledHeaderImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledHeader = styled.div`
  position: relative;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 1rem;
  left: 4rem;
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderImg src={logo} alt="loopstudios logo" />
      <StyledLogo src={headerImg} alt="Person playing with VR googles" />
    </StyledHeader>
  );
};
export default Header;
