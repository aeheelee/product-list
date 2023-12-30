import { Fragment, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import ItemSlider from './ItemSlider';
import LoadingIndicator from './LoadingIndicator';
import { fetchData } from '../api/index';

const RankingProudct = ({ selectCategoryId }) => {
  const [recommendationData, setRecommendatioinData] = useState([]);
  const [selectType, setSelectType] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);

      const url = `https://cozshopping.codestates-seb.link/api/v3/recommendation?${`&category=${selectCategoryId}&type=${selectType}`}`;
      fetchData(url, (data) => setRecommendatioinData(data.items));

      setTimeout(() => setIsLoading(false), 300);
    };

    fetchProduct();
  }, [selectCategoryId, selectType]);

  const buttonText = ['좋아요', '만족도'];

  const handleButtonClick = (type) => {
    setSelectType(type);
  };

  return (
    <section>
      <StyledTitle>당신을 위한 추천</StyledTitle>
      <StyledButtonWrap>
        {buttonText.map((item, index) => (
          <Fragment key={index}>
            <StlyedButton
              $isActive={selectType === index + 1}
              onClick={() => handleButtonClick(index + 1)}
            >
              {item}
            </StlyedButton>
          </Fragment>
        ))}
      </StyledButtonWrap>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ItemSlider data={recommendationData} />
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

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 30px;
`;

const StlyedButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 15px;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: #8561eb;
          color: white;
        `
      : css`
          background-color: white;
          color: black;
        `}
`;

export default RankingProudct;
