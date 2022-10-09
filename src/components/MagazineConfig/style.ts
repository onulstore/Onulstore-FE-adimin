import styled from 'styled-components';

export const Container = styled.div`
  div {
    border: 1px solid black;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }
  .info {
    display: flex;
    .info-left {
      &-stat {
        display: flex;
      }
    }

    .info-right {
      &-stat {
        display: flex;
      }
    }
  }
`;
