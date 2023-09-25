import { client } from './client';

export const getExample = () => {
  return client.get('/repos/tannerlinsley/react-query').then((res) => res.data);
};
