import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';

const ItemSlider = ({ data }) => {
  // const [sliderList, setSliderList] = useState({ start: 0, last: 5 });

  // const itemSliderList =
  //   sliderList.start < sliderList.last
  //     ? data.slice(sliderList.start, sliderList.last)
  //     : [
  //         ...data.slice(sliderList.start, data.length),
  //         ...data.slice(0, sliderList.last),
  //       ];

  // const prevButtonClick = () => {
  //   setSliderList(({ last }) => {
  //     const start = last === data.length ? 0 : last;

  //     let nextLast = last - 5;

  //     if (nextLast > data.length) {
  //       nextLast = nextLast - data.length;
  //     }

  //     return { start, last: nextLast };
  //   });
  // };

  // const nextButtonClick = () => {
  //   setSliderList(({ last }) => {
  //     const start = last === data.length ? 0 : last;

  //     let nextLast = last + 5;

  //     if (nextLast > data.length) {
  //       nextLast = nextLast - data.length;
  //     }

  //     return { start, last: nextLast };
  //   });
  // };

  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = 5;

  const updateMargin = () => {
    ref.current.style.left = `${-currentSlide * 210}px`;
  };

  useEffect(updateMargin, [currentSlide]);

  const isCheckActiveButton = (direction) => {
    if (direction === 'prev') {
      if (currentSlide === 0) {
        alert('첫번째 아이템입니다');
      }

      return currentSlide >= 1;
    } else if (direction === 'next') {
      if (currentSlide === maxSlides) {
        alert('마지막 아이템입니다');
      }
      return currentSlide < maxSlides;
    }

    return false;
  };

  const handleButtonClick = (direction) => {
    if (isCheckActiveButton(direction)) {
      setCurrentSlide((prev) => (direction === 'prev' ? prev - 1 : prev + 1));
    }
  };

  return (
    <StyledItemBox>
      <StyledArrowLeft type="button" onClick={() => handleButtonClick('prev')}>
        &lt;
      </StyledArrowLeft>
      <StyledItemSlider ref={ref}>
        {data.map((item, index) => (
          <ItemCard key={index} data={item} setStyle={{ width: '200px' }} />
        ))}
      </StyledItemSlider>
      <StyledArrowRight type="button" onClick={() => handleButtonClick('next')}>
        &gt;
      </StyledArrowRight>
    </StyledItemBox>
  );
};

const StyledItemBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 1040px;
  height: 300px;
  margin: 0 auto 100px;
`;

const StyledItemSlider = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  gap: 10px;
  width: 2090px;
  transition: left 0.5s ease-out;
`;

const StyledArrowLeft = styled.button`
  position: absolute;
  top: 29%;
  left: 10px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  z-index: 1;
`;

const StyledArrowRight = styled.button`
  position: absolute;
  top: 29%;
  right: 10px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  line-height: 1;
  z-index: 1;
`;

export default ItemSlider;
