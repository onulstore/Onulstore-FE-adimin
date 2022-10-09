import styled from 'styled-components';

interface Props {
  errorMsg: string | boolean | undefined;
}

export const Container = styled.div`
  font-family: 'Pretendard Variable';
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
export const Wapper = styled.div`
  display: flex;
`;
export const Label = styled.label`
  height: 1.4rem;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #2f2f33;
  display: inline-block;
  margin-bottom: 0.4rem;
`;
export const Description = styled.div`
  flex-grow: 1;
  height: 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.005em;
  color: #424242;
`;
export const ErrorMsg = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #d86145;
  margin-top: 0.8rem;
`;
export const InputWrapper = styled.div<Props>`
  padding: 0 1.8rem;
  display: flex;
  align-items: center;
  background-color: rgba(239, 241, 249, 0.6);
  width: 37.5rem;

  border-radius: 0.8rem;
  border: ${({ errorMsg }) => errorMsg && '1px solid #D86145'};
  background-color: ${({ errorMsg }) => errorMsg && 'rgba(216, 97, 69, 0.04)'};
`;
export const Input = styled.input`
  display: inline-block;
  height: 5.2rem;
  border: none;
  background-color: transparent;
  margin-left: 1.8rem;

  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.005em;

  &::placeholder {
    color: #abafb1;
  }
`;
