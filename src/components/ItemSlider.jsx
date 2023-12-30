import styled from 'styled-components';
import ItemCard from './ItemCard';

const ItemSlider = ({ data }) => {
  return (
    <StyledItemBox>
      <StyledArrowLeft type="button">좌</StyledArrowLeft>
      <StyledItemSlider>
        {data.map((item, index) => (
          <ItemCard key={index} data={item} setStyle={{ width: '200px' }} />
        ))}
      </StyledItemSlider>
      <StyledArrowRight type="button">우</StyledArrowRight>
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
  top: 0;
  left: 0;
  color: white;
  font-size: 30px;
  z-index: 1;
`;

const StyledArrowRight = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 30px;
  z-index: 1;
`;

export default ItemSlider;
