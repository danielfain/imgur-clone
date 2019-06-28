import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import crypto from 'crypto';

const API_URL = process.env.REACT_APP_GET_PRESIGNED_URL_API;

const UploadPage = (props) => {
  const { onImageUpload, setLoading } = props;

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0].type.substring(0, 5) !== 'image') {
      console.error('only upload images, yo');
      return;
    }

    if (acceptedFiles[1]) {
      console.error('only 1 image at a time');
      return;
    }

    const key = `${crypto.randomBytes(4).toString('hex')}.${acceptedFiles[0].name.split('.').pop()}`;

    const reader = new FileReader();

    reader.onerror = () => (console.log('error'));
    reader.onload = async () => {
      setLoading();

      const imageBase64 = reader.result.split(',').pop();
      const imageBuffer = Buffer.from(imageBase64, 'base64');

      const signedUrl = await axios.get(`${API_URL}?key=${key}&type=${acceptedFiles[0].type}`)
        .then(response => (response.data.uploadURL))
        .catch((error) => {
          console.error(error);
        });

      if (signedUrl) {
        await axios.put(signedUrl, imageBuffer, { headers: { 'Content-Encoding': 'base64', 'Content-Type': acceptedFiles[0].type } })
          .then(() => {
            onImageUpload(true, key);
          })
          .catch(() => {
            onImageUpload(false);
          });
      }
    };

    acceptedFiles.forEach((file) => {
      // creates a replica of the image with randomized name
      const imageFile = new File([file], key, { type: file.type });
      reader.readAsDataURL(imageFile);
    });
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
