import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const S3_URL = process.env.REACT_APP_S3_URL;

const ImageCard = (props) => {
  const {
    imageKey, labels,
  } = props;

  return (
    <div style={{ paddingBottom: '1vw' }}>
      <Card href={`/image/${imageKey}`} color="blue">
        <Image src={S3_URL + imageKey} />
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
