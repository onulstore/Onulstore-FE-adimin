import styled from 'styled-components';

export const CheckBox = styled.input``;
export const Container = styled.div`
  background-color: #fff;
  padding: 2.7rem 2.1rem;
  border-radius: 1.2rem;

  select {
    color: #8b8d97;
    border-radius: 0.8rem;
    background-color: rgba(94, 99, 102, 0.08);

    border: none;
    padding: 0.3rem 1.1rem;
  }

  input {
    width: 5.3rem;
    background-color: rgba(94, 99, 102, 0.08);
    color: #8b8d97;
    border-radius: 0.8rem;
    border: none;
  }

  .table {
    border-bottom: 3px solid #e1e2e9;
    border-top: 3px solid #e1e2e9;

    width: 100%;

    color: #6e7079;
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 0.9rem;
    th {
      border-bottom: 0.3rem solid #e1e2e9;
      padding: 1.7rem 0;
      /* border: 1px solid blue; */
      vertical-align: middle;

      .header-check {
        /* background-color: blue; */
      }
      .header-title {
        margin-right: 0.8rem;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    td {
      text-align: center;
      vertical-align: middle;
      padding: 0.6rem;
      /* .check-box {
        border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
      } */
      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-title {
        display: flex;
        align-items: center;

        justify-content: flex-start;
        cursor: pointer;
        &:hover {
          font-weight: 600;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: space-between;
  }

  ///이미지 사이즈용 임시

  img {
    width: 3.6rem;
    border-radius: 0.8rem;
    margin-right: 2.4rem;
  }
`;
export const PageSize = styled.div`
  select {
    width: 6.1rem;
    height: 2.3rem;
    margin-right: 0.9rem;
  }
  span {
    font-size: 1.4rem;
  }
`;
export const PageController = styled.div`
  button:nth-child(1) {
    margin-right: 1.867rem;
  }
`;
export const PageIndicator = styled.div``;
export const PageNavigator = styled.div`
  margin-right: 2.933rem;
  input {
    width: 5.3rem;
    height: 2.3rem;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;
