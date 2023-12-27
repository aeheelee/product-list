import styled from 'styled-components';

const ItemCard = ({ data }) => {
  const formatNumber = (num = 0) => Number(num | 0).toLocaleString('en');

  return (
    <StyledCard>
      <StyledThumnailBox>
        <StyledThumnail src={data.image_url} alt={data.title} />
      </StyledThumnailBox>
      <StyledInformaiton>
        <StyledBrand>{data.brand_name}</StyledBrand>
        <StyledText>{data.title}</StyledText>
        <StyledPrice>{formatNumber(data.price)} 원</StyledPrice>
      </StyledInformaiton>
    </StyledCard>
  );
};

const StyledCard = styled.li`
  overflow: hidden;
  max-width: 320px;
`;

const StyledThumnailBox = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 100%;
`;

const StyledThumnail = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

const StyledInformaiton = styled.div`
  padding: 16px 12px 0px;
`;

const StyledBrand = styled.p`
  font-size: 13px;
  font-weight: 700;
`;

const StyledText = styled.p`
  display: block;
  overflow: hidden;
  margin-bottom: 4px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
`;

const StyledPrice = styled.span`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
`;

export default ItemCard;
