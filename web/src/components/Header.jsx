import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import UploadPage from './UploadPage';

class Header extends Component {
  constructor() {
    super();
    this.onImageUpload = this.onImageUpload.bind(this);
    this.state = {
      modalOpen: false,
    };
  }

  onImageUpload(success) {
    if (success) {
      this.setState({ modalOpen: false });
      return;
    }
    this.setState({ modalOpen: true });
  }

  render() {
    return (
      <div style={{ paddingBottom: '2vw', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <h1>Imgur Clone</h1>
        </Link>
        <Modal trigger={<Button>Upload</Button>} open={this.state.modalOpen} onOpen={() => (this.setState({ modalOpen: true }))} onClose={() => (this.setState({ modalOpen: false }))}>
          <Modal.Header>Select an image</Modal.Header>
          <Modal.Content>
            <UploadPage onImageUpload={this.onImageUpload} />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Header;
