import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const API_URL = 'https://so68k4vqqh.execute-api.us-east-1.amazonaws.com/default/GetUploadURL';

const UploadPage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0].type.substring(0, 5) !== 'image') {
      console.error('only upload images, yo');
      return;
    }

    if (acceptedFiles[1]) {
      console.error('only 1 image at a time');
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      const imageBase64 = reader.result.split(',').pop();
      const imageBuffer = Buffer.from(imageBase64, 'base64');

      const signedUrl = await axios.get(`${API_URL}?key=${acceptedFiles[0].name}&type=${acceptedFiles[0].type}`)
        .then(response => (response.data.uploadURL))
        .catch((error) => {
          console.error(error);
        });

      if (signedUrl) {
        await axios.put(signedUrl, imageBuffer, { headers: { 'Content-Encoding': 'base64', 'Content-Type': acceptedFiles[0].type } })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };

    acceptedFiles.forEach(file => reader.readAsDataURL(file));
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
