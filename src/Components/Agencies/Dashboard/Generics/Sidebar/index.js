import React from 'react';

import { Nav, Ul, Li, MenuLink } from './styled';

function renderItems(items) {
  return items.map(item => (
    <Li key={item.path}>
      <MenuLink to={`/${item.path}`}>{item.name}</MenuLink>
    </Li>
  ))
}

const Sidebar = ({ items }) => (
  <Nav>
    <Ul>
     {renderItems(items)}
   </Ul>
  </Nav>
)

export default Sidebar;
