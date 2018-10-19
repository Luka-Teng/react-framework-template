import React from 'react';
import AsyncRoute from './AsyncRoute';

const Home = (props) => (
  <AsyncRoute load={() => import('@/page/home')}>
    {(Home) => <Home {...props}/>}
  </AsyncRoute>
);

const routes=[
  {
    path: '/',
    component: Home,
    exact: true
  }
]

export default routes