import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemSlider from './ItemSlider';
import { fetchData } from '../api/index';

const RankingProudct = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://cozshopping.codestates-seb.link/api/v3/ranking`;
      fetchData(url, (data) => setRankingData(data.items));
    };

    fetchProduct();
  }, []);

  return (
    <section>
      <StyledTitle>실시간 랭킹</StyledTitle>
      <ItemSlider data={rankingData} />
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
