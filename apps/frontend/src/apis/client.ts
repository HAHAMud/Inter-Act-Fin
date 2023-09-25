import axios from 'axios';

// example: https://api.github.com/repos/tannerlinsley/react-query

export const client = axios.create({
  baseURL: 'https://api.github.com',
});
