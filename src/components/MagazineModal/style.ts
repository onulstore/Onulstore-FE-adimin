import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(5px);
  z-index: 3;
`;
export const Modal = styled.div`
  width: 79rem;
  height: 48.2rem;
  background-color: #ffffff;
  margin: 10% auto;
  padding: 1.6rem 2.4rem;
  border-radius: 1rem;
  position: relative;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.2rem;
  margin-bottom: 0.8rem;
`;
export const Label = styled.div`
  display: flex;
  label {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 0.8rem;
  }
`;
export const CloseBtn = styled.button``;
export const SearchInput = styled.form`
  width: 100%;
  border: 1px solid green;
  display: flex;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 1rem;
  padding: 1.6rem;
  outline: none;
  margin-bottom: 1.6rem;

  input {
    border: transparent;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const CancelBtn = styled.button`
  width: 16rem;
  height: 3.2rem;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 1rem;
  margin-right: 1.6rem;
  &:hover {
  }
`;

export const EnterBtn = styled.button`
  width: 16rem;
  height: 3.2rem;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 1rem;

  &:hover {
  }
  &:disabled {
  }
`;

export const ItemList = styled.div``;
