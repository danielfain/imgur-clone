import React, { Component } from 'react';
import { Modal, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import UploadPage from './UploadPage';

class Header extends Component {
  constructor() {
    super();
    this.onImageUpload = this.onImageUpload.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.state = {
      loading: false,
      uploadError: false,
      imageKey: null,
    };
  }

  onImageUpload(success, imageKey) {
    if (success) {
      this.setState({ uploadError: false, imageKey, loading: false });
      return;
    }
    this.setState({ uploadError: true, loading: false });
  }

  setLoading() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div style={{ paddingBottom: '2vw', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <h1>Imgur Clone</h1>
        </Link>
        <Modal trigger={<Button>Upload</Button>} onClose={() => (this.setState({ uploadError: false }))}>
          <Modal.Header>Select an image</Modal.Header>
          <Modal.Content>
            {this.state.loading
              ? <Dimmer active inverted><Loader>Loading</Loader></Dimmer>
              : <UploadPage onImageUpload={this.onImageUpload} setLoading={this.setLoading} />
            }
            {this.state.uploadError
              ? <Message error><Message.Header>Error uploading image. Please try again.</Message.Header></Message>
              : null
            }
            {this.state.imageKey
              ? <Message success><Message.Header><a href={`/image/${this.state.imageKey}`}>Click to see your image</a></Message.Header></Message>
              : null
            }
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Header;
