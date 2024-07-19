import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/users', // Base URL for your API
});

export default axiosInstance;
