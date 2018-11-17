import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://119.29.162.64',
  timeout: 30000
});

export default instance;
