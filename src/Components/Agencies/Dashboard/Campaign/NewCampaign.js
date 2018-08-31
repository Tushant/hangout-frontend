import React from 'react';

import { Card } from 'Components/Generics/styled';
import CampaignForm from './CampaignForm';
import { Wrapper, DashboardContainer } from '../styled'

class NewCampaign extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CampaignForm />
        </Card>
      </React.Fragment>
    )
  }
}

export default NewCampaign;
