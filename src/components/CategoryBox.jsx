import styled from 'styled-components';
import CategoryTab from './CategoryTab';

const CategoryBox = ({ data, selectCategoryId, handleClickCategoryId }) => {
  return (
    // TODO: handleClickCategoryId 이벤트 위임
    <StyledBox>
      {data.map((item, index) => (
        <CategoryTab
          key={index}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          isActive={selectCategoryId === item.id}
          handleClickCategoryId={handleClickCategoryId}
        />
      ))}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  padding: 10px 0 20px;
`;

export default CategoryBox;
