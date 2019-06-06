import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import ImageCard from './ImageCard';
import Home from './Home';

const App = () => (
  <Switch>
    <div style={{ paddingLeft: '7vw', paddingRight: '7vw', paddingTop: '2vw', paddingBottom: '2vw' }}>
      <h1>Imgur Clone</h1>
      <Route exact path="/" component={Home} />
      <ImageCard header="Raul the Dog" labels={['Dog', 'Cute']} uploadDate="April 8th, 2019" url="https://i.imgur.com/DBbtjie.jpg" />
      <ImageCard header="Painting" labels={['Mad', 'Kids']} uploadDate="April 25th, 2019" url="https://i.imgur.com/dVHbFf9.jpg" />
    </div>
  </Switch>
);

export default App;
