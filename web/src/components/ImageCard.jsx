import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ImageCard = (props) => {
  const {
    id, url, labels,
  } = props;

  return (
    <Card href="/" color="blue">
      <Link to={{ pathname: `/image/${id}`, state: { url, labels } }}>
        <Image src={url} />
      </Link>
      <Card.Content extra textAlign="center">
        {labels.map((label, index) => (
          <Button key={index} size="mini">{label}</Button>
        ))}
      </Card.Content>
    </Card>
  );
};

export default ImageCard;
