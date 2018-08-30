import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.header`
  flex: 0 0 200px;
  grid-area: nav;
  background-color: rgb(59, 59, 91);
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Li = styled.li`
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;

export const MenuLink = styled(NavLink)`
  display: block;
  padding: 1rem 2rem;
  color: var(--white);
  text-decoration: none;
  &:focus,
  :hover {
    color: #fff;
    background-color: #1f222d;
  }
`;
