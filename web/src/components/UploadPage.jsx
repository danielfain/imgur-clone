import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const API_URL = process.env.REACT_APP_GET_PRESIGNED_URL_API;

const UploadPage = (props) => {
  const { onImageUpload } = props;

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
            onImageUpload(true);
          })
          .catch((error) => {
            console.error(error);
            onImageUpload(false);
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
          ? <p>Drop an image here...</p>
          : <p>Drag and drop an image here, or click to select image</p>
      }
    </div>
  );
};

export default UploadPage;
