// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
  headers: {
    'Content-Type': 'application/json',
  },
//   export const: fetchTickets = async() =>{
//     const response = await api.get ('tickets');
//     return response.data;
//   }
}); 

export default api;