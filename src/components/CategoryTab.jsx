import styled from 'styled-components';

const CategoryTab = ({ data, isActive, handleClickCategoryId }) => {
  return (
    <StyledButton
      type="button"
      $isActive={isActive}
      onClick={() => handleClickCategoryId(data.id)}
    >
      <Styledimg src={data.imageUrl} alt={data.title} />
      <StyledText $isActive={isActive}>{data.title}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  flex: 0 0 100px;
  width: 100px;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${({ $isActive }) => ($isActive ? '#8561EB' : 'white')};

  @media (min-width: 768px) {
    width: 150px;
    flex: 0 0 150px;
  }
`;

const Styledimg = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 100%;
`;

const StyledText = styled.span`
  margin-left: 10px;
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
`;

export default CategoryTab;
