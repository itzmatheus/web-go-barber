import axios from 'axios';

const api = axios.create({
  baseURL: 'https://matheusleite.site/barber/api/v1',
});

export default api;
