import axios from 'axios';

const api = axios.create({
  baseURL: 'https://boiling-waters-87925.herokuapp.com/',
});

export default api;
