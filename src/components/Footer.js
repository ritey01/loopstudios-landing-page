import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.svg";
import FacebookIcon from "./images/icon-facebook.svg";
import TwitterIcon from "./images/icon-twitter.svg";
import PinterestIcon from "./images/icon-pinterest.svg";
import InstagramIcon from "./images/icon-instagram.svg";

const ItemLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-family: "Alata", sans-serif;
  line-height: 2.2rem;
  font-weight: 400;
  @media (min-width: 1400px) {
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const LogoImg = styled.img`
  height: 1.5rem;
  margin-top: 1rem;
`;
const StyledFooter = styled.footer`
  height: 25rem;
  background: black;
  @media (min-width: 1400px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  text-align: center;
  @media (min-width: 1400px) {
    justify-content: center;
    align-items: flex-start;
    margin-left: 6rem;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  @media (min-width: 1400px) {
    display: flex;
    flex-direction: row;
  }
`;
const ListIcon = styled(List)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0 0 0;
  margin: 0 5rem;

  a {
    padding: 1rem;
  }

  @media (min-width: 1400px) {
    position: relative;
    justify-content: flex-end;
  }
`;

const Copyright = styled.p`
  color: grey;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 15px;
  @media (min-width: 1400px) {
    position: absolute;
    left: -1.4rem;
    bottom: 0;
    white-space: nowrap;
    text-align: end;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledLinks>
        <ItemLink to="/">
          <LogoImg src={logo} alt="loopstudios logo" />
        </ItemLink>
        <List>
          <li>
            <ItemLink to="/about">About</ItemLink>
          </li>
          <li>
            <ItemLink to="/careers">Careers</ItemLink>
          </li>
          <li>
            <ItemLink to="/Events">Events</ItemLink>
          </li>
          <li>
            <ItemLink to="/Products">Products</ItemLink>
          </li>
          <li>
            <ItemLink to="/Support">Support</ItemLink>
          </li>
        </List>
      </StyledLinks>
      <ListIcon>
        <li>
          <a href="http://facebook.com">
            <img src={FacebookIcon} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="http://twitter.com">
            <img src={TwitterIcon} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="http://pinterest.com">
            <img src={PinterestIcon} alt="pinterest" />
          </a>
        </li>
        <li>
          <a href="http://instagram.com">
            <img src={InstagramIcon} alt="instagram" />
          </a>
        </li>
        <Copyright>&copy; 2021 Loopstudios. All rights reserved.</Copyright>
      </ListIcon>
    </StyledFooter>
  );
};

export default Footer;
