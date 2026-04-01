import axios from 'axios';

// Configura a URL base no backend Node.js
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default api;