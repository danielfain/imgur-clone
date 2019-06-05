import React from 'react';

import ImageCard from './ImageCard';

const App = () => (
  <div style={{ paddingLeft: '7vw', paddingRight: '7vw', paddingTop: '2vw', paddingBottom: '2vw' }}>
    <h1>Imgur Clone</h1>
    <ImageCard header="Raul the Dog" labels={['Dog', 'Cute']} uploadDate="April 8th, 2019" url="https://i.imgur.com/DBbtjie.jpg" />
    <ImageCard header="Painting" labels={['Mad', 'Kids']} uploadDate="April 25th, 2019" url="https://i.imgur.com/dVHbFf9.jpg" />
  </div>
);

export default App;
