import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = (props: any) => {
  const navItemsList: Array<any> = [
    { name: "Home", icon: "/images/home-icon.svg", link: "/home" },
    { name: "Search", icon: "/images/search-icon.svg", link: "/search" },
    {
      name: "WatchList",
      icon: "/images/watchlist-icon.svg",
      link: "/watchlist",
    },
    { name: "Originals", icon: "/images/original-icon.svg", link: "/original" },
    { name: "Movies", icon: "/images/movie-icon.svg", link: "/movies" },
    { name: "Series", icon: "/images/series-icon.svg", link: "/series" },
  ];
  return (
    <div>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="" />
        </Logo>
        <NavMenu>
          {navItemsList.map((el) => (
            <NavItem href={el.link}>
              <img src={el.icon} alt="" />
              <span>{el.name}</span>
            </NavItem>
          ))}
        </NavMenu>
        <Login>Login</Login>
      </Nav>
      <Outlet />
    </div>
  );
};

const Login = styled.a`
  margin-left: auto;
  background-color: black;
  border: 1px solid white;
  border-radius: 5px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: all 500ms;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw-40vw);
  vertical-align: middle;

  flex-wrap: nowrap;
  gap: 1.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  img {
    width: 2rem;
    min-width: 1.5rem;
  }
  &:hover {
    border-bottom: 1px solid white;
  }
`;
const Logo = styled.a`
  width: 100px;
  max-width: 100px;
  min-width: 100px;
  margin-top: 4px;
  max-height: 70px;
  vertical-align: middle;
`;
const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: black;
  display: flex;
  letter-spacing: 0.2rem;
  gap: 1rem;
  /* justify-content: space-between; */
  align-items: center;
  padding: 1.5rem 1rem;
`;

export default Header;
