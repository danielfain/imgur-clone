import React from 'react';

import ImageCard from './ImageCard';

const Home = (props) => {
  return (
    <div>
      <ImageCard id="ada41f" labels={['Dog', 'Cute']} url="https://imgurclone.s3.amazonaws.com/photo-1518791841217-8f162f1e1131.jpg" />
      <ImageCard id="dadacv" labels={['Mad', 'Kids']} url="https://i.imgur.com/dVHbFf9.jpg" />
    </div>
  );
};

export default Home;
