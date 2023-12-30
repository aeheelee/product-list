// TODO: hook 다시 짜보기
export const fetchData = async (url, callback) => {
  try {
    const response = await fetch(url); // url로 비동기 HTTP 요청을 시작, fetch 함수는 해당 요청에 대한 응답을 반환하는 Promise를 리턴
    const data = await response.json(); // JSON 데이터로 해결되는 Promise를 반환, await 키워드는 함수 실행을 일시 중지하여 프로미스가 해결될 때까지 기다림
    callback(data); // 추출된 JSON 데이터가 callback 함수에 인수로 전달
    // throw new Error('400 or 500 에러 발생'); // 여기서 의도적으로 에러를 던져서 아래의 catch 블록으로 이동
  } catch (error) {
    console.error(error);
    // throw error; // 알 수 없는 에러 다시 던지기
  }
};

// import { useState, useEffect } from 'react';

// const useFetch = url => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, [url]);

//   return [data];
// };

// export default useFetch;
