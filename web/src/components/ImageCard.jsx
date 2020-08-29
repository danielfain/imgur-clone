import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const S3_URL = process.env.REACT_APP_S3_URL;

const ImageCard = (props) => {
  const {
    imageKey, labels,
  } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#282c35' }}>
      <Card href={`/image/${imageKey}`} color="pink" style={{ backgroundColor: '#282c35' }}>
        <Image src={S3_URL + imageKey} />
        <Card.Content extra textAlign="center">
          {labels.map((label, index) => (
            <Button key={index} size="mini" style={{ backgroundColor: '#ffa7c4' }}>{label}</Button>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ImageCard;
