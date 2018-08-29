import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'

import Login from 'Components/Accounts/Login';
import { Wrapper } from './styled';

const App = () => (
  <Wrapper>
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
    </Switch>
  </Wrapper>
)

export default withRouter(App);
