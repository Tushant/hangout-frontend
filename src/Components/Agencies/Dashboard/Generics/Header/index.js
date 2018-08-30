import React from 'react';
import { DashboardHeader, Logo, Toolbar, Button, LogoutText } from './styled';


const Header = () => (
  <DashboardHeader>
    <Logo>
      <h1>Hikers Nepal</h1>
    </Logo>
    <Toolbar>
      <Button>New Campaign</Button>
      <LogoutText>
        Log Out
      </LogoutText>
    </Toolbar>
  </DashboardHeader>
)

export default Header;
