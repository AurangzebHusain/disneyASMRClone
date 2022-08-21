import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { signInWithGooglePopup } from "../utils/firebase/firebase.utils.js";
import { login, logout } from "../store/loginSlice.js";
import { useDispatch } from "react-redux";
import { User, UserCredential } from "firebase/auth";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//Example of lazy loading
const NavMenuComponent = React.lazy(() => import("./NavMenu.js"));

//Example of eager loading
function loadNavMenuComponent() {
  import("./NavMenu.js");
}
const Header = (props: any) => {
  const dispatch = useDispatch();
  const loggedInUser: { currentUser?: User | null } = useSelector(
    (state: { login: any }) => state.login
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [isMenuOpened, setisMenuOpened] = useState(false);

  useEffect(() => {
    console.log(loggedInUser.currentUser);

    console.log(loggedInUser.currentUser?.photoURL);
  }, [loggedInUser]);

  const logGoogleUser = async () => {
    loadNavMenuComponent();
    const response: UserCredential = await signInWithGooglePopup();
    let user = response.user;

    dispatch(login(JSON.stringify(user)));
    // await createUserDocumentFromAuth(response.user);
  };

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
    setisMenuOpened((val) => !val);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setisMenuOpened((val) => false);
  };
  const logOut = () => {
    dispatch(logout());
    handleClose();
  };
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
        <React.Suspense fallback={<div>Loading NavMenu</div>}>
          {loggedInUser.currentUser != null && (
            <>
              <NavMenuComponent navItemsList={navItemsList} />
            </>
          )}
        </React.Suspense>

        {loggedInUser.currentUser != null ? (
          <>
            <div>
              <div
                id="basic-button"
                aria-controls={isMenuOpened ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpened ? "true" : undefined}
                onClick={handleClick}
              >
                <UserImage
                  src={loggedInUser.currentUser?.photoURL ?? ""}
                ></UserImage>
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isMenuOpened}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
              </Menu>
            </div>
            {/* <Login onClick={() => dispatch(logout())}>Logout</Login> */}
          </>
        ) : (
          <Login onClick={logGoogleUser}>Login</Login>
        )}
      </Nav>
      <Outlet />
    </div>
  );
};
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
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
