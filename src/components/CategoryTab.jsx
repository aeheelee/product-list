import styled from 'styled-components';

const CategoryTab = ({
  id,
  title,
  imageUrl,
  isActive,
  handleClickCategoryId,
}) => {
  return (
    <StyledButton
      type="button"
      $isActive={isActive}
      onClick={() => handleClickCategoryId(id)}
    >
      <Styledimg src={imageUrl} alt={title} />
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ $isActive }) => ($isActive ? 'pink' : 'white')};
  font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};

  & + & {
    margin-left: 10px;
  }
`;

const Styledimg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export default CategoryTab;
