export const signUpReg = {
  ID_REGEX: new RegExp('^[a-z0-9_-]{5,20}$'),
  PW_REGEX: new RegExp('^[a-zA-Z0-9]{8,16}$'),
  EMAIL_REGEX: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  PHONE_REGEX: new RegExp('^[0-9]{5,15}$'),
  NAME_REGEX: new RegExp('^[ㄱ-ㅎ|가-힣]{1,9}$'),
};

export const SIGNUP_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자와 숫자, 특수문자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
  invalidEmail: '이메일 형식에 일치하지 않습니다.',
  invalidPhone: '휴대폰 번호 형식에 일치하지 않습니다.',
  invalidName: '이름 형식 일치하지 않습니다.',
};
