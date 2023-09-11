import React from 'react';
import { Button } from 'antd';
import { useQuery } from 'react-query';
import { useGetApiExample } from '@/pages/hooks/apis';

const Home = () => {
  const { data, isLoading } = useGetApiExample();
  console.log('🚀 ~ Home ~ isLoading:', isLoading);
  console.log('🚀 ~ Home ~ data:', data);
  return (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Home;
