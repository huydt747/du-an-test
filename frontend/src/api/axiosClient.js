import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://host.docker.internal:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.get('/articles')
  .then(response => {
    console.log(response.data); // Kiểm tra dữ liệu trả về
  })
  .catch(error => {
    console.error('Lỗi gọi API:', error);
  });
  
export default axiosClient;
