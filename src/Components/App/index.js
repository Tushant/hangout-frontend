import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'

import Login from 'Components/Accounts/Login';
import Signup from 'Components/Accounts/Signup';
import { Wrapper } from './styled';

const App = () => (
  <Wrapper>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Wrapper>
)

export default withRouter(App);
