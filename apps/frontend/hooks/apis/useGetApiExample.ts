import { useQuery } from 'react-query';
import { getExample } from '@/api-interceptor/example.api';

export const useGetApiExample = () => {
  return useQuery(getExample.name, getExample);
};
