import React, { Component } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

import ImageCard from './ImageCard';

const IMAGE_LIMIT = 2;
const GET_LATEST_IMAGES_API = process.env.REACT_APP_GET_LATEST_IMAGES_API;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      images: [],
    };
  }

  componentDidMount() {
    axios.get(`${GET_LATEST_IMAGES_API}?limit=${IMAGE_LIMIT}`)
      .then((images) => {
        this.setState({ images: images.data, loading: false });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading
          ? (
            <Dimmer active inverted>
              <Loader>Loading</Loader>
            </Dimmer>
          )
          : (
            <React.Fragment>
              {this.state.images.map(image => <ImageCard labels={image.labels} imageKey={image.key} />)}
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

export default Home;
