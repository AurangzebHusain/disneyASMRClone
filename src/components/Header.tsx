import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = (props: any) => {
  const navItemsList: Array<any> = [
    { name: "Home", icon: "/images/home-icon.svg" },
    { name: "Search", icon: "/images/search-icon.svg" },
    { name: "WatchList", icon: "/images/watchlist-icon.svg" },
    { name: "Originals", icon: "/images/original-icon.svg" },
    { name: "Movies", icon: "/images/movie-icon.svg" },
    { name: "Series", icon: "/images/series-icon.svg" },
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
              {el.name}
            </NavItem>
          ))}
        </NavMenu>
      </Nav>
      <Outlet />
    </div>
  );
};

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw-40vw);

  flex-wrap: nowrap;
  gap: 1.2rem;

  img {
    width: 2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
const Logo = styled.a`
  width: 100px;
  margin-top: 4px;
  max-height: 70px;
`;
const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: black;
  display: flex;
  /* letter-spacing: 1rem; */
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
`;

export default Header;