import React from 'react';

import { Caption, FormField, Spacer } from 'Components/Generics/styled';
import { Form } from './styled';

const CampaignForm = () => (
  <React.Fragment>
    <Form>
      <Caption>Create a New Campaign</Caption>
      <Spacer space={"20px"} />
      <FormField>
        <input type="text" className="form-input" placeholder="Name of Campaign" required />
      </FormField>
      <FormField>
        <input type="text" className="form-input" placeholder="Description" required />
      </FormField>
      <FormField>
        <input type="text" className="form-input" placeholder="Notes" required />
      </FormField>
      <FormField>
        <input type="text" className="form-input" placeholder="Location" required />
      </FormField>
      <FormField>
        <input type="text" className="form-input" placeholder="Pickup Location" required />
      </FormField>
    </Form>
  </React.Fragment>
)

export default CampaignForm;
