import React from 'react';
import { Image, Button } from 'semantic-ui-react';

const ImagePage = (props) => {
  // const { id } = props.match.params;

  if (props.location.state) {
    const { url, labels } = props.location.state;

    return (
      <React.Fragment>
        <Image src={url} size="massive" />
        <div style={{ paddingTop: '1vw' }}>
          {labels.map(label => (
            <Button>{label}</Button>
          ))}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div>
      <p>wip</p>
    </div>
  );
};

export default ImagePage;
