import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Select = ({ label, name, options, onChange }) => {
  const [brands, setBrands] = useState();
  const [cookies] = useCookies();
  const getBrands = async () => {
    const res = await axios({
      url: 'http://onulstore.dlcpop.com/brands',
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
    <>
      <div>{label}</div>
      <select name={name} onChange={onChange}>
        <option>브랜드 선택</option>
        {brands?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.brandName}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
