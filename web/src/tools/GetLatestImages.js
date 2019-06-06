import axios from 'axios';

const MAX_IMAGES = 20;
const API_URL = `https://so68k4vqqh.execute-api.us-east-1.amazonaws.com/default/GetLatestImages?limit=${MAX_IMAGES}`;

axios.get(API_URL)
  .then((images) => {
    console.log(images);
  })
  .catch((error) => {
    console.error(error);
  });
