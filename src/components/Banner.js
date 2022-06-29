import manVr from "../images/desktop/image-interactive.jpg";
import desktopInteract from "../images/desktop/image-interactive.jpg";
import styled from "styled-components";

const MobileImg = styled.img`
  height: auto;
  max-width: 85%;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const DesktopImg = styled.img`
  height: auto;
  display: none;

  @media (min-width: 1000px) {
    display: block;
    margin-left: 6rem;
  }
`;

const StyledBanner = styled.div`
  text-align: center;
  margin-top: 4rem;
  position: relative;
`;

const StyledH2 = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-left: 4rem;
    max-width: 60%;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

const StyledPara = styled.p`
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 15px;
  font-weight: 300;
  width: 70%;
  max-width: 670px;

  margin: 0 auto;
`;

const StyledDesktop = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    bottom: 0;
    right: 12%;
    background-color: white;
    max-width: 41%;
    text-align: start;
    padding: 6rem 0 0.3rem 1rem;
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <MobileImg src={manVr} alt="Man in Vr Googles" />
      <DesktopImg src={desktopInteract} alt="Man in Vr Googles" />
      <StyledDesktop>
        <StyledH2>
          THE LEADER IN <span>INTERACTIVE VR</span>
        </StyledH2>
        <StyledPara>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </StyledPara>
      </StyledDesktop>
    </StyledBanner>
  );
};

export default Banner;
