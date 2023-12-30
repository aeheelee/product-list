import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemSlider from './ItemSlider';
import LoadingIndicator from './LoadingIndicator';
import { fetchData } from '../api/index';

const RankingProudct = ({ selectCategoryId }) => {
  const [rankingData, setRankingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);

      const url = `https://cozshopping.codestates-seb.link/api/v3/ranking?${`&category=${selectCategoryId}`}`;
      fetchData(url, (data) => setRankingData(data.items));

      setTimeout(() => setIsLoading(false), 300);
    };

    fetchProduct();
  }, [selectCategoryId]);

  return (
    <section>
      <StyledTitle>실시간 랭킹</StyledTitle>
      {isLoading ? <LoadingIndicator /> : <ItemSlider data={rankingData} />}
    </section>
  );
};

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: bold;
  color: #7b43fa;
  text-align: center;
`;

export default RankingProudct;
