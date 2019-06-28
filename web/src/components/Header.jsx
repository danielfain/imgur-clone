import React, { Component } from 'react';
import { Modal, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

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
      modalOpen: false,
    };
  }

  onImageUpload(success, imageKey) {
    if (success) {
      setTimeout(() => this.setState({ uploadError: false, imageKey, loading: false, modalOpen: false }), 2000);
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
        <Modal trigger={<Button>Upload</Button>} open={this.state.modalOpen} onOpen={() => this.setState({ modalOpen: true })} onClose={() => this.setState({ uploadError: false, modalOpen: false })}>
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
          </Modal.Content>
        </Modal>
        {this.state.imageKey
          ? <Redirect to={`/image/${this.state.imageKey}`} />
          : null
        }
      </div>
    );
  }
}

export default Header;
