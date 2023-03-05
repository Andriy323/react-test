import axios from 'axios';

axios.defaults.baseURL = 'https://64036366f61d96ac487e7f44.mockapi.io';
const endpoint = '/contacts';

// GET /contacts
export const getContactsApi = async () => {
  const { data } = await axios.get(endpoint);

  return data;
};

// POST /contacts
export const addContactApi = async contact => {
  const { data } = await axios.post(endpoint, contact);
  return data;
};

// DELETE /contacts/:id
export const deleteContactApi = async id => {
  await axios.delete(`${endpoint}/${id}`);
};
