import styled from 'styled-components';

export const Caption = styled.div`
  font-family: 'montserrat', 'Lato', sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 20px 20px 0;
  margin: 0;
  color: #000;
`;

export const FormField = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  height: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const Spacer = styled.div`
  margin: ${props => props.space};
`;
