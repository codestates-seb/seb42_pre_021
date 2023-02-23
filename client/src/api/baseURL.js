import axios from 'axios';
const baseURL = axios.create({
  baseURL: 'http://localhost:3001/questions',
});
export default baseURL;
