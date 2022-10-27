import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 400;
  font-size: 1.4rem;
  color: #5e6366;
`;

export const Input = styled.input`
  padding: 1.65rem 1.6rem;
  background-color: rgba(239, 241, 249, 0.6);
  border-radius: 0.8rem;
  width: 100%;
  border: none;
  color: #5e6366;

  &::placeholder {
    color: #abafb1;
  }
`;
