import React from 'react';
import * as styled from './styled';
// import './styled.css';

class Signup extends React.Component {
  render() {
    return (
      <styled.SignupForm>
        <styled.SignupWrapper>
            <styled.Form>
              <styled.Caption>Create An Account</styled.Caption>

              <styled.FormField>
                <input type="text" className="form-input" placeholder="Full Name" required />
              </styled.FormField>

              <styled.FormField>
                <input type="text" className="form-input" placeholder="Email" required />
              </styled.FormField>

              <styled.FormField>
                <input type="password" className="form-input" placeholder="password" required />
              </styled.FormField>

              <styled.FormField>
                <input type="text" className="form-input" placeholder="Country" required />
              </styled.FormField>

              <styled.FormField>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <styled.Label>I accept the Terms of Use</styled.Label>
                </div>
              </styled.FormField>

              <styled.FormField>
                <styled.StyledButton>Sign up</styled.StyledButton>
              </styled.FormField>
            </styled.Form>
          <styled.RightBlock />
          <styled.LeftBlock />
        </styled.SignupWrapper>
      </styled.SignupForm>
    );
  }
}

export default Signup;
