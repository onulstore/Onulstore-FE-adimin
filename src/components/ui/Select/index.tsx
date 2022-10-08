import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Select = ({ label, name, options, onChange }) => {
  const [brands, setBrands] = useState();
  const getBrands = async () => {
    const res = await axios({
      url: 'http://onulstore.dlcpop.com/brands',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NjQ4NjI4MjJ9.fVome842Q4qg-3g1M9WHoKjMW3nMzK1r2c6z5PjtPjPPm6mA9IGoEOwAbIMNzpJ5z-9c6iliYYoSbqgs7Nqo3A`,
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
