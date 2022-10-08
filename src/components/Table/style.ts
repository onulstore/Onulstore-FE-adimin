import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid red;

  .table {
    border: 1px solid green;
    width: 100%;

    th {
      border: 1px solid black;
      color: black;
      font-weight: bold;
    }

    td {
      border: 1px solid black;
      color: black;
      font-weight: bold;
    }
  }
  .pagination {
    display: flex;
    justify-content: space-around;
  }
`;
export const PageController = styled.div``;
export const PageIndicator = styled.div``;
export const PageNavigator = styled.div``;
export const PageSize = styled.div``;
