import styled from 'styled-components';
import CategoryTab from './CategoryTab';

const CategoryBox = ({ data, selectCategoryId, handleClickCategoryId }) => {
  return (
    // TODO: handleClickCategoryId 이벤트 위임
    <StyledBox>
      {data.map((item, index) => (
        <CategoryTab
          key={index}
          data={item}
          isActive={selectCategoryId === item.id}
          handleClickCategoryId={handleClickCategoryId}
        />
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
