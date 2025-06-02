import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const getClients = async () => {
  const response = await axios.get (`⁠${BASE_URL}/clients`);
  return response.data;
};

export const createClient = async (clientData) => {
  const response = await axios.post (`${BASE_URL}/clients`, clientData);
  return response.data;
};
