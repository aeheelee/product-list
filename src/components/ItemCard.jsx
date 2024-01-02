import styled from 'styled-components';

const ItemCard = ({ data, customStyle = {} }) => {
  const formatNumber = (num = 0) =>
    Number(num | 0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <StyledCard $customStyle={customStyle}>
      <StyledThumnailBox>
        <StyledThumnail src={data.imageUrl} alt={data.title} />
      </StyledThumnailBox>
      <StyledInformaiton>
        <StyledText>{data.title}</StyledText>
        <StyledOriginalPrice aria-label="정상가격">
          ￦{formatNumber(data.price)} 원
        </StyledOriginalPrice>
        <StyledDiscount aria-label="할인율">
          {data.discountPercentage}%
        </StyledDiscount>
        <StyledPrice>￦{formatNumber(data.discountPrice)} 원</StyledPrice>
      </StyledInformaiton>
    </StyledCard>
  );
};

const StyledCard = styled.li`
  overflow: hidden;

  ${({ $customStyle }) => $customStyle}
`;

const StyledThumnailBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

const StyledThumnail = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledInformaiton = styled.div`
  padding: 16px 12px 0px;
`;

const StyledText = styled.p`
  display: block;
  overflow: hidden;
  margin-bottom: 4px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
`;

const StyledOriginalPrice = styled.del`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
`;

const StyledPrice = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
`;

const StyledDiscount = styled.span`
  margin-left: 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: red;
`;

export default ItemCard;
