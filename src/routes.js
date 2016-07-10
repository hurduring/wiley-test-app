import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './layouts/main';
import Home from './containers/Home'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
