import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ItemBox from '../components/ItemBox';
import CategoryBox from '../components/CategoryBox';
import LoadingIndicator from '../components/LoadingIndicator';

const fetchData = async (url, callback) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error(error);
  }
};

const MainContainer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectCategoryId, setSelectCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClickCategoryId = (categoryId) => {
    setSelectCategoryId(categoryId);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      fetchData(
        'https://cozshopping.codestates-seb.link/api/v3/categories',
        (data) => {
          setCategoriesData([
            {
              category: 'ALL',
              id: 0,
              imageUrl:
                'https://image.msscdn.net/display/images/2023/12/19/e2258aa5466346eb95c7738614534bdf.jpg',
              title: '전체',
            },
            ...data.product,
          ]);
        }
      );
    };

    const fetchProduct = async () => {
      setIsLoading(true);

      const url = `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=12${`&category=${selectCategoryId}`}`;
      fetchData(url, (data) => setProductsData(data.items));
      navigate(`?category=${selectCategoryId}`);

      setTimeout(() => setIsLoading(false), 300);
    };

    fetchCategory();
    fetchProduct();

    const intervalId = setInterval(fetchCategory, 5000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 30000);

    return () => {
      // 컴포넌트 언마운트 시 타이머 정리
      clearInterval(intervalId);
    };
  }, [navigate, selectCategoryId]);

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
  display: flex;
  max-width: 1310px;
  margin: 0 auto;
  padding: 60px 0 100px;
`;

export default MainContainer;
