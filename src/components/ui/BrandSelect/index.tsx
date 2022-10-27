import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useCookies } from 'react-cookie';
import axios from 'axios';
const BrandSelect = ({
  label,
  name,
  options,
  optionKey,
  onChange,
  brandId,
  defaultMessage,
}: any) => {
  const [cookies] = useCookies();
  const [brands, setBrands] = useState();
  const getBrands = async () => {
    const res = await axios({
      url: 'https://onulstore.breon.ml/brands',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    const resBrands = res.data.findAllBrands;

    setBrands(resBrands);
  };
  useEffect(() => {
    getBrands();
  }, []);

  return (
    <S.Container>
      <div>{label}</div>
      <select name={name} onChange={onChange} value={brandId}>
        <option>브랜드 선택</option>
        {(brands as any)?.map((item: any) => {
          return (
            <option key={item[optionKey]} value={item.id}>
              {item.brandName}
            </option>
          );
        })}
      </select>
    </S.Container>
  );
};

export default BrandSelect;
