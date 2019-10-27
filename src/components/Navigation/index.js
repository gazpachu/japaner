import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import { AppHeader, AppHeaderLink, Title } from "./styles";
import { Nav, NavItem } from "../../common/common.styles";

const Navigation = () => (
  <AppHeader>
    <AppHeaderLink to={ROUTES.LANDING}>
      <Title>KanaWheel</Title>
    </AppHeaderLink>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </AppHeader>
);

const NavigationAuth = ({ authUser }) => (
  <Nav>
    <NavItem>
      <Link to={ROUTES.HOME}>Home</Link>
    </NavItem>
    <NavItem>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </NavItem>
    {!!authUser.roles[ROLES.ADMIN] && (
      <NavItem>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </NavItem>
    )}
    <NavItem>
      <SignOutButton />
    </NavItem>
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav>
    <NavItem>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </NavItem>
  </Nav>
);

export default Navigation;
