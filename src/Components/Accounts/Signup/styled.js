import styled from 'styled-components';

export const SignupForm = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;

export const SignupWrapper = styled.div`
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;
`;

export const SideWrapper = styled.div`
  width: calc(100% - 560px);
  background: var(--primary);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const RightBlock = styled.div`
  width: 560px;
  min-height: 100vh;
  display: block;
  background-color: #f7f7f7;
  padding: 50px 55px 55px 55px;
`;

export const Form = styled.form`
  background: var(--white);
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
`;

export const Caption = styled.span`
  width: 100%;
  display: flex;
  font-size: 30px;
  color: #444;
  line-height: 1.2;
  text-align: center;
  padding: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormField = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  color: var(--grey);
`;

export const StyledButton = styled.button`
  padding: 10px 40px;
  font-size: 20px;
  margin: 10px;
  font-weight: 400;
`;
