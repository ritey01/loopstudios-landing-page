import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { useState, useEffect } from "react";

const StyledLogo = styled.img`
  height: 1.2rem;
`;

const ItemLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  display: block;
  height: 2rem;
  font-family: "Josefin Sans", sans-serif;

  @media (min-width: 1000px) {
    margin: 0.5rem;
    text-transform: capitalize;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0.7rem;
      width: 0;
      height: 2px;
      background-color: white;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover::after {
      width: 60%;
      opacity: 1;
    }
  }
`;
const LogoLink = styled(ItemLink)`
  z-index: 1000;
  height: fit-content;
`;

const MenuLabel = styled.label`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Icon = styled.span`
  position: relative;

  background-color: ${(props) =>
    props.clicked ? "transparent" : "hsl(0, 0%, 100%)"};
  width: 1.1rem;
  height: 2px;
  display: inline-block;
  font-size: 0.09rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: hsl(0, 0%, 100%);
    width: 1.1rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 3rem;
  padding-left: 0;

  padding-top: 4rem;
  background-color: ${(props) => props.theme.colors.black};

  @media (min-width: 1000px) {
    background-color: transparent;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;

    position: static;
  }
`;

const MobileNav = ({ handleClick, click }) => {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <>
      <LogoLink to="/">
        <StyledLogo src={logo} alt="loopstudios logo" />
      </LogoLink>
      <MenuLabel htmlfor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}></Icon>
      </MenuLabel>
      {(click || width >= 1000) && (
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
      )}
    </>
  );
};

export default MobileNav;
