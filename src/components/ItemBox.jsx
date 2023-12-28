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
  grid-gap: 20px 10px;
  width: calc(100% - 100px);
  flex: 0 0 calc(100% - 100px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    width: calc(100% - 150px);
    flex: 0 0 calc(100% - 150px);
  }
`;

export default CategoryBox;
