import styled from 'styled-components';
export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f6f6fb;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 44.3rem;
  height: 62.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1.2rem;
  .text {
    margin: 6rem 0;
    font-family: 'Pretendard';
    font-style: normal;
    text-align: center;
    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 2rem;
    }
    .description {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #8b8d97;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
