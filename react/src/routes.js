import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Boothbay from './components/Boothbay';

let routes = (
  <Route path="/" >
    <IndexRoute component={Home} />
    <Route path="boothbay" component={Boothbay} />
  </Route>
);

export default routes;
