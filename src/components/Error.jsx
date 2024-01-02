import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <StyledWrap>
      <StyledTitle>
        죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.
      </StyledTitle>
      <StyledText>
        {`존재하지 않는 주소를 입력하셨거나,\n요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.`}
      </StyledText>
      <Link to="/category/0">
        <StyledButton onClick={navigate(-1)}>이전으로</StyledButton>
        <StyledButton>메인으로</StyledButton>
      </Link>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 800px;
  color: black;
`;

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 3;
`;

const StyledText = styled.p`
  white-space: pre-line;
  text-align: center;
  line-height: 1.7;
`;

const StyledButton = styled.button`
  padding: 20px;
  margin-top: 10px;
  border: 2px solid #b5121b;
  background-color: transparent;
  color: #b5121b;

  & + & {
    margin-left: 20px;
  }
`;

export default ErrorPage;
