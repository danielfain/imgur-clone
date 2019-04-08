import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

export class ImageCard extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.url} />
        <Card.Content>
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Meta>{this.props.uploadDate}</Card.Meta>
          <Card.Description>
            {this.props.labels.map((label, index) => (
              <Button size='mini'>{label}</Button>
            ))}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
