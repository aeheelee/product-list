import styled from 'styled-components';
import CategoryTab from './CategoryTab';
import { Link } from 'react-router-dom';

const CategoryBox = ({ data, selectCategoryId }) => {
  return (
    <StyledBox>
      {data.map((item, index) => (
        <Link to={`/category/${item.id}`} key={item.id}>
          <CategoryTab
            key={index}
            data={item}
            isActive={selectCategoryId === item.id}
          />
        </Link>
      ))}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100px;
  flex: 0 0 100px;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 150px;
    flex: 0 0 150px;
  }
`;

export default CategoryBox;
