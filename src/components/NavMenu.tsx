import React from "react";
import styled from "styled-components";
const NavMenuComponent = ({ navItemsList }: { navItemsList: Array<any> }) => {
  return (
    <NavMenu>
      {navItemsList.map((el: any) => (
        <NavItem key={el.name} href={el.link}>
          <img src={el.icon} alt="" />
          <span>{el.name}</span>
        </NavItem>
      ))}
    </NavMenu>
  );
};
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
export default NavMenuComponent;
