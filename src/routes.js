import React from 'react';
import App from './components/app';
import HomePage from './components/home-page';
import DetailsPage from './components/details-page';
import PaymentsPage from './components/payments-page';
import GardenPage from './components/garden-page';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="details" component={DetailsPage}/>
    <Route path="payments" component={PaymentsPage}/>
    <Route path="garden" component={GardenPage}/>
  </Route>
);
