import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'

import Login from 'Components/Accounts/Login';
import Signup from 'Components/Accounts/Signup';
import Profile from 'Components/Accounts/Profile';
import Agency from 'Components/Agencies';
import { Wrapper } from './styled';

const App = () => (
  <Wrapper>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/agency" component={Agency} />
    </Switch>
  </Wrapper>
)

export default withRouter(App);
