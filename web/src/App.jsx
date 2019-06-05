import React from 'react';

import ImageCard from './ImageCard';

const App = () => (
  <div>
    <h1>Imgur Clone</h1>
    <div style={{ paddingLeft: '5vw' }}>
      <ImageCard header="Raul the Dog" labels={['Dog', 'Cute']} uploadDate="April 8th, 2019" url="https://i.imgur.com/imgxeSd_d.jpg?maxwidth=520&amp;shape=thumb&amp;fidelity=high" />
    </div>
  </div>
);

export default App;
