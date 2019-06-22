import axios from 'axios';

const MAX_IMAGES = 20;
const API_URL = `${process.env.REACT_APP_GET_LATEST_IMAGES_API}?limit=${MAX_IMAGES}`;

axios.get(API_URL)
  .then((images) => {
    console.log(images);
  })
  .catch((error) => {
    console.error(error);
  });
