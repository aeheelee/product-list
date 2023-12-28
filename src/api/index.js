export const fetchData = async (url, callback) => {
  try {
    const response = await fetch(url); // url로 비동기 HTTP 요청을 시작, fetch 함수는 해당 요청에 대한 응답을 반환하는 Promise를 리턴
    const data = await response.json(); // JSON 데이터로 해결되는 Promise를 반환, await 키워드는 함수 실행을 일시 중지하여 프로미스가 해결될 때까지 기다림
    callback(data); // 추출된 JSON 데이터가 callback 함수에 인수로 전달
  } catch (error) {
    console.error(error);
    throw error; // 예외를 다시 던지거나 적절한 방식으로 처리
  }
};
