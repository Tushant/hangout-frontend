import React from 'react';
import { Wrapper, Card, DashboardItem } from '../styled';

const Sales = () => (
  <Wrapper>
    <DashboardItem className="full-grid">
      <Card>
        <p style={{ 'line-height': '1.5rem'}}>
          Sales Feature is Coming Soon. We are new to the market so it takes some time to make this feature available to
          you. Meanwhile, this is just to let you know we will do our best for relevant data you need to know how it's
          going for you.
        </p>
        <p>
          Thank you for your understanding.
        </p>
      </Card>
    </DashboardItem>
  </Wrapper>
);

export default Sales;
