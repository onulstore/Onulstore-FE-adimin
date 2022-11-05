import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Paths = styled.div`
  .logo {
    font-size: 2rem;
  }
  .nav {
    border: 1px solid black;
    display: block;
    padding: 20px;
    font-size: 15px;
  }

  .active-nav {
    border: 2px solid red;
    font-weight: 900;
    display: block;
    padding: 20px;
    font-size: 15px;
  }
`;

export const LogOutBtn = styled.button`
  border: 1px solid red;
`;
