import { useState, useEffect } from 'react';
const BASE_URL = 'https://cozshopping.codestates-seb.link/api/v3';

// NOTE: https://velog.io/@sorin44/React-Custom-Hooks-useFetch
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const endPoint = `${BASE_URL}${url}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(endPoint)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTimeout(() => setIsLoading(false), 300); // 테스트를 위해 지연
      })
      .catch((error) => {
        new Error(error);
        setIsError(true);
      });
  }, [endPoint]);

  return [data, isLoading, isError];
};

export default useFetch;
