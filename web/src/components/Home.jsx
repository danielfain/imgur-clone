import React, { Component } from 'react';
import axios from 'axios';

import ImageCard from './ImageCard';

const IMAGE_LIMIT = 20;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    console.log('ye');
  }

  render() {
    return (
      <p>home for now</p>
    );
  }
}

export default Home;
