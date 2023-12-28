import { useState } from 'react';
import styled from 'styled-components';

const CategoryTab = ({ data }) => {
  const [selectCategory, setSelectCategory] = useState('All');

  const handleClickCategory = (category) => {
    setSelectCategory(category);
  };

  return (
    <>
      {data.map(({ id, category, title }) => {
        const isActive = selectCategory === category;
        return (
          <StyledButton
            type="button"
            $isActive={isActive}
            key={id}
            onClick={() => handleClickCategory(category)}
          >
            {title}
          </StyledButton>
        );
      })}
    </>
  );
};

const StyledButton = styled.button`
  font-weight: ${(props) => (props.$isAcive ? '700' : '400')};
`;

export default CategoryTab;
