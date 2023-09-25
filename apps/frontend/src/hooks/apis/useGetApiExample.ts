import { useQuery } from 'react-query';
import { getExample } from '@/src/apis/example.api';

export const useGetApiExample = () => {
  return useQuery(getExample.name, getExample);
};
