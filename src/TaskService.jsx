import axios from 'axios';

const API_URL = 'http://localhost:7000/api/tasks';

const getBooks = () => {
  return axios.get(API_URL);
};

const addBook = (book) => {
  return axios.post(API_URL, book);
};

const updateTask = (id, task) => {
  return axios.put(`${API_URL}/${id}`, task);
};

const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getBooks,
  addBook,
  updateTask,
  deleteTask,
};
