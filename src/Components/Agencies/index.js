import React from 'react';
import Dashboard from './Dashboard';

const sidebarItems = [
  {name: 'Dashboard', path: 'agency/dashboard'},
  {name: 'Campaign', path: 'agency/campaign'},
  {name: 'Sales', path: 'agency/sales'},
]
const Agencies = () => {
  return (
    <Dashboard items={sidebarItems} />
  )
}

export default Agencies;
