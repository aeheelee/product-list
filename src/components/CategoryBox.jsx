import styled from 'styled-components';
import ItemCard from './ItemCard';

const dummyData = [
  {
    id: 0,
    type: 'Product',
    title: '나이키 유니폼',
    sub_title: null,
    brand_name: '나이키',
    price: '149000',
    discountPercentage: 10,
    image_url:
      'https://images.unsplash.com/photo-1559634761-b542379908a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 0,
      category: 'Product',
    },
  },
  {
    id: 1,
    type: 'Product',
    title: '아이폰 13 256GB',
    sub_title: null,
    brand_name: '애플',
    price: '1285430',
    discountPercentage: 5,
    image_url:
      'https://images.unsplash.com/photo-1633053699034-459674171bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 0,
      category: 'Product',
    },
  },
  {
    id: 2,
    type: 'Trending',
    title: '조명',
    sub_title: null,
    brand_name: '조명',
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1617363020293-62faac14783d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 1,
      category: 'Trending',
    },
  },
  {
    id: 3,
    type: 'Trending',
    title: '커피',
    sub_title: null,
    brand_name: '커피',
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 1,
      category: 'Trending',
    },
  },
  {
    id: 4,
    type: 'Product',
    title: '애플워치 Ultra',
    sub_title: null,
    brand_name: '애플',
    price: '1073500',
    discountPercentage: 50,
    image_url:
      'https://images.unsplash.com/photo-1664730022301-2019f0ecf14d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 0,
      category: 'Product',
    },
  },
  {
    id: 5,
    type: 'Brand',
    title: null,
    sub_title: null,
    brand_name: '바볼랏',
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1544287757-a8ab80d90b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    brand_image_url: null,
    follower: 4304,
    category: {
      id: 2,
      category: 'Brand',
    },
  },
  {
    id: 6,
    type: 'Product',
    title: '나이키 테니스 스커트',
    sub_title: null,
    brand_name: '나이키',
    price: '49000',
    discountPercentage: 45,
    image_url:
      'https://images.unsplash.com/photo-1659980346614-30e3bce4c157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 0,
      category: 'Product',
    },
  },
  {
    id: 7,
    type: 'Exhibition',
    title: '주인님이 정신 못차려요',
    sub_title: '고양이 장난감 기획전',
    brand_name: 'test',
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand_image_url: null,
    follower: null,
    category: {
      id: 3,
      category: 'Exhibition',
    },
  },
  {
    id: 8,
    type: 'Trending',
    title: '가드닝',
    sub_title: null,
    brand_name: 'test',
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 1,
      category: 'Trending',
    },
  },
  {
    id: 9,
    type: 'Exhibition',
    title: '내 친구도 테니스',
    sub_title: '테니스 입문자 용품 세트',
    brand_name: 'test',
    price: null,
    discountPercentage: null,
    image_url:
      'https://images.unsplash.com/photo-1560012057-4372e14c5085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    brand_image_url: null,
    follower: null,
    category: {
      id: 3,
      category: 'Exhibition',
    },
  },
];

const CategoryBox = () => {
  return (
    <StyledWrap>
      {dummyData.map((item, index) => (
        <ItemCard key={index} data={item} />
      ))}
    </StyledWrap>
  );
};

const StyledWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default CategoryBox;
