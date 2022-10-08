import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  div {
    border: 1px solid green;
    padding: 10px;
  }
  .left {
    border: 1px solid red;
  }

  .right {
    border: 1px solid blue;

    .preview-image {
      width: 500px;
    }
  }
`;
