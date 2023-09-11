import { useQuery } from 'react-query';
import { getExample } from '@/pages/api-interceptor/example.api';

export const useGetApiExample = () => {
  return useQuery(getExample.name, getExample);
};
