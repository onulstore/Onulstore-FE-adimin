import styled from 'styled-components';

export const Container = styled.div`
  width: 135.2rem;
  padding: 2.4rem 2rem 4.6rem;
  background-color: #f4f5fa;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .top-title {
    font-weight: 500;
    font-size: 1.6rem;
  }

  .top-button {
    width: 20.5rem;
    height: 3.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.95rem 2.2rem;
    background-color: ${({ theme }) => theme.palette.onulBrandBrighter};
    border-radius: 1.2rem;
    span {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.palette.whiteColor};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .info-left {
    background-color: ${({ theme }) => theme.palette.onulBrandBrighter};
    border-radius: 1.2rem;
    width: calc(50%);
    margin-right: 1.9rem;
    height: 14.5rem;
    padding: 1.1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;
    .bottom {
      display: flex;
      color: ${({ theme }) => theme.palette.whiteColor};
      .regi-item {
        flex-grow: 1;
        div:nth-child(1) {
          font-weight: 400;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
        }
        div:nth-child(2) {
          font-weight: 500;
          font-size: 2rem;
        }
      }

      .sale-item {
        flex-grow: 1;
        div:nth-child(1) {
          font-weight: 400;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
        }
        div:nth-child(2) {
          font-weight: 500;
          font-size: 2rem;

          span:nth-child(2) {
            font-size: 1.4rem;
            color: #dbdeee;
            margin-left: 0.7rem;
          }
        }
      }
    }
  }

  .info-right {
    width: 50%;
    background-color: ${({ theme }) => theme.palette.whiteColor};
    border-radius: 1.2rem;
    height: 14.5rem;
    padding: 1.1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;
    .bottom {
      display: flex;
      color: ${({ theme }) => theme.palette.blackColor};
      .stock {
        /* margin-right: 18.7rem;
         */
        flex-grow: 1;
        div:nth-child(1) {
          font-weight: 400;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
        }
        div:nth-child(2) {
          font-weight: 500;
          font-size: 2rem;
        }
      }
    }
  }
`;

export const Table = styled.div``;
