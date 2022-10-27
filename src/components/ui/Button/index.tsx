import React from 'react';
import * as S from './style';
const Button = ({ color = '#606060', children, onClick }: any) => {
  return (
    <S.Button onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
};

export default Button;
