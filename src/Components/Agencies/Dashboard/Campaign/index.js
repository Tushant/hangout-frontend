import React from 'react';
import { Wrapper, DashboardItem, Card } from '../styled';

class Campagin extends React.Component {
  render() {
    return (
      <Wrapper>
        <DashboardItem className="half-grid">
          <Card>Hiking - Kathmandu to Kakani</Card>
        </DashboardItem>
        <DashboardItem className="half-grid">
          <Card>Hiking - Chitwan</Card>
        </DashboardItem>
        <DashboardItem className="half-grid">
          <Card>Hiking - Illam to Kanyam</Card>
        </DashboardItem>
        <DashboardItem className="half-grid">
          <Card>Hiking - Kathmandu to Solukhumbu</Card>
        </DashboardItem>
      </Wrapper>
    );
  }
}

export default Campagin;
