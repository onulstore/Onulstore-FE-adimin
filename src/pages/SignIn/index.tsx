import FormInput from 'components/FormInput';
import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SIGNUP_ERROR_MSG } from 'utils/constants';
import api from 'utils/Api';
import * as S from './style';
import LargeBtn from 'components/LargeBtn';
import { OnulStoreLogo } from 'components/icons';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
  email: string;
  password: string;
};

function SignIn() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const { register, handleSubmit, setFocus, formState } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = useCallback(async (data) => {
    console.log(data);
    const res = await api({
      url: '/auth/login',
      method: 'POST',
      data,
    });
    setCookie('accessToken', res.data.accessToken, { path: '/' });
    console.log(res);
    if (confirm('로그인 되었습니다.')) {
      navigate('/item-management');
    }
  }, []);

  useEffect(() => {
    setFocus('email', { shouldSelect: true });
  }, []);

  return (
    <S.Page>
      <S.Container>
        <OnulStoreLogo />
        <div className="text">
          <p className="title">본사 상점관리 시스템</p>
          <p className="description">
            로그아웃 상태입니다.
            <br />
            로그인하시려면 본사 관리자 계정 정보를 입력하세요.
          </p>
        </div>
        <S.Form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id={'email'}
            errorMsg={formState.errors['email']?.message}
            inputProps={{
              type: 'text',
              placeholder: '이메일 주소',
              ...register('email', {
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
          <FormInput
            id={'password'}
            errorMsg={formState.errors['password']?.message}
            inputProps={{
              type: 'password',
              placeholder: '비밀번호',
              autoComplete: 'off',
              formState: formState.isValid,
              ...register('password', {
                required: SIGNUP_ERROR_MSG.required,
              }),
            }}
          />
          <LargeBtn type="submit" color="#F17659" width={37.5}>
            본사 관리자 로그인
          </LargeBtn>
        </S.Form>
      </S.Container>
    </S.Page>
  );
}

export default SignIn;
