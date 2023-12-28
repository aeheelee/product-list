import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemBox from '../components/ItemBox';
import CategoryBox from '../components/CategoryBox';
import LoadingIndicator from '../components/LoadingIndicator';

const MainContainer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectCategoryId, setSelectCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleClickCategoryId = (categoryId) => {
    setSelectCategoryId(categoryId);
  };

  useEffect(() => {
    fetch('https://cozshopping.codestates-seb.link/api/v3/categories')
      .then((res) => res.json())
      .then((data) =>
        setCategoriesData([
          {
            category: 'ALL',
            id: 0,
            imageUrl:
              'https://image.msscdn.net/display/images/2023/12/19/e2258aa5466346eb95c7738614534bdf.jpg',
            title: '전체',
          },
          ...data.product,
        ])
      );

    const fetchProduct = async () => {
      try {
        const url = `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=12${`&category=${selectCategoryId}`}`;

        const productsData = await fetch(url).then((res) => res.json());
        setProductsData(productsData.items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [selectCategoryId]);

  console.log();

  return (
    <StyledBox>
      <CategoryBox
        data={categoriesData}
        selectCategoryId={selectCategoryId}
        handleClickCategoryId={handleClickCategoryId}
      />
      {isLoading ? <LoadingIndicator /> : <ItemBox data={productsData} />}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 60px 0 100px;
`;

export default MainContainer;
