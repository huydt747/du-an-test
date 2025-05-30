import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://du-an-test-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
