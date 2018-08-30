import React from 'react';
import { Wrapper, Card, DashboardItem } from '../styled';


class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Dashboard</h2>
        <Wrapper>
          <DashboardItem>
            <Card>
              <strong>41</strong> Views
            </Card>
          </DashboardItem>
          <DashboardItem>
            <Card>
              <strong>81,712</strong> Sales
            </Card>
          </DashboardItem>
          <DashboardItem className="full-grid">
            <Card>We are sorry. There is Not enough data to generate graph for you.</Card>
          </DashboardItem>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Home;
