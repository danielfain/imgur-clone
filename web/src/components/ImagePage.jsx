import React, { Component } from 'react';
import { Image, Button } from 'semantic-ui-react';
import axios from 'axios';

const S3_URL = process.env.REACT_APP_S3_URL;
const SINGLE_API = `${process.env.REACT_APP_SINGLE_API}?key=`;

class ImagePage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      labels: [],
      url: '',
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    axios.get(SINGLE_API + id)
      .then((image) => {
        const { labels } = image.data;
        this.setState({ labels, url: S3_URL + id, loading: false });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading
          ? <p>Loading...</p>
          : (
            <React.Fragment>
              <Image src={this.state.url} size="massive" rounded />
              <div style={{ paddingTop: '1vw' }}>
                {this.state.labels.map(label => (
                  <Button>{label}</Button>
                ))}
              </div>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

export default ImagePage;
