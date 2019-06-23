import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ImagePage from './ImagePage';
import Home from './Home';
import Header from './Header';

const App = () => (
  <Switch>
    <div style={{ paddingLeft: '7vw', paddingRight: '7vw', paddingTop: '2vw', paddingBottom: '2vw' }}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/image/:id" component={ImagePage} />
    </div>
  </Switch>
);

export default App;
