import styled from 'styled-components';

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 0;
  height: 100vh;
  min-height: 400px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  width: 450px;
  display: flex;
  flex-direction: column;
`;

export const Caption = styled.div`
  font-family: 'montserrat', 'Lato', sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 20px 20px 0;
  margin: 0;
  color: #000;
`;

export const LoginWrapper = styled.div`
  color: #ffff;
  padding: 25px 25px 0;
  margin: 20px 20px 0;
  border-radius: 3px;
`;

export const Form = styled.form`
  input[type='password'],
  input[type='text'],
  input[type='submit'] {
    width: 100%;
  }
  input[type='text'],
  input[type='password'],
  input[type='submit'] {
    border-radius: 0.25rem;
    padding: 1rem;
    color: #3a3f44;
  }
  input[type='text'],
  input[type='password'] {
    background-color: #ffffff;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export const Label = styled.label`
  color: var(--grey);
`;

export const FormField = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
`;

export const Footer = styled.div`
  display: flex;
`

export const Text = styled.p`
  color: var(--grey)
`

export const Anchor = styled.a`
  color: var(--primary)
`
// .form-login input[type="text"]:focus, .form-login input[type="text"]:hover, .form-login input[type="password"]:focus, .form-login input[type="password"]:hover {
//   background-color: #eeeeee;
// }
// .form-login input[type="submit"] {
//   background-color: #00B9BC;
//   color: #eee;
//   font-weight: bold;
//   text-transform: uppercase;
// }
// .form-login input[type="submit"]:focus, .form-login input[type="submit"]:hover {
//   background-color: #197071;
// }
// .form-field {
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   margin-bottom: 2rem;
// }
//
//
// .hidden {
//   border: 0;
//   clip: rect(0 0 0 0);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   width: 1px;
// }
//
// .text--center {
//   text-align: center;
// }
