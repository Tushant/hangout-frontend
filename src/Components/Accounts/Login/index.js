import React from 'react';
import * as styled from './styled';

class Login extends React.Component {
  render() {
    return (
      <styled.LoginForm>
        <styled.Container>
          <styled.Caption>Sign in to your account</styled.Caption>
          <styled.LoginWrapper>
            <styled.Form action="" method="post">
              <styled.FormField>
                {/* <Label htmlFor="login-username">Username</Label> */}
                <input type="text" className="form-input" placeholder="Username" required />
              </styled.FormField>

              <styled.FormField>
                {/* <Label htmlFor="login-password">Password</Label> */}
                <input type="password" className="form-input" placeholder="Password" required />
              </styled.FormField>

              <styled.FormField>
                <input type="submit" value="Log in" />
              </styled.FormField>
            </styled.Form>
          </styled.LoginWrapper>
        </styled.Container>
        <styled.Footer>
          <styled.Text>Don't have an hangout account? <styled.Anchor>Sign up!</styled.Anchor></styled.Text>
        </styled.Footer>
      </styled.LoginForm>
    );
  }
}

export default Login;
