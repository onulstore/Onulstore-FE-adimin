import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.4rem 2.1rem;
  background-color: ${({ theme }: any) => theme.palette.whiteGrey};

  .page-label {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;

    .page-title {
      font-weight: 500;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
    }
    .button-container {
      width: 53.1rem;
      display: flex;
      justify-content: space-between;
    }
  }
  .product {
    display: flex;

    .product-left {
      padding: 2rem 2.5rem;
      background-color: #fff;
      border-radius: 1.2rem;
      margin-right: 2rem;

      &-title {
        font-weight: 500;
        font-size: 1.6rem;
        color: #8b8d97;
        margin-bottom: 1.7rem;
      }

      &-big {
        margin-bottom: 1.7rem;
      }

      .grid-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
    .product-right {
      flex-grow: 1;
      .product-right-info {
        padding: 2.2rem 3rem;
        background-color: #fff;
        border-radius: 1.2rem;
        margin-bottom: 2.1rem;
        .form-top {
          margin-bottom: 1.9rem;
        }
        .form-mid {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.9rem;

          &-price {
            flex-grow: 1;
            margin-left: 7rem;

            &-input {
              margin-bottom: 1.9rem;
            }
          }
        }
        .form-bottom {
          display: flex;

          justify-content: space-between;

          &-brand {
            width: 37.5rem;
          }

          &-stock {
            margin-left: 7rem;
            flex-grow: 1;
          }
        }
      }

      &-detail {
        background-color: #fff;
        padding: 2.2rem 3rem;
        border-radius: 1.2rem;
        height: 34.5rem;

        .label {
          font-weight: 500;
          font-size: 1.6rem;
          color: #8b8d97;
          margin-bottom: 1.6rem;
        }

        textarea {
          background-color: rgba(239, 241, 249, 0.6);
          border-radius: 0.8rem;
          /////////////////////
          width: 100%;
          height: 26.5rem;
          resize: none;
          display: block;
          font-size: 1.6rem;
          font-weight: 400;
          border: transparent;
          padding: 1.6rem;
          outline: none;
          margin-bottom: 1.6rem;
          scrollbar-color: red;

          &::-webkit-scrollbar {
            width: 0.8rem;
            cursor: pointer;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #808080;
            border-radius: 1rem;
          }
          &::-webkit-scrollbar-track {
            background-color: #d6d6d6;
          }
        }
      }
    }
  }
`;
