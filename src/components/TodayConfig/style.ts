import styled from 'styled-components';

export const Container = styled.div`
  div {
    border: 1px solid black;
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
