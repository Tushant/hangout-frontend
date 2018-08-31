import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Generics/Header';
import Sidebar from './Generics/Sidebar';
import Home from './Home'
import Campaign from './Campaign'
import NewCampaign from './Campaign/NewCampaign'
import Sales from './Sales'
import { DashboardContainer, Main } from './styled';


class Dashboard extends React.Component {
  render() {
    return (
      <DashboardContainer>
        <Header />
        <Sidebar items={this.props.items} />
        <Main className="admin__main">
          <Switch>
            <Route exact path="/agency" component={Home} />
            <Route path="/agency/dashboard" component={Home} />
            <Route path="/agency/campaign" component={Campaign} />
            <Route path="/agency/new-campaign" component={NewCampaign} />
            <Route path="/agency/sales" component={Sales} />
          </Switch>
        </Main>
      </DashboardContainer>
    );
  }
}

export default Dashboard;
