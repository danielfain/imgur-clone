import React, { Component } from 'react';

import { ImageCard } from './ImageCard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Imgur Clone</h1>
        <div style={{ paddingLeft: '5vw' }}>
          <ImageCard header='My Nigga' labels={['Dog', 'Cute']} uploadDate='April 8th, 2019' url='https://i.imgur.com/imgxeSd_d.jpg?maxwidth=520&amp;shape=thumb&amp;fidelity=high' />
        </div>
      </div>
    );
  }
}

export default App;
