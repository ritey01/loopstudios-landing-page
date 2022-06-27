import manVr from "../images/desktop/image-interactive.jpg";
import styled from "styled-components";
import theme from "../themes/theme";

const BannerImg = styled.img`
  height: auto;

  max-width: 85%;
`;

const StyledBanner = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const StyledH2 = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  margin-top: 2rem;
`;

const StyledPara = styled.p`
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 15px;
  font-weight: 300;
  max-width: 70%;

  margin: 0 auto;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <BannerImg src={manVr} alt="Man in Vr Googles" />
      <StyledH2>THE LEADER IN INTERACTIVE VR</StyledH2>
      <StyledPara>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </StyledPara>
    </StyledBanner>
  );
};

export default Banner;
