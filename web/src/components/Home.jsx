import React from 'react';

import ImageCard from './ImageCard';

const Home = (props) => {
  return (
    <div>
      <ImageCard id="ada41f" labels={['Dog', 'Cute']} url="https://i.imgur.com/DBbtjie.jpg" />
      <ImageCard id="dadacv" labels={['Mad', 'Kids']} url="https://i.imgur.com/dVHbFf9.jpg" />
    </div>
  );
};

export default Home;
