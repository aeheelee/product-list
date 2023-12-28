import styled from 'styled-components';
import ItemCard from './ItemCard';

const CategoryBox = ({ data }) => {
  return (
    <StyledItemBox>
      {data.map((item, index) => (
        <ItemCard key={index} data={item} />
      ))}
    </StyledItemBox>
  );
};

const StyledItemBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default CategoryBox;
