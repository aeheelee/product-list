import { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import ItemSlider from './ItemSlider';
import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch.js';

const RankingProudct = ({ categoryId }) => {
  const [selectType, setSelectType] = useState(1);

  const [recommendationData, recommendationLoading, recommendationError] =
    useFetch(`/recommendation?category=${categoryId}&type=${selectType}`);

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
      {recommendationLoading ? (
        <Loading />
      ) : recommendationError ? (
        <Error />
      ) : (
        <ItemSlider data={recommendationData?.items || []} />
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
