import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardHeader = styled.header`
  display: flex;
  flex-basis: 100%;
  grid-area: header;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  position: relative;
`;

export const Logo = styled.span`
  display: flex;
  flex: 0 0 200px;
  height: 70px;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  color: #fff;
  background-color: rgb(59, 59, 91);
  font-size: 0.75rem;
  & h1 {
    margin: 0;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing);
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border-radius: 5em;
  border: 0;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  color: #fff;
  background-color: rgb(59, 59, 91);
`;
export const LogoutText = styled.a`
  color: var(--grey);
  text-decoration: none;
`;
