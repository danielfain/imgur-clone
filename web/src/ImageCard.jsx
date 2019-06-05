import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const ImageCard = (props) => {
  const {
    url, header, uploadDate, labels,
  } = props;

  return (
    <Card>
      <Image src={url} />
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{uploadDate}</Card.Meta>
        <Card.Description>
          {labels.map((label, index) => (
            <Button key={index} size="mini">{label}</Button>
          ))}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ImageCard;
