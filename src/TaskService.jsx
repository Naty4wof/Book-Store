import axios from 'axios';

const API_URL = 'http://localhost:7000/api'; // Base API URL

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials, {
    headers: { 'Content-Type': 'application/json' },
  });
};

const getBooks = () => axios.get(`${API_URL}/books`);

const getBook = (id) => axios.get(`${API_URL}/books/${id}`);

const addBook = (bookData) =>
  axios.post(`${API_URL}/books`, bookData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

const updateBook = (id, bookData) =>
  axios.put(`${API_URL}/books/${id}`, bookData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

const deleteBook = (id) => axios.delete(`${API_URL}/books/${id}`);

export default {
  login,
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
