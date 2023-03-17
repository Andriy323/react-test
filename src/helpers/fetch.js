import axios from 'axios';
axios.defaults.baseURL = 'https://64036366f61d96ac487e7f44.mockapi.io';
const endpoint = '/contacts';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.Authorization = '';
};

export const singup = async dataSing => {
  const { data } = await authInstance.post('/users/signup', dataSing);
  setToken(data.token);
  return data;
};

export const logIn = async dataLogIn => {
  const { data } = await authInstance.post('/users/login', dataLogIn);
  setToken(data.token);
  return data;
};

export const logOut = async () => {
  const data = await authInstance.post('/users/logout');
  setToken();
  return data;
};

export const getCurrentUser = async token => {
  setToken(token);

  const data = await authInstance.get('/users/current');
  return data;
};

export const getContactsApi = async () => {
  const { data } = await authInstance.get(endpoint);
  return data;
};

export const addContactApi = async contact => {
  const { data } = await authInstance.post(endpoint, contact);
  return data;
};

export const deleteContactApi = async id => {
  await authInstance.delete(`${endpoint}/${id}`);
};
