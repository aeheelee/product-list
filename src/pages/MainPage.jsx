// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemBox from '../components/ItemBox';
import CategoryBox from '../components/CategoryBox';
import RankingProudct from '../components/RankingProduct';
import RecommendationProduct from '../components/RecommendationProduct';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useFetch from '../hooks/useFetch.js';
import { useParams } from 'react-router-dom';

const MainPage = () => {
  const { categoryId } = useParams();
  const [categories] = useFetch(`/categories`);
  const [productsData, productsLoading, productsError] = useFetch(
    `/products?page=1&limit=12&category=${categoryId}`
  );

  const categoriesData = categories
    ? [
        {
          category: 'ALL',
          id: 0,
          imageUrl:
            'https://image.msscdn.net/display/images/2023/12/19/e2258aa5466346eb95c7738614534bdf.jpg',
          title: '전체',
        },
        ...categories.product,
      ]
    : null;

  return (
    <main>
      <StyledBox>
        {categoriesData && (
          <CategoryBox data={categoriesData} categoryId={Number(categoryId)} />
        )}
        {productsLoading ? (
          <Loading />
        ) : productsError ? (
          <Error />
        ) : (
          <ItemBox data={productsData?.items || []} />
        )}
      </StyledBox>

      <RankingProudct categoryId={Number(categoryId)} />
      <RecommendationProduct categoryId={Number(categoryId)} />
    </main>
  );
};

const StyledBox = styled.section`
  display: flex;
  max-width: 1310px;
  margin: 0 auto;
  padding: 60px 0 100px;
`;

export default MainPage;
