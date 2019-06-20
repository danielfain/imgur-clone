import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import ImagePage from './ImagePage';
import Home from './Home';
import UploadPage from './UploadPage';

const App = () => (
  <Switch>
    <div style={{ paddingLeft: '7vw', paddingRight: '7vw', paddingTop: '2vw', paddingBottom: '2vw' }}>
      <Link to="/">
        <div style={{ paddingBottom: '2vw' }}>
          <h1>Imgur Clone</h1>
        </div>
      </Link>
      <Route exact path="/" component={Home} />
      <Route path="/image/:id" component={ImagePage} />
      <Route path="/upload" component={UploadPage} />
    </div>
  </Switch>
);

export default App;
