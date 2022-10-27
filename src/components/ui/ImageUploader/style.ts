import styled from 'styled-components';

export const Container = styled.div`
  .image {
    position: relative;

    button {
      position: absolute;
      right: 0.7rem;
      top: 0.7rem;
    }
  }
`;

export const Image = styled.img`
  width: 17rem;
  height: 17rem;
`;
export const Button = styled.button`
  /* width: 23.852rem; */
  /* height: 11.9rem; */
  /* padding: 3.5rem 5.7rem; */
  /* border-radius: 1rem; */
  cursor: pointer;

  div {
    /* margin-top: 0.8rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem; */
  }

  input {
    display: none;
  }
`;
