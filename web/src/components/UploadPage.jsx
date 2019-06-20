import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import crypto from 'crypto';

const API_URL = 'https://so68k4vqqh.execute-api.us-east-1.amazonaws.com/default/GetUploadURL?key=';

const UploadPage = () => {
  const onDrop = useCallback(async (acceptedFile) => {
    if (acceptedFile[0].type.substring(0, 5) !== 'image') {
      return;
    }

    const key = crypto.randomBytes(5).toString('hex');
    let signedUrl = '';

    signedUrl = await axios.get(API_URL + key)
      .then(response => (response.data.uploadURL))
      .catch((error) => {
        console.log(error);
      });

    console.log(typeof acceptedFile);

    if (signedUrl !== '') {
      axios.put(signedUrl, acceptedFile)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
};

export default UploadPage;
