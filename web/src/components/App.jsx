import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ImagePage from './ImagePage';
import Home from './Home';
import Header from './Header';
import Page404 from './Page404';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/image/:id" component={ImagePage} />
      <Route component={Page404} />
    </Switch>
  </React.Fragment>
);

export default App;
