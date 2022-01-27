import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Su5rA-Yw7VLvsYJe5quuZzDkRkak24-kHUAMp7QlbZ_KZednICvIHQrUvhL8CuQ9V-ivW8Lv0cDq60tqf9HMM5zJdt9mxLTdOklyApN-9-UyVP_D-e5KfqM2aDXyYXYx',
  },
});
