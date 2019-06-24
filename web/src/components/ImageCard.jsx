import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const ImageCard = (props) => {
  const {
    id, url, labels,
  } = props;

  return (
    <div style={{ display: 'flex' }}>
      <Card href={`/image/${id}`} color="blue">
        <Image src={url} />
        <Card.Content extra textAlign="center">
          {labels.map((label, index) => (
            <Button key={index} size="mini">{label}</Button>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ImageCard;
