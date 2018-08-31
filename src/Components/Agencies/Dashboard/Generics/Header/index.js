import React from 'react';
import { DashboardHeader, Logo, Toolbar, ButtonLink, LogoutText } from './styled';


const Header = () => (
  <DashboardHeader>
    <Logo>
      <h1>Hikers Nepal</h1>
    </Logo>
    <Toolbar>
      <ButtonLink to="/agency/new-campaign">New Campaign</ButtonLink>
      <LogoutText>
        Log Out
      </LogoutText>
    </Toolbar>
  </DashboardHeader>
)

export default Header;
