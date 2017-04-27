import React from 'react';
import App from './components/app';
import HomePage from './components/home-page';
import DetailsPage from './components/details-page';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="details" component={DetailsPage}/>
  </Route>
);