import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemBox from '../components/ItemBox';
import CategoryBox from '../components/CategoryBox';

const MainContainer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectCategoryId, setSelectCategoryId] = useState(0);

  const handleClickCategoryId = (categoryId) => {
    setSelectCategoryId(categoryId);
  };

  console.log(selectCategoryId);
  // useEffect(() => {
  //   fetch('https://cozshopping.codestates-seb.link/api/v3/categories')
  //     .then((res) => res.json())
  //     .then((data) => setCategoriesData(data.product));

  //   fetch(
  //     'https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=10'
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProductsData(data.items));
  // }, []);

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
      const url = `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=12${
        selectCategoryId > 0 ? `&category=${selectCategoryId}` : ''
      }`;

      const productsData = await fetch(url)
        .then((res) => res.json())
        .catch((error) => console.error(error));

      // TODO: finally 추가

      setProductsData(productsData.items);
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
      <ItemBox data={productsData} />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 60px 0 100px;
`;

export default MainContainer;
