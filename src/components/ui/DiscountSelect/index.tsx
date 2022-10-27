import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import * as S from './style';
const DiscountSelect = ({ label, name, onChange }) => {
  const [brands, setBrands] = useState();
  const [cookies] = useCookies();

  return (
    <S.Container>
      <div>{label}</div>
      <select name={name} onChange={onChange}>
        <option>할인 방법 선택</option>
        <option value="FALSE">할인 안함</option>
        <option value="TRUE">금액 할인</option>
      </select>
    </S.Container>
  );
};

export default DiscountSelect;
