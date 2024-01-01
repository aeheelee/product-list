// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemSlider from './ItemSlider';
import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch.js';

const RankingProudct = ({ categoryId }) => {
  const [rankingData, rankingLoading, rankingError] = useFetch(
    `/ranking?category=${categoryId}`
  );

  return (
    <section>
      <StyledTitle>실시간 랭킹</StyledTitle>
      {rankingLoading ? (
        <Loading />
      ) : rankingError ? (
        <Error />
      ) : (
        <ItemSlider data={rankingData?.items || []} />
      )}
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
