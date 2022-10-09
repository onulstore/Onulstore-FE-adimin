import { EmailIcon, PWIcon } from 'components/icons';
import { memo } from 'react';
import * as S from './style';

interface Props {
  width?: number | undefined;
  height?: number | undefined;
  isSignUp?: boolean;
  id: string;
  label?: string;
  errorMsg: string | boolean | undefined;
  description?: string;
  inputProps?: object;
}

function FormInput({ isSignUp, id, label, errorMsg, inputProps, description }: Props) {
  return (
    <S.Container>
      {isSignUp && (
        <S.Wapper>
          <S.Label htmlFor={id}>{label}</S.Label>
          <S.Description>{description}</S.Description>
        </S.Wapper>
      )}
      <S.InputWrapper errorMsg={errorMsg}>
        {id === 'email' ? <EmailIcon /> : <PWIcon />}
        <S.Input id={id} {...inputProps}></S.Input>
      </S.InputWrapper>
      {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
    </S.Container>
  );
}

export default memo(FormInput, (prevProps, nextProps) => prevProps.errorMsg === nextProps.errorMsg);
