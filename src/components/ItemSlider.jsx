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
      return currentSlide >= 1;
    } else if (direction === 'next') {
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
      <StyledArrowLeft
        type="button"
        $disabled={currentSlide === 0}
        onClick={() => handleButtonClick('prev')}
      >
        〈
      </StyledArrowLeft>
      <StyledItemSlider ref={ref}>
        {data.length > 0 &&
          data.map((item, index) => (
            <ItemCard
              key={index}
              data={item}
              customStyle={{ width: '200px' }}
            />
          ))}
      </StyledItemSlider>
      <StyledArrowRight
        type="button"
        $disabled={currentSlide === maxSlides}
        onClick={() => handleButtonClick('next')}
      >
        〉
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  font-size: 30px;
  font-weight: bold;
  color: ${({ $disabled }) => ($disabled ? '#b2b2b2' : 'black')};
  line-height: 1;
  z-index: 1;
`;

const StyledArrowRight = styled.button`
  position: absolute;
  top: 29%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  font-weight: bold;
  font-size: 30px;
  color: ${({ $disabled }) => ($disabled ? '#b2b2b2' : 'black')};
  line-height: 1;
  z-index: 1;
`;

export default ItemSlider;
